import { CSSProperties, ReactElement, cloneElement } from "react";

type Props = {
  left: ReactElement;
  center: ReactElement;
  right: ReactElement;
};

const styles: Record<string, CSSProperties> = {
  root: {
    display: "flex",
    backgroundColor: "#1e1e1e",
    borderBottom: "1px solid #2A2A2A",
  },
};

export function ControlsLayout({ left, center, right }: Props) {
  return (
    <div style={styles.root}>
      {cloneElement(left, { style: { flex: 1 } })}
      {cloneElement(center, { style: { flex: 1 } })}
      {cloneElement(right, { style: { flex: 1 } })}
    </div>
  );
}
