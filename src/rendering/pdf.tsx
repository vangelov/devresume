import { memo, useCallback, useEffect, useRef } from "react";
import { DoubleBuffered } from "./double-buffered";
import useResizeObserver from "@react-hook/resize-observer";
import "./pdf.css";
import { MultiPageDocument } from "./multi-page-document";

type Props = {
  blob: Blob | null;
  scale: number;
};

export const PDF = memo(function ({ blob, scale }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const widthRef = useRef(0);

  const update = useCallback(() => {
    if (!ref.current) return;

    const viewportWidth = widthRef.current;
    const pageWidth = scale * 595;
    const d = Math.abs((pageWidth - viewportWidth) / 2);
    const viewportNode = ref.current;

    if (pageWidth > viewportWidth) {
      viewportNode.style.setProperty("--left", "0px");
      viewportNode.scroll(d, 0);
    } else {
      viewportNode.style.setProperty("--left", `${d}px`);
    }
  }, [scale]);

  useEffect(() => {
    update();
  }, [update]);

  useResizeObserver(ref, (entry) => {
    if (ref.current) {
      widthRef.current = entry.contentRect.width;
      update();
    }
  });

  const render = useCallback(
    (onSuccess: () => void) =>
      blob && (
        <MultiPageDocument
          scale={scale}
          onAllPagesRenderSuccess={onSuccess}
          blob={blob}
        />
      ),
    [scale, blob]
  );

  return (
    <div ref={ref} data-testid="pdf" className="PDF">
      <DoubleBuffered render={render} />
    </div>
  );
});
