import CodeMirror from "@uiw/react-codemirror";
import * as yamlMode from "@codemirror/legacy-modes/mode/yaml";
import { StreamLanguage } from "@codemirror/language";
import { vscodeDarkInit } from "@uiw/codemirror-theme-vscode";
import { memo } from "react";
import "./yaml-editor.css";

const yaml = StreamLanguage.define(yamlMode.yaml);

type Props = {
  value: string;
  onChange: (value: string) => void;
};

function UnmemoizedYAMLEditor({ value, onChange }: Props) {
  return (
    <CodeMirror
      className="YAMLEditor"
      value={value}
      onChange={onChange}
      theme={vscodeDarkInit({
        settings: { fontFamily: "Monaco, Courier, monospace" },
      })}
      extensions={[yaml]}
    />
  );
}

export const YAMLEditor = memo(UnmemoizedYAMLEditor);
