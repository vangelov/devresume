import { Page, expect } from "@playwright/test";

export function Editor(page: Page) {
  const self = page.locator(".cm-content");

  return {
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
