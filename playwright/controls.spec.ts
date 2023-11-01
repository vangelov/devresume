import { test, expect } from "@playwright/test";
import { PDFDocument } from "./components/pdf-document";
import {
  Editor,
  FileControls,
  PreviewControls,
  TitleControls,
} from "./components";
import { SAMPLE_YAML } from "../src/parsing/sample";

test.describe("preview controls", () => {
  let pdfDocument;

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    pdfDocument = PDFDocument(page);
    await pdfDocument.waitToAppear();
  });

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

test.describe("file controls", () => {
  test("should open .yml files", async ({ page }) => {
    await page.goto("/");
    await page.evaluate(() => {
      localStorage["yaml"] = "";
    });
    await page.reload();

    const fileChooserPromise = page.waitForEvent("filechooser");
    await FileControls(page).open();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles({
      name: "sample.yml",
      mimeType: "text/yaml",
      buffer: Buffer.from(SAMPLE_YAML),
    });

    await TitleControls(page).expect().toHaveTitle("sample");

    const pdfDocument = PDFDocument(page);
    await pdfDocument.waitToAppear();
    await pdfDocument.expect().toHaveScreenshotsOfPages();
  });

  test("should save yaml", async ({ page }) => {
    await page.goto("/");
    const title = "TestTitle";
    await TitleControls(page).setTitle(title);
    const downloadPromise = page.waitForEvent("download");
    await FileControls(page).save();
    const download = await downloadPromise;

    expect(download.suggestedFilename()).toBe(title + ".yaml");
  });

  test("should create new resumes", async ({ page }) => {
    await page.goto("/");
    await FileControls(page).newResume();

    await Editor(page).expect().toHaveEmptyText();
    await PDFDocument(page).expect().toBeHidden();
  });
});
