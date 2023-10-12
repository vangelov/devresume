import { ReactNode } from "react";
import { View } from "@react-pdf/renderer";
import { Style, ViewProps } from "@react-pdf/types";

type Props = ViewProps & {
  gap?: number;
  children: ReactNode;
  flexWrap?: Style["flexWrap"];
  style?: Style;
};

export function HStack({ gap, children, flexWrap, style, ...rest }: Props) {
  const updatedStyle: Style = {
    display: "flex",
    flexDirection: "row",
    gap,
    flexWrap,
    alignItems: "center",
    ...style,
  };

  return (
    <View {...rest} style={updatedStyle}>
      {children}
    </View>
  );
}

export function VStack({ gap, children, flexWrap, style, ...rest }: Props) {
  const updatedStyle: Style = {
    display: "flex",
    flexDirection: "column",
    gap,
    flexWrap,
    ...style,
  };

  return (
    <View style={updatedStyle} {...rest}>
      {children}
    </View>
  );
}
