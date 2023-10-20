import { CSSProperties } from "react";
import "./title-controls.css";

type Props = {
  title: string;
  onChange: (value: string) => void;
  style?: CSSProperties;
};

export function TitleControls({ title, onChange, style }: Props) {
  return (
    <div className="TitleControls" style={style}>
      <input
        className="TitleControls-Input"
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
