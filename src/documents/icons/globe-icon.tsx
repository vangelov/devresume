import { Circle, Line, Path } from "@react-pdf/renderer";
import { SvgIcon, SvgIconProps } from "../svg-icon";

export function GlobeIcon({ color, ...rest }: SvgIconProps) {
  return (
    <SvgIcon {...rest}>
      <Circle
        strokeWidth={2}
        stroke={color}
        strokeLineCap="round"
        cx="12"
        cy="12"
        r="10"
      />
      <Line
        strokeWidth={2}
        stroke={color}
        strokeLineCap="round"
        x1="2"
        y1="12"
        x2="22"
        y2="12"
      />
      <Path
        strokeWidth={2}
        stroke={color}
        strokeLineCap="round"
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      />
    </SvgIcon>
  );
}
