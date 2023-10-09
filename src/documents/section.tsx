import { ReactNode } from "react";
import { Text, View } from "@react-pdf/renderer";

type Props = {
  title?: string;
  children: ReactNode;
};
export function Section({ title, children }: Props) {
  return (
    <View>
      {title && (
        <Text
          style={{
            fontSize: 18,
            color: "#6b7280",
            marginBottom: 12,
          }}
        >
          {title}
        </Text>
      )}
      {children}
    </View>
  );
}
