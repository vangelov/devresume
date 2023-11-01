import { Page, expect } from "@playwright/test";

export function Editor(page: Page) {
  const self = page.locator(".cm-content");

  const type = async (value: string) => {
    await self.focus();
    await page.keyboard.insertText(value);
  };

  const clearAndRefresh = async () => {
    await page.evaluate(() => {
      localStorage["yaml"] = "";
    });
    await page.reload();
  };

  return {
    type,
    clearAndRefresh,
    expect: () => ({
      toHaveEmptyText: async () => {
        await expect
          .poll(async () => {
            const text = await self.innerText();
            return text.trim();
          })
          .toEqual("");
      },
    }),
  };
}
