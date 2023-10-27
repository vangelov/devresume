import { Page } from "@playwright/test";

export function PreviewControls(page: Page) {
  const zoomIn = () => page.getByTestId("zoom-in").click();
  const zoomOut = () => page.getByTestId("zoom-out").click();
  const exportPDF = () => page.getByTestId("export").click();

  return {
    zoomIn,
    zoomOut,
    exportPDF,
  };
}

export function TitleControls(page: Page) {
  const input = page.getByTestId("title");

  const setTitle = (value: string) => input.fill(value);

  return {
    setTitle,
  };
}
