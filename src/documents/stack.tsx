import { ReactNode } from "react";
import { View } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";

type Props = {
  gap?: number;
  children: ReactNode;
  wrap?: boolean;
  style?: Style;
};

function getStyle(
  flexDirection: Style["flexDirection"],
  { gap, wrap, style }: Props
): Style {
  const base: Style = {
    display: "flex",
    flexDirection,
    flexWrap: wrap ? "wrap" : undefined,
    gap,
    alignItems: flexDirection === "row" ? "center" : undefined,
  };

  const final: Style = { ...base, ...style };

  return final;
}

export function HStack(props: Props) {
  const style = getStyle("row", props);
  return <View style={style}>{props.children}</View>;
}

export function VStack(props: Props) {
  const style = getStyle("column", props);
  return <View style={style}>{props.children}</View>;
}
