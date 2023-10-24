import { expect, test } from "vitest";
import { createDebouncedQueue } from "./debounced-queue";

const ITEM1 = "1";
const ITEM2 = "2";
const ITEM3 = "3";

const DELAY = 200;

test("calls the callback with only the items pushed before the delay", async () => {
  let callback: (items: Array<string>) => void;
  const delay = 200;
  const deferred = new Promise((resolve) => {
    callback = resolve;
  });

  const queue = createDebouncedQueue<string>((items) => {
    callback(items);
    return Promise.resolve();
  }, DELAY);

  queue.push(ITEM1);

  // Add more items befire the delay
  setTimeout(() => {
    queue.push(ITEM2);
  }, delay / 2);

  // Add more items but after the delay
  setTimeout(() => {
    queue.push(ITEM3);
  }, 2 * delay);

  expect(deferred).resolves.toStrictEqual([ITEM1, ITEM2]);
});

test("calls the callback a one more time with the items pushed during the first callback", async () => {
  let callback: (items: Array<string>) => void;
  const deferred = new Promise((resolve) => {
    callback = resolve;
  });
  let callback2: (items: Array<string>) => void;
  const deferred2 = new Promise((resolve) => {
    callback2 = resolve;
  });

  const queue = createDebouncedQueue<string>((items) => {
    callback(items);
    callback = callback2;
    queue.push(ITEM2);
    queue.push(ITEM3);
    return Promise.resolve();
  }, DELAY);

  queue.push(ITEM1);
  expect(deferred).resolves.toStrictEqual([ITEM1]);
  expect(deferred2).resolves.toStrictEqual([ITEM2, ITEM3]);
});
