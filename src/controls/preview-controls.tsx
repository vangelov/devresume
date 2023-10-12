type Props = {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onDownload: () => void;
};

export function PreviewControls({ onZoomIn, onZoomOut, onDownload }: Props) {
  return (
    <div style={{ display: "flex" }}>
      <button onClick={onZoomIn}>+</button>
      <button onClick={onZoomOut}>-</button>
      <button onClick={onDownload}>Download</button>
    </div>
  );
}
