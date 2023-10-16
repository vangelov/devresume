import CodeMirror from "@uiw/react-codemirror";
import * as yamlMode from "@codemirror/legacy-modes/mode/yaml";
import { StreamLanguage } from "@codemirror/language";
import { vscodeDarkInit } from "@uiw/codemirror-theme-vscode";
import { memo } from "react";

const yaml = StreamLanguage.define(yamlMode.yaml);

type Props = {
  value: string;
  onChange: (value: string) => void;
};

function UnmemoizedYAMLEditor({ value, onChange }: Props) {
  return (
    <CodeMirror
      style={{
        fontSize: "14px",
        overflowY: "hidden",
        height: "100%",
        borderRight: "1px solid #2A2A2A",
      }}
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
