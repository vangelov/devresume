import { CSSProperties } from "react";
import "./preview-controls.css";
import { ZoomOutIcon, PDFIcon, ZoomInIcon } from "../icons";

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
      <button title="Zoom out" onClick={onZoomOut}>
        <ZoomOutIcon size={16} />
      </button>

      <button title="Zoom in" onClick={onZoomIn}>
        <ZoomInIcon size={16} />
      </button>

      <button className="primary" onClick={onDownload}>
        <PDFIcon size={14} style={{ marginRight: "0.5rem" }} />
        Export
      </button>
    </div>
  );
}
