import { useCallback } from "react";
import { downloadFile, readFile, selectFile } from "./file-management";

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
    const blob = new Blob([contents], { type: "text/yaml" });
    downloadFile(title + ".yaml", blob);
  }, [title, contents]);

  const open = useCallback(async () => {
    const file = await selectFile("text/yaml");

    try {
      const fileContents = await readFile(file);
      const extStartIndex = file.name.lastIndexOf(".");
      const fileTitle = file.name.slice(0, extStartIndex);

      onFileOpened(fileTitle, fileContents);
    } catch (e) {
      console.error("Cannot read file: ", file.name, e);
    }
  }, [onFileOpened]);

  return {
    open,
    save,
  };
}
