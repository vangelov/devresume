import { CSSProperties } from "react";

type Props = {
  title: string;
  onChange: (value: string) => void;
  style?: CSSProperties;
};

const styles: Record<string, CSSProperties> = {
  root: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    overflowX: "hidden",
    alignItems: "center",
  },
  input: {
    width: "90%",
    color: "white",
    fontWeight: 600,
    backgroundColor: "transparent",
    border: "none",
    textAlign: "center",
    fontSize: 20,
  },
};

export function TitleControls({ title, onChange, style }: Props) {
  return (
    <div style={{ ...styles.root, ...style }}>
      <input
        style={styles.input}
        value={title}
        onChange={(event) => onChange(event.target.value)}
        onBlur={(event) => {
          if (!event.target.value) {
            onChange("Untitled");
          }
        }}
      />
    </div>
  );
}
