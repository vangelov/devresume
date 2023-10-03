import { ReactNode } from "react";
import { View } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";

type Props = {
  gap?: number;
  children: ReactNode;
  wrap?: boolean;
};

function getStyle(
  flexDirection: Style["flexDirection"],
  { gap, wrap }: Props
): Style {
  return {
    display: "flex",
    flexDirection,
    flexWrap: wrap ? "wrap" : undefined,
    gap,
  };
}

export function HStack(props: Props) {
  const style = getStyle("row", props);
  return <View style={style}>{props.children}</View>;
}

export function VStack(props: Props) {
  const style = getStyle("column", props);
  return <View style={style}>{props.children}</View>;
}
