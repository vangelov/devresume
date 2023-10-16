import { useEffect, useState } from "react";
import { yamlToJSON } from "./parsing";

import { PDF, useRender } from "./rendering";
import { YAMLEditor } from "./editing";
import SplitPane, { Pane, SashContent } from "split-pane-react";
import "split-pane-react/esm/themes/default.css";
import { PreviewControls } from "./controls";

function sashRender(_: number, active: boolean) {
  return <SashContent active={active} type="vscode" />;
}

function App() {
  const [code, setCode] = useState(() => localStorage.getItem("code") || "");
  const { queue, blob } = useRender();
  const [sizes, setSizes] = useState<Array<string | number>>(["80%"]);
  const [sizes2, setSizes2] = useState<Array<string | number>>(["40%"]);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const { json, errors } = yamlToJSON(code);

    if (json) console.log("JSON:", json);
    if (errors) console.log("Errors:", errors);

    if (json) queue.push(json);
    else if (!code) queue.clear();
  }, [code, queue]);

  async function onChange(yaml: string) {
    setCode(yaml);
    localStorage.setItem("code", yaml);
  }

  function onZoomIn() {
    setScale(scale + 0.1);
  }

  function onZoomOut() {
    setScale(scale - 0.1);
  }

  function download() {
    if (blob) {
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
    }
  }

  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <PreviewControls
        onZoomIn={onZoomIn}
        onZoomOut={onZoomOut}
        onDownload={download}
      />

      <SplitPane
        sashRender={sashRender}
        split="horizontal"
        sizes={sizes}
        onChange={setSizes}
      >
        <SplitPane
          sashRender={sashRender}
          split="vertical"
          sizes={sizes2}
          onChange={setSizes2}
        >
          <Pane minSize={200} maxSize="50%">
            <YAMLEditor value={code} onChange={onChange} />
          </Pane>

          <PDF scale={scale} blob={blob} />
        </SplitPane>

        <Pane minSize={50} maxSize="50%">
          <div
            style={{
              backgroundColor: "#1e1e1e",
              width: "100%",
              height: "100%",
              borderTop: "1px solid #2A2A2A",
            }}
          ></div>
        </Pane>
      </SplitPane>
    </div>
  );
}

export default App;
