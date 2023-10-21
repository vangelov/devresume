import { CSSProperties } from "react";
import "./file-controls.css";
import { DownloadIcon, FolderIcon } from "../icons";

type Props = {
  onSave: () => void;
  onOpen: () => void;
  style?: CSSProperties;
};

export function FileControls({ onSave, onOpen, style }: Props) {
  return (
    <div className="FileControls" style={style}>
      <button title="Open Github" onClick={() => {}}>
        ?
      </button>

      <button onClick={onSave}>
        <DownloadIcon size={14} style={{ marginRight: "0.5rem" }} />
        Save
      </button>
      <button onClick={onOpen}>
        <FolderIcon size={14} style={{ marginRight: "0.5rem" }} />
        Open
      </button>
    </div>
  );
}
