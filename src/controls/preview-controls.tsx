import { CSSProperties } from "react";
import "./preview-controls.css";

type Props = {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onDownload: () => void;
  style?: CSSProperties;
};

export function PreviewControls({
  onZoomIn,
  onZoomOut,
  onDownload,
  style,
}: Props) {
  return (
    <div className="PreviewControls" style={style}>
      <button onClick={onZoomOut}>-</button>
      <button onClick={onZoomIn}>+</button>
      <button className="primary" onClick={onDownload}>
        Download
      </button>
    </div>
  );
}
