import CodeMirror, { ReactCodeMirrorRef } from "@uiw/react-codemirror";
import * as yamlMode from "@codemirror/legacy-modes/mode/yaml";
import { StreamLanguage } from "@codemirror/language";
import { vscodeDarkInit } from "@uiw/codemirror-theme-vscode";
import { RefObject, memo } from "react";
import "./yaml-editor.css";

const yaml = StreamLanguage.define(yamlMode.yaml);

type Props = {
  value: string;
  onChange: (value: string) => void;
  codeMirrorRef: RefObject<ReactCodeMirrorRef>;
};

export const YAMLEditor = memo(function ({
  value,
  onChange,
  codeMirrorRef,
}: Props) {
  return (
    <CodeMirror
      ref={codeMirrorRef}
      className="YAMLEditor"
      value={value}
      onChange={onChange}
      theme={vscodeDarkInit({
        settings: { fontFamily: "Monaco, Courier, monospace" },
      })}
      extensions={[yaml]}
    />
  );
});
