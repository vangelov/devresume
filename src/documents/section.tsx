import { ReactNode, useMemo } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { Theme } from "./theme";

type Props = {
  title?: string;
  children: ReactNode;
  theme: Theme;
};

function createStyles(theme: Theme) {
  return StyleSheet.create({
    root: {
      fontSize: theme.fontSize[1],
      color: theme.color.accent,
      marginBottom: theme.space[5],
      fontWeight: "medium",
    },
  });
}

export function Section({ title, children, theme }: Props) {
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View>
      {title && <Text style={styles.root}>{title}</Text>}
      {children}
    </View>
  );
}
