import { createTypeHighlighter } from "./type-highlighter";
import "./schema.css";
import { memo, useMemo } from "react";

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
  highligher.addStringField("startDate", { date: true });
  highligher.addStringField("endDate", { date: true });
  highligher.addArrayOfStringsField("highlights", { markdown: true });
  highligher.pop();

  highligher.pushArrayOfObjects("skills");
  highligher.addStringField("name");
  highligher.addArrayOfStringsField("keywords");
  highligher.pop();

  highligher.pushArrayOfObjects("work");
  highligher.addStringField("name");
  highligher.addStringField("description", { markdown: true });
  highligher.addStringField("url");
  highligher.addStringField("startDate", { date: true });
  highligher.addStringField("endDate", { date: true });
  highligher.addArrayOfStringsField("highlights", { markdown: true });
  highligher.pop();

  highligher.pushArrayOfObjects("education");
  highligher.addStringField("institution");
  highligher.addStringField("url");
  highligher.addStringField("area");
  highligher.addStringField("score", { markdown: true });
  highligher.addStringField("startDate", { date: true });
  highligher.addStringField("endDate", { date: true });
  highligher.addArrayOfStringsField("courses");
  highligher.pop();

  highligher.pushArrayOfObjects("awards");
  highligher.addStringField("title");
  highligher.addStringField("awarder");
  highligher.addStringField("date", { date: true });
  highligher.addStringField("summary", { markdown: true });
  highligher.pop();

  highligher.pushArrayOfObjects("certificates");
  highligher.addStringField("name");
  highligher.addStringField("url");
  highligher.addStringField("date", { date: true });
  highligher.addStringField("issuer");
  highligher.pop();

  highligher.pushArrayOfObjects("publications");
  highligher.addStringField("name");
  highligher.addStringField("publisher");
  highligher.addStringField("releaseDate", { date: true });
  highligher.addStringField("url");
  highligher.addStringField("summary", { markdown: true });
  highligher.pop();

  highligher.pushArrayOfObjects("volunteer");
  highligher.addStringField("organization");
  highligher.addStringField("position");
  highligher.addStringField("url");
  highligher.addStringField("summary", { markdown: true });
  highligher.addStringField("startDate", { date: true });
  highligher.addStringField("endDate", { date: true });
  highligher.addArrayOfStringsField("highlights", { markdown: true });
  highligher.pop();

  highligher.pushObject("meta");
  highligher.addStringField("accentColor");
  highligher.addNumberField("baseFontSize");
  highligher.addArrayOfStringsField("sectionsOrder", {
    comment: `e.g., ["basics", "work", "education", ...]`,
  });
  highligher.pop();

  highligher.pop();

  return highligher.result;
}

export const Schema = memo(function () {
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
          resume schema
          <br />
          // (jsonresume.org/schema) expressed in TypeScript so they're easier
          to read. <br />
          // -------------------------------------------------------------------
          <br />
          // Where noted you can use the following Markdown subset: <br />
          // *bold*, **italics**, [label](link). <br />
        </span>
        <br />

        {highlightedElements}
      </pre>
    </div>
  );
});
