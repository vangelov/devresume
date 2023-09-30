import { useState } from "react";
import { yamlToJSON } from "./parsing";

import { PDF, useRenderQueue } from "./rendering";
import { YAMLEditor } from "./editing";
import SplitPane, { Pane, SashContent } from "split-pane-react";
import "split-pane-react/esm/themes/default.css";
function sashRender(_: number, active: boolean) {
  return <SashContent active={active} type="vscode" />;
}

function App() {
  const [code, setCode] = useState("");
  const renderQueue = useRenderQueue();
  const [sizes, setSizes] = useState<Array<string | number>>(["80%"]);
  const [sizes2, setSizes2] = useState<Array<string | number>>(["40%"]);

  const [j, setJ] = useState<object>({});

  async function onChange(yaml: string) {
    setCode(yaml);

    const { json, errors } = yamlToJSON(yaml);
    if (json) setJ(json);
    console.log("t", json, errors);

    if (json) {
      renderQueue.push(json);
    } else if (!yaml) {
      renderQueue.clear();
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
      <div style={{ height: "50px", backgroundColor: "green" }}></div>
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

          <PDF scale={1} blob={renderQueue.blob} />
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
