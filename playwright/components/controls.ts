import { Page, expect } from "@playwright/test";

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
    expect: () => ({
      toHaveTitle: (title: string) => expect(input).toHaveValue(title),
    }),
  };
}

export function FileControls(page: Page) {
  const open = () => page.getByTestId("open").click();
  const save = () => page.getByTestId("save").click();
  const newResume = () => page.getByTestId("new").click();

  return {
    open,
    save,
    newResume,
  };
}
