import { CSSProperties } from "react";
import "./file-controls.css";

type Props = {
  onSave: () => void;
  onOpen: () => void;
  style?: CSSProperties;
};

export function FileControls({ onSave, onOpen, style }: Props) {
  return (
    <div className="FileControls" style={style}>
      <button onClick={() => {}}>&#8505;</button>

      <button onClick={onSave}>Save</button>
      <button onClick={onOpen}>Open</button>
    </div>
  );
}
