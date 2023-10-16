import { ReactElement, useState } from "react";
import { Pane, SashContent } from "split-pane-react";
import SplitPane from "split-pane-react/esm/SplitPane";

type Props = {
  left: ReactElement;
  bottom: ReactElement;
  right: ReactElement;
};

function sashRender(_: number, active: boolean) {
  return <SashContent active={active} type="vscode" />;
}

export function PanesLayout({ left, bottom, right }: Props) {
  const [horizontalSizes, setHorizontalSizes] = useState<
    Array<string | number>
  >(["80%"]);

  const [verticalSizes, setVerticalSizes] = useState<Array<string | number>>([
    "40%",
  ]);

  return (
    <SplitPane
      sashRender={sashRender}
      split="horizontal"
      sizes={horizontalSizes}
      onChange={setHorizontalSizes}
    >
      <SplitPane
        sashRender={sashRender}
        split="vertical"
        sizes={verticalSizes}
        onChange={setVerticalSizes}
      >
        <Pane minSize={200} maxSize="50%">
          {left}
        </Pane>

        {right}
      </SplitPane>

      <Pane minSize={50} maxSize="50%">
        {bottom}
      </Pane>
    </SplitPane>
  );
}
