import { ReactElement, cloneElement, useEffect, useRef, useState } from "react";

type BufferElement = ReactElement | null;

type Props = {
  render: (onSuccess: () => void) => BufferElement;
};

export function DoubleBuffered({ render }: Props) {
  const backElementRef = useRef<BufferElement>(null);
  const frontElementRef = useRef<BufferElement>(null);
  const [elements, setElements] = useState<null | Array<BufferElement>>(null);
  const lastKeyRef = useRef(0);

  // setElements and frontElementRef are stable, so no need for useCallback
  const onRenderSuccess = () => {
    frontElementRef.current = backElementRef.current
      ? cloneElement(backElementRef.current, {
          "data-ready": "true",
        })
      : null;

    setElements([frontElementRef.current]);
  };

  useEffect(() => {
    const renderedElement = render(onRenderSuccess);

    if (renderedElement) {
      const backElement = cloneElement(renderedElement, {
        key: lastKeyRef.current,
        "data-ready": "false",
      });
      backElementRef.current = backElement;
      lastKeyRef.current++;
      setElements([backElementRef.current, frontElementRef.current]);
    } else {
      backElementRef.current = null;
      onRenderSuccess();
    }
  }, [render]);

  return <div style={{ position: "relative" }}>{elements}</div>;
}
