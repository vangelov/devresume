import { useCallback, useState } from "react";
import { clamp } from "../utils/clamp";

type Props = {
  absDelta?: number;
  minScale: number;
  maxScale: number;
};

const EPSILON = 0.00001;

export const ABS_DELTA = 0.1;
export const INITIAL_SCALE = 1;
export const STORAGE_KEY = "scale";

export function useScale({ minScale, maxScale, absDelta = ABS_DELTA }: Props) {
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
    updateScale(absDelta);
  }, [updateScale, absDelta]);

  const zoomOut = useCallback(() => {
    updateScale(-absDelta);
  }, [updateScale, absDelta]);

  const maxScaleReached = Math.abs(scale - maxScale) < EPSILON;
  const minScaleReached = Math.abs(scale - minScale) < EPSILON;

  return {
    scale,
    zoomIn,
    zoomOut,
    maxScaleReached,
    minScaleReached,
  };
}
