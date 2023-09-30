import CodeMirror from "@uiw/react-codemirror";
import * as yamlMode from "@codemirror/legacy-modes/mode/yaml";
import { StreamLanguage } from "@codemirror/language";
import { vscodeDarkInit } from "@uiw/codemirror-theme-vscode";
import { CSSProperties } from "react";

const yaml = StreamLanguage.define(yamlMode.yaml);

type Props = {
  value: string;
  onChange: (value: string) => void;
  style?: CSSProperties;
};

export function YAMLEditor({ value, onChange, style }: Props) {
  return (
    <CodeMirror
      style={{ fontSize: "14px", ...style }}
      value={value}
      onChange={onChange}
      theme={vscodeDarkInit({
        settings: { fontFamily: "Monaco, Courier, monospace" },
      })}
      extensions={[yaml]}
    />
  );
}
