import { expect, test } from "vitest";
import { renderHook } from "@testing-library/react";
import { useScale, STORAGE_KEY, ABS_DELTA } from ".";
import { act } from "react-dom/test-utils";

test("returns the initial scale if nothing is saved", () => {
  localStorage.removeItem(STORAGE_KEY);
  const { result } = renderHook(() => useScale({ minScale: 0.5, maxScale: 2 }));
  expect(result.current.scale).toBe(1);
});

test("returns the value from the localStorage if present", () => {
  const scale = 1.2;
  localStorage.setItem(STORAGE_KEY, scale.toString());
  const { result } = renderHook(() => useScale({ minScale: 0.5, maxScale: 2 }));
  expect(result.current.scale).toBe(1.2);
});

test("increases the scale with the right delta and stores the value", () => {
  const { result } = renderHook(() => useScale({ minScale: 0.5, maxScale: 2 }));
  const initialScale = result.current.scale;

  act(() => {
    result.current.zoomIn();
  });

  const newScale = initialScale + ABS_DELTA;
  expect(result.current.scale).toBe(newScale);
  expect(localStorage.getItem(STORAGE_KEY)).toEqual(newScale.toString());
});

test("decreases the scale with the right delta and stores the value", () => {
  const { result } = renderHook(() => useScale({ minScale: 0.5, maxScale: 2 }));
  const initialScale = result.current.scale;

  act(() => {
    result.current.zoomOut();
  });

  const newScale = initialScale - ABS_DELTA;
  expect(result.current.scale).toBe(newScale);
  expect(localStorage.getItem(STORAGE_KEY)).toEqual(newScale.toString());
});

test("increases the scale no more than maxScale", () => {
  const maxScale = 1.2;
  const initialScale = 1;
  localStorage.setItem("scale", initialScale.toString());

  const { result } = renderHook(() =>
    useScale({ minScale: 1, maxScale, absDelta: 0.1 })
  );

  act(() => {
    result.current.zoomIn();
    result.current.zoomIn();
    result.current.zoomIn();
    result.current.zoomIn();
  });

  expect(result.current.scale).toBe(maxScale);
  expect(result.current.maxScaleReached).toBe(true);
  expect(result.current.minScaleReached).toBe(false);
});

test("decreases the scale no less than minScale", () => {
  const minScale = 1;
  const initialScale = 1;
  localStorage.setItem("scale", initialScale.toString());

  const { result } = renderHook(() =>
    useScale({ minScale, maxScale: 1.2, absDelta: 0.1 })
  );

  act(() => {
    result.current.zoomOut();
    result.current.zoomOut();
    result.current.zoomOut();
    result.current.zoomOut();
  });

  expect(result.current.scale).toBe(minScale);
  expect(result.current.minScaleReached).toBe(true);
  expect(result.current.maxScaleReached).toBe(false);
});
