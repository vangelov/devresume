import { useCallback, useState } from "react";
import { useDebouncedEffect } from "../utils";
import { yamlToJSON } from "./yaml-to-json";

type Props = {
  onYAMLParsed: (yaml: string, json: object | undefined) => void;
};

const STORAGE_KEY = "yaml";

export function useYAMLParsing({ onYAMLParsed }: Props) {
  const [yaml, setYAML] = useState(
    () => localStorage.getItem(STORAGE_KEY) || ""
  );

  const onCodeUpdate = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, yaml);
    const { json, errors } = yamlToJSON(yaml);

    if (json) console.log("JSON:", json);
    if (errors) console.log("Errors:", errors);

    onYAMLParsed(yaml, json);
  }, [yaml, onYAMLParsed]);

  useDebouncedEffect(onCodeUpdate);

  return {
    setYAML,
    yaml,
  };
}
