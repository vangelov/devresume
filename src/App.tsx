import { createElement, useState } from "react";
import { yamlToJSON } from "./parsing";
import Markdown from "markdown-to-jsx";

import { Viewport, useRenderQueue } from "./rendering";
import { YAMLEditor } from "./editing";
import SplitPane, { Pane, SashContent } from "split-pane-react";
import "split-pane-react/esm/themes/default.css";

function App() {
  const [code, setCode] = useState("");
  const renderQueue = useRenderQueue();
  const [sizes, setSizes] = useState<Array<string | number>>(["80%"]);
  const [sizes2, setSizes2] = useState<Array<string | number>>(["40%"]);

  async function onChange(yaml: string) {
    setCode(yaml);

    const { json } = yamlToJSON(yaml);
    console.log("t", json);

    if (json) {
      renderQueue.push(json);
    } else if (!yaml) {
      renderQueue.clear();
    }
  }

  const md = `
# Hello world
[abv.bg](fdsfd)
`;

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
      <div style={{ height: "50px", backgroundColor: "green" }} />
      <SplitPane
        sashRender={(_, active) => (
          <SashContent active={active} type="vscode" />
        )}
        split="horizontal"
        sizes={sizes}
        onChange={setSizes}
      >
        <SplitPane
          sashRender={(_, active) => (
            <SashContent active={active} type="vscode" />
          )}
          split="vertical"
          sizes={sizes2}
          onChange={setSizes2}
        >
          <Pane minSize={200} maxSize="50%">
            <YAMLEditor
              value={code}
              onChange={onChange}
              style={{
                overflowY: "hidden",
                height: "100%",
              }}
            />
          </Pane>

          <Viewport
            scale={1}
            blob={renderQueue.blob}
            style={{
              overflowY: "auto",
              width: "100%",
              height: "100%",
              backgroundColor: "#374151",
            }}
          />
        </SplitPane>

        <Pane minSize={50} maxSize="50%">
          <div
            style={{
              backgroundColor: "#1e1e1e",
              width: "100%",
              height: "100%",
              borderTop: "1px solid #2A2A2A",
            }}
          >
            <Markdown
              children={md}
              options={{
                createElement(type, props, children) {
                  console.log("create", type, props, children);
                  return (
                    <div className="parent">
                      {createElement(type, props, children)}
                    </div>
                  );
                },
              }}
            />
          </div>
        </Pane>
      </SplitPane>
    </div>
  );
}

export default App;
