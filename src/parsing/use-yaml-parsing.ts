import { useCallback, useState } from "react";
import { useDebouncedEffect } from "../utils";
import { yamlToJSON } from "./yaml-to-json";
import { SAMPLE_YAML } from "./sample";

type Props = {
  onYAMLParsed: (yaml: string, json: object | undefined) => void;
};

export const STORAGE_KEY = "yaml";

export function useYAMLParsing({ onYAMLParsed }: Props) {
  const [yaml, setYAML] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored && stored !== "") {
      return SAMPLE_YAML;
    }

    return stored || "";
  });

  const onCodeUpdate = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, yaml);
    const { json, errors } = yamlToJSON(yaml);

    if (process.env.NODE_ENV !== "test") {
      if (json) console.log("JSON:", json);
      if (errors) console.error("Errors:", errors);
    }

    onYAMLParsed(yaml, json);
  }, [yaml, onYAMLParsed]);

  useDebouncedEffect(onCodeUpdate);

  return {
    setYAML,
    yaml,
  };
}
