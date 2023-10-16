import { CSSProperties, useCallback, useState } from "react";
import { yamlToJSON } from "./parsing";
import { PDF, useRender, useScale } from "./rendering";
import { YAMLEditor } from "./editing";
import "split-pane-react/esm/themes/default.css";
import {
  ControlsLayout,
  FileControls,
  PreviewControls,
  TitleControls,
} from "./controls";
import { PanesLayout } from "./panes-layout";
import { useDebouncedEffect } from "./utils/use-debounced-effect";

const styles: Record<string, CSSProperties> = {
  root: {
    display: "flex",
    position: "relative",
    width: "100vw",
    height: "100vh",
    flexDirection: "column",
  },
};

function App() {
  const [code, setCode] = useState(() => localStorage.getItem("code") || "");
  const { queue, blob } = useRender();
  const { zoomIn, zoomOut, scale } = useScale({ minScale: 0.5, maxScale: 2 });
  const [title, setTitle] = useState("Untitled");

  const onCodeUpdate = useCallback(() => {
    const { json, errors } = yamlToJSON(code);

    if (json) console.log("JSON:", json);
    if (errors) console.log("Errors:", errors);

    if (json) queue.push(json);
    else if (!code) queue.clear();
  }, [code, queue]);

  useDebouncedEffect(onCodeUpdate);

  const onChange = useCallback(async (yaml: string) => {
    setCode(yaml);
    localStorage.setItem("code", yaml);
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
    <div style={styles.root}>
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
        bottom={
          <div
            style={{
              backgroundColor: "#1e1e1e",
              width: "100%",
              height: "100%",
              borderTop: "1px solid #2A2A2A",
            }}
          ></div>
        }
      />
    </div>
  );
}

export default App;
