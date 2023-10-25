export function createDeferred<T>() {
  let resolve: (value: T) => void = () => {};
  let reject: (reason?: unknown) => void = () => {};

  // The Promise is guarantted to call the passed callback synchronously
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });

  return { promise, resolve, reject };
}
