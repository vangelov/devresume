import { CSSProperties } from "react";

type Props = {
  onSave: () => void;
  onOpen: () => void;
  style?: CSSProperties;
};

const styles: Record<string, CSSProperties> = {
  root: { gap: 8, display: "flex", padding: "1rem" },
};

export function FileControls({ onSave, onOpen, style }: Props) {
  return (
    <div style={{ ...styles.root, ...style }}>
      <button onClick={onSave}>Save</button>
      <button onClick={onOpen}>Open</button>
    </div>
  );
}
