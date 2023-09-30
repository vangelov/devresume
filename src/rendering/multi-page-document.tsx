import { useCallback, useMemo, useRef, useState } from "react";
import { Document, Page } from "react-pdf";

type Props = {
  blob: Blob;
  onAllPagesRenderSuccess: () => void;
  scale?: number;
};

export function MultiPageDocument({
  blob,
  scale = 1,
  onAllPagesRenderSuccess,
}: Props) {
  const [pagesCount, setPagesCount] = useState(0);
  const renderedPagesCountRef = useRef(0);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setPagesCount(numPages);
  }

  const onPageRenderSuccess = useCallback(() => {
    renderedPagesCountRef.current++;
    if (renderedPagesCountRef.current >= pagesCount) {
      onAllPagesRenderSuccess();
    }
  }, [onAllPagesRenderSuccess, pagesCount]);

  const pageElements = useMemo(() => {
    const result = [];

    for (let i = 1; i <= pagesCount; i++) {
      result.push(
        <div
          key={i}
          style={{
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <Page
            scale={scale}
            loading={null}
            onRenderSuccess={onPageRenderSuccess}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            pageNumber={i}
          />
        </div>,

        <div key="spacer" style={{ height: "1rem" }} />
      );
    }

    return result;
  }, [pagesCount, onPageRenderSuccess, scale]);

  return (
    <div style={{ position: "absolute", left: "var(--left)" }}>
      <Document
        loading={null}
        onLoadSuccess={onDocumentLoadSuccess}
        file={blob}
      >
        <div style={{ height: "1rem" }} />
        {pageElements}
      </Document>
    </div>
  );
}
