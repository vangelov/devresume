import "./App.css";
import * as Test from "react-pdf";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  pdf,
} from "@react-pdf/renderer";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { useEffect, useMemo, useRef, useState, ReactElement } from "react";
import { ChangeEvent } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
const MyDocument = ({ test }: { test: string }) => {
  const m0 = useMemo(
    () => (
      <View style={styles.section}>
        <Text>{test}</Text>
      </View>
    ),
    [test]
  );

  const m = useMemo(
    () => (
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    ),
    []
  );

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {m0}
        {m}
      </Page>
    </Document>
  );
};

let k = 0;

function PC({ blob }: { blob: Blob | null }) {
  const loadingRef = useRef<ReactElement | null>(null);
  const currentRef = useRef<ReactElement | null>(null);
  const [test, setTest] = useState<null | (ReactElement | null)[]>(null);

  useEffect(() => {
    if (blob) {
      loadingRef.current = (
        <div key={k++} style={{ position: "absolute", top: 0, left: 0 }}>
          <Test.Document file={blob}>
            <Test.Page
              onRenderSuccess={onRenderSuccess}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              pageNumber={1}
            />
          </Test.Document>
        </div>
      );

      setTest([loadingRef.current, currentRef.current]);
    }
  }, [blob]);

  const onRenderSuccess = () => {
    currentRef.current = loadingRef.current;
    setTest([currentRef.current]);
  };

  console.log("t", test);

  return <div>{test}</div>;
}

const debouncedChunkedQueue = (fn: (items: string[]) => void, delay = 1000) => {
  let items: string[] = [];
  let started = false;
  const push = (item: string) => {
    items.push(item);
    if (!started) start();
  };
  const start = async () => {
    started = true;
    while (items.length) {
      await sleep(delay);
      const chunk = items.concat();
      items = [];
      await fn(chunk);
    }
    started = false;
  };
  return { push };
};
const sleep = (delay: number) =>
  new Promise((r) => setTimeout(r, delay || 1000));

function App() {
  const [blob, setBlob] = useState<null | Blob>(null);

  const q = useRef(
    debouncedChunkedQueue(async (items) => {
      const blob = await pdf(
        <MyDocument test={items[items.length - 1]} />
      ).toBlob();

      setBlob(blob);
    }, 200)
  );

  async function onChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    q.current.push(value);
  }

  return (
    <div className="App">
      <input onChange={onChange} />

      <PC blob={blob} />
    </div>
  );
}

export default App;
