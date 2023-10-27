import { CSSProperties } from "react";
import "./preview-controls.css";
import { ZoomOutIcon, PDFIcon, ZoomInIcon } from "../icons";

type Props = {
  zoomInDisabled: boolean;
  zoomOutDisabled: boolean;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onDownload: () => void;
  style?: CSSProperties;
};

export function PreviewControls({
  zoomInDisabled,
  zoomOutDisabled,
  onZoomIn,
  onZoomOut,
  onDownload,
  style,
}: Props) {
  return (
    <div className="PreviewControls" style={style}>
      <button
        disabled={zoomOutDisabled}
        data-testid="zoom-out"
        title="Zoom out"
        onClick={onZoomOut}
      >
        <ZoomOutIcon size={16} />
      </button>

      <button
        disabled={zoomInDisabled}
        data-testid="zoom-in"
        title="Zoom in"
        onClick={onZoomIn}
      >
        <ZoomInIcon size={16} />
      </button>

      <button className="primary" data-testid="export" onClick={onDownload}>
        <PDFIcon size={14} style={{ marginRight: "0.5rem" }} />
        Export
      </button>
    </div>
  );
}
