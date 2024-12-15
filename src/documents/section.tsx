import { ReactNode, useMemo } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { Theme } from "./theme";

export type SectionProps = {
  title?: string;
  children?: ReactNode;
  theme: Theme;
  hasPageBreak?: boolean;
};

function createStyles(theme: Theme) {
  return StyleSheet.create({
    title: {
      fontSize: theme.fontSize[1],
      color: theme.color.accent,
      marginBottom: theme.space[5],
      fontWeight: "medium",
    },
    root: {
      marginBottom: theme.space[10],
    },
  });
}

export function Section({
  title,
  children,
  theme,
  hasPageBreak,
}: SectionProps) {
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.root} break={hasPageBreak}>
      {title && <Text style={styles.title}>{title}</Text>}
      {children}
    </View>
  );
}
