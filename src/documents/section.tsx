import { ReactNode } from "react";
import { Text, View } from "@react-pdf/renderer";
import { Theme } from "./theme";

type Props = {
  title?: string;
  children: ReactNode;
  theme: Theme;
};

export function Section({ title, children, theme }: Props) {
  return (
    <View>
      {title && (
        <Text
          style={{
            fontSize: theme.fontSize[1],
            color: theme.color.accent,
            marginBottom: theme.space[5],
            fontWeight: "medium",
          }}
        >
          {title}
        </Text>
      )}
      {children}
    </View>
  );
}
