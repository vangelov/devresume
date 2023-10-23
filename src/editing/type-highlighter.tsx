import { Fragment, ReactElement } from "react";

// eslint-disable-next-line react-refresh/only-export-components
const IDENT = "  ";

export function createTypeHighlighter() {
  const result: ReactElement[] = [];
  let space = "";
  let lastKey = 0;

  function pushType(name: string) {
    result.push(
      <Fragment key={lastKey++}>
        <span className="Schema-Keyword">type</span>{" "}
        <span className="Schema-Type">{name}</span>{" "}
        <span className="Schema-Plan">=</span>{" "}
        <span className="Schema-Plain">{"{"}</span>
        <br />
      </Fragment>
    );

    space += IDENT;
  }

  function pushObject(name: string) {
    result.push(
      <Fragment key={lastKey++}>
        <span className="Schema-Field">
          {space}
          {name}
        </span>
        ?: <span className="Schema-Plain">{"{"}</span>
        <br />
      </Fragment>
    );

    space += IDENT;
  }

  function pushArrayOfObjects(name: string) {
    result.push(
      <Fragment key={lastKey++}>
        <span className="Schema-Field">
          {space}
          {name}
        </span>
        ?: <span className="Schema-Type">Array</span>
        <span className="Schema-Plain">&lt;</span>
        <span className="Schema-Plain">{"{"}</span>
        <br />
      </Fragment>
    );

    space += IDENT;
  }

  function pop() {
    space = space.slice(0, space.length - IDENT.length);

    result.push(
      <Fragment key={lastKey++}>
        <span className="Schema-Plain">
          {space}
          {"}"}
        </span>
        <span className="Schema-Plain">;</span>
        <br />
      </Fragment>
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
      <Fragment key={lastKey++}>
        {renderFieldName(name)}
        ?: <span className="Schema-Type">string</span>
        {renderFieldEnd({ markdown })}
      </Fragment>
    );
  }

  function addNumberField(name: string) {
    result.push(
      <Fragment key={lastKey++}>
        {renderFieldName(name)}
        ?: <span className="Schema-Type">number</span>
        {renderFieldEnd()}
      </Fragment>
    );
  }

  function addDateField(name: string) {
    result.push(
      <Fragment key={lastKey++}>
        {renderFieldName(name)}
        ?: <span className="Schema-Type">string | number</span>
        {renderFieldEnd()}
      </Fragment>
    );
  }

  function addEnumField(name: string, values: Array<string>) {
    result.push(
      <Fragment key={lastKey++}>
        {renderFieldName(name)}
        ?:{" "}
        <span className="pl-s">
          {values.map((value) => `"${value}"`).join(" | ")}
        </span>
        {renderFieldEnd()}
      </Fragment>
    );
  }

  function addArrayOfStringsField(
    name: string,
    { markdown = false }: { markdown?: boolean } = {}
  ) {
    result.push(
      <Fragment key={lastKey++}>
        {renderFieldName(name)}
        ?: <span className="Schema-Type">Array</span>
        <span className="Schema-Plain">&lt;</span>
        <span className="Schema-Type">string</span>
        <span className="Schema-Plain">&gt;</span>
        {renderFieldEnd({ markdown })}
      </Fragment>
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
