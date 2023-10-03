import { Path, Polyline } from "@react-pdf/renderer";
import { SvgIconProps } from "../svg-icon";
import { SvgIcon } from "../svg-icon";

export function MailIcon({ color, ...rest }: SvgIconProps) {
  return (
    <SvgIcon {...rest}>
      <Path
        stroke={color}
        strokeWidth={2}
        strokeLineCap="round"
        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
      />
      <Polyline
        stroke={color}
        strokeWidth={2}
        strokeLineCap="round"
        points="22,6 12,13 2,6"
      />
    </SvgIcon>
  );
}
