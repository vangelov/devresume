import { CSSProperties } from "react";

type Props = {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onDownload: () => void;
  style?: CSSProperties;
};

const styles: Record<string, CSSProperties> = {
  root: {
    display: "flex",
    gap: 8,
    justifyContent: "flex-end",
    padding: "1rem",
  },
};

export function PreviewControls({
  onZoomIn,
  onZoomOut,
  onDownload,
  style,
}: Props) {
  return (
    <div style={{ ...styles.root, ...style }}>
      <button onClick={onZoomOut}>-</button>
      <button onClick={onZoomIn}>+</button>
      <button className="primary" onClick={onDownload}>
        Download
      </button>
    </div>
  );
}
