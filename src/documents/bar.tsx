import { View } from "@react-pdf/renderer";
import { Theme } from "./theme";

type Props = {
  theme: Theme;
};

export function Bar({ theme }: Props) {
  return (
    <View
      fixed
      style={{
        backgroundColor: theme.color.accent,
        height: theme.space[4],
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
      }}
    />
  );
}
