import { Circle, Path, Rect } from "@react-pdf/renderer";
import { SvgIcon, SvgIconProps } from "../svg-icon";

export function LinkedInIcon({ color, ...rest }: SvgIconProps) {
  return (
    <SvgIcon {...rest}>
      <Path
        stroke={color}
        strokeWidth={2}
        strokeLineCap="round"
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
      />
      <Rect
        stroke={color}
        strokeWidth={2}
        strokeLineCap="round"
        x="2"
        y="9"
        width="4"
        height="12"
      />
      <Circle
        stroke={color}
        strokeWidth={2}
        strokeLineCap="round"
        cx="4"
        cy="4"
        r="2"
      />
    </SvgIcon>
  );
}
