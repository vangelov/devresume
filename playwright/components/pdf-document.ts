import { Page, expect } from "@playwright/test";

export function PDFDocument(page: Page) {
  // We need to check the data-ready attribute as well
  // in order to avoid getting the back buffer
  const self = page.locator('[data-testid="pdf-document"][data-ready="true"]');
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
      ...expect(self),
      async toHaveScreenshotsOfPages() {
        for (const page of await pages.all()) {
          await expect(page).toHaveScreenshot({ scale: "device" });
        }
      },
    }),
  };
}
