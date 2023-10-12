import { Text, Link } from "@react-pdf/renderer";
import { ReactElement, cloneElement } from "react";
import { HStack } from "../../stack";
import { Theme } from "../../theme";

type Props = {
  icon: ReactElement;
  value: string;
  href?: string;
  theme: Theme;
};

export function InfoItem({ icon, href, value, theme }: Props) {
  return (
    <HStack
      style={{
        color: theme.color.lightText,
      }}
    >
      {cloneElement(icon, {
        size: theme.fontSize[0],
        color: theme.color.lightText,
        style: { marginRight: theme.space[2] },
      })}
      {href ? (
        <Link
          style={{ color: theme.color.lightText, textDecoration: "none" }}
          src={href}
        >
          {value}
        </Link>
      ) : (
        <Text>{value}</Text>
      )}
    </HStack>
  );
}
