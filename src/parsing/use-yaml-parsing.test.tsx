import { describe, expect, test } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useYAMLParsing } from ".";
import { SAMPLE_YAML } from "./sample";

const yaml = `
basics:
  name: Test
`;

const invalidYAML = `
basics
  name:
    test
`;

const json = { basics: { name: "Test" } };

//

test("returns the sample YAML if never used before", () => {
  const { result } = renderHook(() =>
    useYAMLParsing({ onYAMLParsed: () => {} })
  );
  expect(result.current.yaml).toEqual(SAMPLE_YAML);
});

test("updates the value in localStorage", () => {
  let callback: (yaml: string) => void;
  const deferred = new Promise((resolve) => {
    callback = resolve;
  });

  const { result } = renderHook(() =>
    useYAMLParsing({
      onYAMLParsed: (yaml) => {
        callback(yaml);
      },
    })
  );

  act(() => {
    result.current.setYAML(yaml);
  });

  expect(deferred).resolves.toBe(yaml);
});

describe("callback", () => {
  test("calls with the YAML and the parsed json if valid", async () => {
    let yamlCallback: (yaml: string) => void;
    const yamlDeferred = new Promise((resolve) => {
      yamlCallback = resolve;
    });

    let jsonCallback: (json: object | undefined) => void;
    const jsonDeferred = new Promise((resolve) => {
      jsonCallback = resolve;
    });

    const { result } = renderHook(() =>
      useYAMLParsing({
        onYAMLParsed: (yaml, json) => {
          yamlCallback(yaml);
          jsonCallback(json);
        },
      })
    );
    act(() => {
      result.current.setYAML(yaml);
    });

    expect(yamlDeferred).resolves.toBe(yaml);
    expect(jsonDeferred).resolves.toStrictEqual(json);
  });

  test("calls with the YAML and null if invalid", async () => {
    let yamlCallback: (yaml: string) => void;
    const yamlDeferred = new Promise((resolve) => {
      yamlCallback = resolve;
    });

    let jsonCallback: (json: object | undefined) => void;
    const jsonDeferred = new Promise((resolve) => {
      jsonCallback = resolve;
    });

    const { result } = renderHook(() =>
      useYAMLParsing({
        onYAMLParsed: (yaml, json) => {
          yamlCallback(yaml);
          jsonCallback(json);
        },
      })
    );
    act(() => {
      result.current.setYAML(invalidYAML);
    });

    expect(yamlDeferred).resolves.toBe(invalidYAML);
    expect(jsonDeferred).resolves.toBe(undefined);
  });
});
