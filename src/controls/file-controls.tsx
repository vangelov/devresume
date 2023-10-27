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
      <a
        title="About"
        data-testin="about"
        target="_blank"
        href="https://github.com/vangelov/devresume"
      >
        <InfoIcon size={16} />
      </a>

      <button data-testid="save" onClick={onSave}>
        <DownloadIcon size={14} style={{ marginRight: "0.5rem" }} />
        Save
      </button>

      <button data-testid="open" onClick={onOpen}>
        <FolderIcon size={14} style={{ marginRight: "0.5rem" }} />
        Open
      </button>

      <button data-testid="new" onClick={onNew}>
        <PlusIcon size={14} style={{ marginRight: "0.5rem" }} />
        New
      </button>
    </div>
  );
}
