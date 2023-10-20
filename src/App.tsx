import { useCallback, useState } from "react";
import { yamlToJSON } from "./parsing";
import { PDF, useRender, useScale } from "./rendering";
import { Schema, YAMLEditor } from "./editing";
import "split-pane-react/esm/themes/default.css";
import {
  ControlsLayout,
  FileControls,
  PreviewControls,
  TitleControls,
} from "./controls";
import { PanesLayout } from "./panes-layout";
import { useDebouncedEffect } from "./utils/use-debounced-effect";
import "./app.css";

export function App() {
  const [code, setCode] = useState(() => localStorage.getItem("code") || "");
  const { queue, blob } = useRender();
  const { zoomIn, zoomOut, scale } = useScale({ minScale: 0.5, maxScale: 2 });
  const [title, setTitle] = useState("Untitled");

  const onCodeUpdate = useCallback(() => {
    localStorage.setItem("code", code);
    const { json, errors } = yamlToJSON(code);

    if (json) console.log("JSON:", json);
    if (errors) console.log("Errors:", errors);

    if (json) queue.push(json);
    else if (!code) queue.clear();
  }, [code, queue]);

  useDebouncedEffect(onCodeUpdate);

  const onChange = useCallback(async (yaml: string) => {
    setCode(yaml);
  }, []);

  function onDownload() {
    if (blob) {
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
    }
  }

  const onTitleChange = useCallback((value: string) => {
    setTitle(value);
  }, []);

  return (
    <div className="App">
      <ControlsLayout
        left={<FileControls onOpen={() => {}} onSave={() => {}} />}
        center={<TitleControls title={title} onChange={onTitleChange} />}
        right={
          <PreviewControls
            onDownload={onDownload}
            onZoomIn={zoomIn}
            onZoomOut={zoomOut}
          />
        }
      />

      <PanesLayout
        left={<YAMLEditor value={code} onChange={onChange} />}
        right={<PDF scale={scale} blob={blob} />}
        bottom={<Schema />}
      />
    </div>
  );
}
