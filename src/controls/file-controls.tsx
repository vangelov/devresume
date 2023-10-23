import { CSSProperties } from "react";
import "./file-controls.css";
import { DownloadIcon, FolderIcon, InfoIcon, PlusIcon } from "../icons";

type Props = {
  onSave: () => void;
  onOpen: () => void;
  onNew: () => void;
  style?: CSSProperties;
};

export function FileControls({ onSave, onOpen, onNew, style }: Props) {
  return (
    <div className="FileControls" style={style}>
      <button title="About" onClick={() => {}}>
        <InfoIcon size={16} />
      </button>

      <button onClick={onSave}>
        <DownloadIcon size={14} style={{ marginRight: "0.5rem" }} />
        Save
      </button>
      <button onClick={onOpen}>
        <FolderIcon size={14} style={{ marginRight: "0.5rem" }} />
        Open
      </button>
      <button onClick={onNew}>
        <PlusIcon size={14} style={{ marginRight: "0.5rem" }} />
        New
      </button>
    </div>
  );
}
