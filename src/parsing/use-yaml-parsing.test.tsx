import { describe, expect, test } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useYAMLParsing } from ".";
import { SAMPLE_YAML } from "./sample";
import { createDeferred } from "../utils";

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
  const yamlDeferred = createDeferred<string>();

  const { result } = renderHook(() =>
    useYAMLParsing({
      onYAMLParsed: (yaml) => {
        yamlDeferred.resolve(yaml);
      },
    })
  );

  act(() => {
    result.current.setYAML(yaml);
  });

  expect(yamlDeferred.promise).resolves.toBe(yaml);
});

describe("callback", () => {
  test("calls with the YAML and the parsed json if valid", async () => {
    const yamlDeferred = createDeferred<string>();
    const jsonDeferred = createDeferred<object | undefined>();

    const { result } = renderHook(() =>
      useYAMLParsing({
        onYAMLParsed: (yaml, json) => {
          yamlDeferred.resolve(yaml);
          jsonDeferred.resolve(json);
        },
      })
    );

    act(() => {
      result.current.setYAML(yaml);
    });

    expect(yamlDeferred.promise).resolves.toBe(yaml);
    expect(jsonDeferred.promise).resolves.toStrictEqual(json);
  });

  test("calls with the YAML and null if invalid", async () => {
    const yamlDeferred = createDeferred<string>();
    const jsonDeferred = createDeferred<object | undefined>();

    const { result } = renderHook(() =>
      useYAMLParsing({
        onYAMLParsed: (yaml, json) => {
          yamlDeferred.resolve(yaml);
          jsonDeferred.resolve(json);
        },
      })
    );

    act(() => {
      result.current.setYAML(invalidYAML);
    });

    expect(yamlDeferred.promise).resolves.toBe(invalidYAML);
    expect(jsonDeferred.promise).resolves.toBe(undefined);
  });
});
