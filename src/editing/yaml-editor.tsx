import CodeMirror from "@uiw/react-codemirror";
import * as yamlMode from "@codemirror/legacy-modes/mode/yaml";
import { StreamLanguage } from "@codemirror/language";
import { vscodeDarkInit } from "@uiw/codemirror-theme-vscode";

const yaml = StreamLanguage.define(yamlMode.yaml);

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function YAMLEditor({ value, onChange }: Props) {
  return (
    <CodeMirror
      style={{ fontSize: "14px", overflowY: "hidden", height: "100%" }}
      value={value}
      onChange={onChange}
      theme={vscodeDarkInit({
        settings: { fontFamily: "Monaco, Courier, monospace" },
      })}
      extensions={[yaml]}
    />
  );
}
