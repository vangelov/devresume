import { ReactElement, cloneElement } from "react";
import "./controls-layout.css";

type Props = {
  left: ReactElement;
  center: ReactElement;
  right: ReactElement;
};

export function ControlsLayout({ left, center, right }: Props) {
  return (
    <div className="ControlsLayout">
      {cloneElement(left, { style: { flex: 1 } })}
      {cloneElement(center, { style: { flex: 1 } })}
      {cloneElement(right, { style: { flex: 1 } })}
    </div>
  );
}
