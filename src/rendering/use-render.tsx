import { useCallback, useMemo, useRef, useState } from "react";
import { pdf } from "@react-pdf/renderer";
import { ResumeDocument } from "../documents";
import { Resume } from "../types";

function sleep(delay: number = 1000) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

function createDebouncedQueue<T>(
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

export function useRender() {
  const [blob, setBlob] = useState<Blob | null>(null);

  const queueRef = useRef(
    createDebouncedQueue(async (jsons: Array<Resume | null>) => {
      const lastJSON = jsons[jsons.length - 1];

      if (!lastJSON) {
        setBlob(null);
      } else {
        try {
          const newBlob = await pdf(
            <ResumeDocument resume={lastJSON} />
          ).toBlob();

          setBlob(newBlob);
        } catch (e) {
          // Do nothing
        }
      }
    }, 500)
  );

  const push = useCallback((json: Resume | null) => {
    queueRef.current.push(json);
  }, []);

  const clear = useCallback(() => {
    push(null);
  }, [push]);

  const queue = useMemo(() => ({ push, clear }), [push, clear]);

  return { queue, blob, setBlob };
}
