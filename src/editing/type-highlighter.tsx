import { ReactElement } from "react";

// eslint-disable-next-line react-refresh/only-export-components
const IDENT = "  ";

export function createTypeHighlighter() {
  const result: ReactElement[] = [];
  let space = "";

  function pushType(name: string) {
    result.push(
      <>
        <span className="pl-k">type</span>{" "}
        <span className="pl-smi">{name}</span> <span className="pl-c1">=</span>{" "}
        <span className="pl-kos">{"{"}</span>
        <br />
      </>
    );

    space += IDENT;
  }

  function pushObject(name: string) {
    result.push(
      <>
        <span className="pl-c1">
          {space}
          {name}
        </span>
        : <span className="pl-kos">{"{"}</span>
        <br />
      </>
    );

    space += IDENT;
  }

  function pushArrayOfObjects(name: string) {
    result.push(
      <>
        <span className="pl-c1">
          {space}
          {name}
        </span>
        ?: <span className="pl-smi">Array</span>
        <span className="pl-kos">&lt;</span>
        <span className="pl-kos">{"{"}</span>
        <br />
      </>
    );

    space += IDENT;
  }

  function pop() {
    space = space.slice(0, space.length - IDENT.length);

    result.push(
      <>
        <span className="pl-kos">
          {space}
          {"}"}
        </span>
        <span className="pl-kos">;</span>
        <br />
      </>
    );
  }

  function renderFieldName(name: string) {
    return (
      <span className="pl-c1">
        {space}
        {name}
      </span>
    );
  }

  function renderFieldEnd({ markdown = false }: { markdown?: boolean } = {}) {
    return (
      <>
        <span className="pl-kos">;</span>
        {markdown && <span className="c"> // supports Markdown</span>}
        <br />
      </>
    );
  }

  function addStringField(
    name: string,
    { markdown = false }: { markdown?: boolean } = {}
  ) {
    result.push(
      <>
        {renderFieldName(name)}
        ?: <span className="pl-smi">string</span>
        {renderFieldEnd({ markdown })}
      </>
    );
  }

  function addNumberField(name: string) {
    result.push(
      <>
        {renderFieldName(name)}
        ?: <span className="pl-smi">number</span>
        {renderFieldEnd()}
      </>
    );
  }

  function addDateField(name: string) {
    result.push(
      <>
        {renderFieldName(name)}
        ?: <span className="pl-smi">string | number</span>
        {renderFieldEnd()}
      </>
    );
  }

  function addEnumField(name: string, values: Array<string>) {
    result.push(
      <>
        {renderFieldName(name)}
        ?:{" "}
        <span className="pl-s">
          {values.map((value) => `"${value}"`).join(" | ")}
        </span>
        {renderFieldEnd()}
      </>
    );
  }

  function addArrayOfStringsField(
    name: string,
    { markdown = false }: { markdown?: boolean } = {}
  ) {
    result.push(
      <>
        {renderFieldName(name)}
        ?: <span className="pl-smi">Array</span>
        <span className="pl-kos">&lt;</span>
        <span className="pl-smi">string</span>
        <span className="pl-kos">&gt;</span>
        {renderFieldEnd({ markdown })}
      </>
    );
  }

  return {
    pushObject,
    pushArrayOfObjects,
    addStringField,
    addArrayOfStringsField,
    pop,
    pushType,
    addEnumField,
    addDateField,
    addNumberField,
    result,
  };
}
