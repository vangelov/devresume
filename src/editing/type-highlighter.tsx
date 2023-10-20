import { ReactElement } from "react";

// eslint-disable-next-line react-refresh/only-export-components
const IDENT = "  ";

export function createTypeHighlighter() {
  const result: ReactElement[] = [];
  let space = "";

  function pushType(name: string) {
    result.push(
      <>
        <span className="Schema-Keyword">type</span>{" "}
        <span className="Schema-Type">{name}</span>{" "}
        <span className="Schema-Plan">=</span>{" "}
        <span className="Schema-Plain">{"{"}</span>
        <br />
      </>
    );

    space += IDENT;
  }

  function pushObject(name: string) {
    result.push(
      <>
        <span className="Schema-Field">
          {space}
          {name}
        </span>
        : <span className="Schema-Plain">{"{"}</span>
        <br />
      </>
    );

    space += IDENT;
  }

  function pushArrayOfObjects(name: string) {
    result.push(
      <>
        <span className="Schema-Field">
          {space}
          {name}
        </span>
        ?: <span className="Schema-Type">Array</span>
        <span className="Schema-Plain">&lt;</span>
        <span className="Schema-Plain">{"{"}</span>
        <br />
      </>
    );

    space += IDENT;
  }

  function pop() {
    space = space.slice(0, space.length - IDENT.length);

    result.push(
      <>
        <span className="Schema-Plain">
          {space}
          {"}"}
        </span>
        <span className="Schema-Plain">;</span>
        <br />
      </>
    );
  }

  function renderFieldName(name: string) {
    return (
      <span className="Schema-Field">
        {space}
        {name}
      </span>
    );
  }

  function renderFieldEnd({ markdown = false }: { markdown?: boolean } = {}) {
    return (
      <>
        <span className="Schema-Plain">;</span>
        {markdown && (
          <span className="Schema-Comment"> // supports Markdown</span>
        )}
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
        ?: <span className="Schema-Type">string</span>
        {renderFieldEnd({ markdown })}
      </>
    );
  }

  function addNumberField(name: string) {
    result.push(
      <>
        {renderFieldName(name)}
        ?: <span className="Schema-Type">number</span>
        {renderFieldEnd()}
      </>
    );
  }

  function addDateField(name: string) {
    result.push(
      <>
        {renderFieldName(name)}
        ?: <span className="Schema-Type">string | number</span>
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
        ?: <span className="Schema-Type">Array</span>
        <span className="Schema-Plain">&lt;</span>
        <span className="Schema-Type">string</span>
        <span className="Schema-Plain">&gt;</span>
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
