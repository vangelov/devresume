type Props = {
  onZoomIn: () => void;
  onZoomOut: () => void;
};

export function PreviewControls({ onZoomIn, onZoomOut }: Props) {
  return (
    <div style={{ display: "flex" }}>
      <button onClick={onZoomIn}>+</button>
      <button onClick={onZoomOut}>-</button>
    </div>
  );
}
