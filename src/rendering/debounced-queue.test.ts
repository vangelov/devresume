import { expect, test } from "vitest";
import { createDebouncedQueue } from "./debounced-queue";
import { createDeferred } from "../utils";

const ITEM1 = "1";
const ITEM2 = "2";
const ITEM3 = "3";

const DELAY = 200;

test("calls the callback with only the items pushed before the delay", async () => {
  const delay = 200;
  const deferred = createDeferred<Array<string>>();

  const queue = createDebouncedQueue<string>((items) => {
    deferred.resolve(items);
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

  expect(deferred.promise).resolves.toStrictEqual([ITEM1, ITEM2]);
});

test("calls the callback a one more time with the items pushed during the first callback", async () => {
  const deferred1 = createDeferred<Array<string>>();
  const deferred2 = createDeferred<Array<string>>();
  let deferred = deferred1;

  const queue = createDebouncedQueue<string>((items) => {
    deferred.resolve(items);
    deferred = deferred2;

    queue.push(ITEM2);
    queue.push(ITEM3);
    return Promise.resolve();
  }, DELAY);

  queue.push(ITEM1);
  expect(deferred.promise).resolves.toStrictEqual([ITEM1]);
  expect(deferred2.promise).resolves.toStrictEqual([ITEM2, ITEM3]);
});
