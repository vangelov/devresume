import { Path, Circle } from "@react-pdf/renderer";
import { SvgIcon, SvgIconProps } from "../svg-icon";

export function LocationIcon({ color, ...rest }: SvgIconProps) {
  return (
    <SvgIcon {...rest}>
      <Path
        strokeWidth={2}
        strokeLineCap="round"
        stroke={color}
        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
      />
      <Circle stroke={color} strokeWidth={2} cx="12" cy="10" r="3"></Circle>
    </SvgIcon>
  );
}
