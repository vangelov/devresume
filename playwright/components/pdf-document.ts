import { Page, expect } from "@playwright/test";

export function PDFDocument(page: Page) {
  const self = page.getByTestId("pdf-document");
  const pages = page.locator(".react-pdf__Page");

  const waitToAppear = () => self.waitFor({ state: "visible" });

  const getScale = async () => {
    const scale = await self.getAttribute("data-scale");
    return Number(scale);
  };

  const waitToZoomIn = async (initialScale: number) => {
    expect.poll(getScale).toBeGreaterThan(initialScale);
  };

  const waitToZoomOut = async (initialScale: number) => {
    expect.poll(getScale).toBeLessThan(initialScale);
  };

  return {
    self,
    waitToAppear,
    getScale,
    waitToZoomIn,
    waitToZoomOut,
    expect: () => ({
      async toHaveScreenshotsOfPages() {
        for (const page of await pages.all()) {
          await expect(page).toHaveScreenshot({ scale: "device" });
        }
      },
    }),
  };
}

export const t = 10;
