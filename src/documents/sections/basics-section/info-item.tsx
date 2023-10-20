import { Text, Link, StyleSheet } from "@react-pdf/renderer";
import { ReactElement, cloneElement, useMemo } from "react";
import { HStack } from "../../stack";
import { Theme } from "../../theme";

type Props = {
  icon: ReactElement;
  value: string;
  href?: string;
  theme: Theme;
};

function createStyles(theme: Theme) {
  return StyleSheet.create({
    icon: {
      size: theme.fontSize[0],
      color: theme.color.lightText,
      style: { marginRight: theme.space[2] },
    },
    link: { color: theme.color.lightText, textDecoration: "none" },
  });
}

export function InfoItem({ icon, href, value, theme }: Props) {
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <HStack
      style={{
        color: theme.color.lightText,
      }}
    >
      {cloneElement(icon, styles.icon)}
      {href ? (
        <Link style={styles.link} src={href}>
          {value}
        </Link>
      ) : (
        <Text>{value}</Text>
      )}
    </HStack>
  );
}
