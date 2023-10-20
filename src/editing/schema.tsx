import { createTypeHighlighter } from "./type-highlighter";
import "./schema.css";
import { useMemo } from "react";

function createHighlightedElements() {
  const highligher = createTypeHighlighter();

  highligher.pushType("Resume");

  highligher.pushObject("basics");
  highligher.addStringField("name");
  highligher.addStringField("label");
  highligher.addStringField("email");
  highligher.addStringField("summary", { markdown: true });
  highligher.pushArrayOfObjects("profiles");
  highligher.addEnumField("network", ["github", "network"]);
  highligher.pop();
  highligher.pop();

  highligher.pushArrayOfObjects("work");
  highligher.addStringField("name");
  highligher.addStringField("location");
  highligher.addStringField("position");
  highligher.addStringField("url");
  highligher.addStringField("summary");
  highligher.addDateField("startDate");
  highligher.addDateField("endDate");
  highligher.addArrayOfStringsField("highlights", { markdown: true });
  highligher.pop();

  highligher.pushArrayOfObjects("skills");
  highligher.addStringField("name");
  highligher.addArrayOfStringsField("keywords");
  highligher.pop();

  highligher.pushArrayOfObjects("work");
  highligher.addStringField("name");
  highligher.addStringField("description");
  highligher.addStringField("url");
  highligher.addDateField("startDate");
  highligher.addDateField("endDate");
  highligher.addArrayOfStringsField("highlights");
  highligher.pop();

  highligher.pushArrayOfObjects("education");
  highligher.addStringField("institution");
  highligher.addStringField("url");
  highligher.addStringField("area");
  highligher.addStringField("score");
  highligher.addDateField("startDate");
  highligher.addDateField("endDate");
  highligher.addArrayOfStringsField("courses");
  highligher.pop();

  highligher.pushArrayOfObjects("awards");
  highligher.addStringField("title");
  highligher.addStringField("awarder");
  highligher.addDateField("date");
  highligher.addStringField("summary");
  highligher.pop();

  highligher.pushArrayOfObjects("certificates");
  highligher.addStringField("name");
  highligher.addStringField("url");
  highligher.addDateField("date");
  highligher.addStringField("issuer");
  highligher.pop();

  highligher.pushArrayOfObjects("publications");
  highligher.addStringField("name");
  highligher.addStringField("publisher");
  highligher.addDateField("releaseDate");
  highligher.addStringField("url");
  highligher.addStringField("summary");
  highligher.pop();

  highligher.pushArrayOfObjects("volunteer");
  highligher.addStringField("organization");
  highligher.addStringField("position");
  highligher.addStringField("url");
  highligher.addStringField("summary");
  highligher.addDateField("startDate");
  highligher.addDateField("endDate");
  highligher.addArrayOfStringsField("highlights");
  highligher.pop();

  highligher.pushArrayOfObjects("meta");
  highligher.addStringField("accentColor");
  highligher.addNumberField("baseFontSize");
  highligher.pop();

  highligher.pop();

  return highligher.result;
}

export function Schema() {
  const highlightedElements = useMemo(createHighlightedElements, []);

  return (
    <div className="Schema">
      <pre
        style={{
          margin: 0,
          lineHeight: 1.5,
          fontFamily: "Monaco, Courier, monospace",
          fontSize: 14,
        }}
      >
        <span className="Schema-Comment">
          // Use this as a guide. It shows the supported fields from the JSON
          <br />
          // resume schema expressed in TypeScript so they're easier to read.{" "}
          <br />
          // -------------------------------------------------------------------
          <br />
          // Where noted you can use the following Markdown subset: <br />
          // *bold*, **italics**, [label](link). <br />
          // -------------------------------------------------------------------
          <br />
          // Dates are formated as YYYY or "YYYY-MM".
          <br />
        </span>
        <br />

        {highlightedElements}
      </pre>
    </div>
  );
}
