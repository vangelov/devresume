import { test, expect } from "@playwright/test";
import { PDFDocument } from "./components/pdf-document";
import { PreviewControls, TitleControls } from "./components";

let pdfDocument;

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  pdfDocument = PDFDocument(page);
  await pdfDocument.waitToAppear();
});

test.describe("preview controls", () => {
  test.describe("zooming", () => {
    let initialScale;

    test.beforeEach(async () => {
      initialScale = await pdfDocument.getScale();
    });

    test("should zoom-in", async ({ page }) => {
      await PreviewControls(page).zoomIn();
      await pdfDocument.waitToZoomIn(initialScale);
      await pdfDocument.expect().toHaveScreenshotsOfPages();
    });

    test("should zoom-out", async ({ page }) => {
      await PreviewControls(page).zoomOut();
      await pdfDocument.waitToZoomOut(initialScale);
      await pdfDocument.expect().toHaveScreenshotsOfPages();
    });
  });

  test("should export pdf", async ({ page }) => {
    const title = "TestTitle";
    await TitleControls(page).setTitle(title);
    const downloadPromise = page.waitForEvent("download");
    await PreviewControls(page).exportPDF();
    const download = await downloadPromise;

    expect(download.suggestedFilename()).toBe(title + ".pdf");
  });
});
