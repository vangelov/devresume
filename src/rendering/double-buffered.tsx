import { ReactElement, cloneElement, useEffect, useRef, useState } from "react";
import { MultiPageDocument } from "./multi-page-document";

type Props = {
  blob: Blob | null;
  scale?: number;
};

type BufferElement = ReactElement | null;

export function DoubleBuffered({ blob, scale = 1 }: Props) {
  const backElementRef = useRef<BufferElement>(null);
  const frontElementRef = useRef<BufferElement>(null);
  const [elements, setElements] = useState<null | Array<BufferElement>>(null);
  const lastKeyRef = useRef(0);

  const onRenderSuccess = () => {
    frontElementRef.current = backElementRef.current;
    setElements([frontElementRef.current]);
  };

  useEffect(() => {
    if (blob) {
      backElementRef.current = (
        <MultiPageDocument
          key={lastKeyRef.current}
          onAllPagesRenderSuccess={onRenderSuccess}
          blob={blob}
        />
      );
      lastKeyRef.current++;
      setElements([backElementRef.current, frontElementRef.current]);
    } else {
      backElementRef.current = null;
      onRenderSuccess();
    }
  }, [blob]);

  const updatedElements = elements
    ? elements.map((element) => element && cloneElement(element, { scale }))
    : null;

  return <div style={{ position: "relative" }}>{updatedElements}</div>;
}
