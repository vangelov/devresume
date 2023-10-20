import { View, StyleSheet } from "@react-pdf/renderer";
import { Theme } from "./theme";
import { useMemo } from "react";

type Props = {
  theme: Theme;
};

function createStyles(theme: Theme) {
  return StyleSheet.create({
    root: {
      backgroundColor: theme.color.accent,
      height: theme.space[4],
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
    },
  });
}

export function Bar({ theme }: Props) {
  const styles = useMemo(() => createStyles(theme), [theme]);
  return <View fixed style={styles.root} />;
}
