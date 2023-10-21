import { useCallback } from "react";
import { downloadFile } from "./download-file";
import { readFile } from "./read-file";
import { selectFile } from "./select-file";

type Props = {
  title: string;
  yaml: string;
  onFileOpened: (fileTitle: string, fileContents: string) => void;
};

export function useYAMLPersistence({
  title,
  yaml: contents,
  onFileOpened,
}: Props) {
  const save = useCallback(() => {
    downloadFile(title + ".yaml", new Blob([contents], { type: "text/yaml" }));
  }, [title, contents]);

  const open = useCallback(async () => {
    const file = await selectFile("text/yaml");

    try {
      const fileContents = await readFile(file);
      const extStartIndex = file.name.lastIndexOf(".");
      const fileTitle = file.name.slice(0, extStartIndex);
      onFileOpened(fileTitle, fileContents);
    } catch (e) {
      console.error("Cannot read file: ", file.name);
    }
  }, [onFileOpened]);

  return {
    open,
    save,
  };
}
