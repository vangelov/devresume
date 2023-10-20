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
import { useYAMLFile } from "./files";
import { downloadFile } from "./files";

export function App() {
  const [code, setCode] = useState(() => localStorage.getItem("code") || "");
  const { queue, blob } = useRender();
  const { zoomIn, zoomOut, scale } = useScale({ minScale: 0.5, maxScale: 2 });
  const [title, setTitle] = useState("Untitled");

  const onFileOpened = useCallback(
    (fileTitle: string, fileContents: string) => {
      setTitle(fileTitle);
      setCode(fileContents);
    },
    []
  );

  const yamlFile = useYAMLFile({ title, contents: code, onFileOpened });

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

  const onDownload = useCallback(() => {
    if (blob) {
      downloadFile(title, blob);
    }
  }, [blob, title]);

  return (
    <div className="App">
      <ControlsLayout
        left={<FileControls onOpen={yamlFile.open} onSave={yamlFile.save} />}
        center={<TitleControls title={title} onChange={setTitle} />}
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
