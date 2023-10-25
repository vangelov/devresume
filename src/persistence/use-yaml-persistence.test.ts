import { test, expect, describe, afterEach } from "vitest";
import { renderHook } from "@testing-library/react";
import { useYAMLPersistence } from ".";
import * as fileManagement from "./file-management";
import { vi } from "vitest";
import { createDeferred } from "../utils";

describe("use-yaml-persistence", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test.only("saves the file with the right title", () => {
    const downloadFileSpy = vi
      .spyOn(fileManagement, "downloadFile")
      .mockImplementation(() => undefined);

    const { result } = renderHook(() =>
      useYAMLPersistence({ title: "title", yaml: "", onFileOpened: () => {} })
    );
    result.current.save();

    expect(downloadFileSpy.mock.calls[0][0]).toBe("title.yaml");
  });

  test("saves the file with the right title", () => {
    const fileName = "file.yaml";
    const fileContents = "contents";

    vi.spyOn(fileManagement, "selectFile").mockImplementation(() =>
      Promise.resolve({ name: fileName } as File)
    );

    vi.spyOn(fileManagement, "readFile").mockImplementation(() =>
      Promise.resolve("contents")
    );

    const fileTitleDeferred = createDeferred<string>();
    const fileContentsDeferred = createDeferred<string>();

    const { result } = renderHook(() =>
      useYAMLPersistence({
        title: "title",
        yaml: "",
        onFileOpened: (fileTitle, fileContents) => {
          fileTitleDeferred.resolve(fileTitle);
          fileContentsDeferred.resolve(fileContents);
        },
      })
    );

    result.current.open();

    expect(fileTitleDeferred.promise).resolves.toBe("file");
    expect(fileContentsDeferred.promise).resolves.toBe(fileContents);
  });
});
