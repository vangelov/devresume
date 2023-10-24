import { sleep } from "../utils";

export function createDebouncedQueue<T>(
  callback: (items: Array<T>) => Promise<void>,
  delay = 1000
) {
  let items: Array<T> = [];
  let started = false;

  function push(item: T) {
    items.push(item);
    if (!started) start();
  }

  async function start() {
    started = true;

    while (items.length) {
      await sleep(delay);
      const chunk = [...items];
      items = [];
      await callback(chunk);
    }

    started = false;
  }

  return { push };
}
