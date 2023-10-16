import { useEffect } from "react";

export function useDebouncedEffect(effect: () => void) {
  useEffect(() => {
    const intervalId = setTimeout(effect, 200);

    return () => {
      clearTimeout(intervalId);
    };
  }, [effect]);
}
