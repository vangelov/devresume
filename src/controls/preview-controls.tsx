type Props = {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onDownload: () => void;
};

export function PreviewControls({ onZoomIn, onZoomOut, onDownload }: Props) {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#1e1e1e",

        borderBottom: "1px solid #2A2A2A",
      }}
    >
      <div style={{ flex: 1, gap: 8, display: "flex", padding: "1rem" }}>
        <button>Save</button>
        <button>Open</button>
      </div>

      <div
        style={{
          flex: 1,
          height: "100%",

          display: "flex",
          justifyContent: "center",
          overflowX: "hidden",
          alignItems: "center",
          fontSize: 20,
        }}
      >
        <span
          style={{
            whiteSpace: "nowrap",
            color: "white",
            fontWeight: 600,
            minWidth: "50px",
          }}
          onInput={() => console.log("change")}
          contentEditable
        >
          Untitield
        </span>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          gap: 8,
          justifyContent: "flex-end",
          padding: "1rem",
        }}
      >
        <button onClick={onZoomIn}>+</button>
        <button onClick={onZoomOut}>-</button>
        <button className="primary" onClick={onDownload}>
          Download
        </button>
      </div>
    </div>
  );
}
