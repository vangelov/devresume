import { Text, Link } from "@react-pdf/renderer";
import Markdown from "markdown-to-jsx";

type Props = {
  children?: string;
};

const TEXT_TYPES: Record<string, boolean | undefined> = {
  em: true,
  p: true,
  span: true,
  strong: true,
};

const STYLE_FOR_TEXT: Record<string, object> = {
  em: { fontStyle: "italic" },
  strong: { fontWeight: "medium" },
};

export function RichText({ children }: Props) {
  return (
    <Markdown
      children={`\n${children}`}
      options={{
        createElement(type, props, children) {
          const isText = TEXT_TYPES[type as string];

          if (isText) {
            const style = STYLE_FOR_TEXT[type as string];

            return (
              <Text key={props.key} style={style}>
                {children}
              </Text>
            );
          } else if (type === "a" && "href" in props) {
            return (
              <Link key={props.key} src={props.href as string}>
                {children}
              </Link>
            );
          }

          return <Text key={props.key}>{children}</Text>;
        },
      }}
    />
  );
}
