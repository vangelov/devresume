import { Circle, Path } from "@react-pdf/renderer";
import { SvgIcon, SvgIconProps } from "../svg-icon";

export function MapPinIcon({ color, ...rest }: SvgIconProps) {
  return (
    <SvgIcon {...rest}>
      <Path
        strokeWidth={2}
        stroke={color}
        strokeLineCap="round"
        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
      />
      <Circle
        strokeWidth={2}
        strokeLineCap="round"
        stroke={color}
        cx="12"
        cy="10"
        r="3"
      />
    </SvgIcon>
  );
}
