import { useCallback, useState } from "react";
import { clamp } from "../utils/clamp";

type Props = {
  minScale: number;
  maxScale: number;
};

const INITIAL_SCALE = 1;
const DELTA = 0.1;
const STORAGE_KEY = "scale";

export function useScale({ minScale, maxScale }: Props) {
  const [scale, setScale] = useState(
    () => Number(localStorage.getItem(STORAGE_KEY)) || INITIAL_SCALE
  );

  const updateScale = useCallback(
    (delta: number) => {
      setScale((scale) => {
        const newScale = clamp(minScale, maxScale, scale + delta);
        localStorage.setItem(STORAGE_KEY, newScale.toString());

        return newScale;
      });
    },
    [minScale, maxScale]
  );

  const zoomIn = useCallback(() => {
    updateScale(DELTA);
  }, [updateScale]);

  const zoomOut = useCallback(() => {
    updateScale(-DELTA);
  }, [updateScale]);

  return {
    scale,
    zoomIn,
    zoomOut,
  };
}
