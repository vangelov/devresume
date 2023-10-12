import { Svg } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";
import { ReactNode } from "react";

export type SvgIconProps = {
  size?: number;
  color?: string;
  style?: Style;
  children?: ReactNode;
};

export function SvgIcon({ size = 24, style, children }: SvgIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" style={style}>
      {children}
    </Svg>
  );
}
