import { test, expect, describe, afterEach } from "vitest";
import { renderHook } from "@testing-library/react";
import { useYAMLPersistence } from ".";
import * as fileManagement from "./file-management";
import { vi } from "vitest";

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

    let fileTitleResolve: (fileTitle: string) => void;
    const fileTitleDeferred = new Promise((resolve) => {
      fileTitleResolve = resolve;
    });

    let fileContentsResolve: (fileContents: string) => void;
    const fileContentsDeferred = new Promise((resolve) => {
      fileContentsResolve = resolve;
    });

    const { result } = renderHook(() =>
      useYAMLPersistence({
        title: "title",
        yaml: "",
        onFileOpened: (fileTitle, fileContents) => {
          fileTitleResolve(fileTitle);
          fileContentsResolve(fileContents);
        },
      })
    );

    result.current.open();

    expect(fileTitleDeferred).resolves.toBe("file");
    expect(fileContentsDeferred).resolves.toBe(fileContents);
  });
});
