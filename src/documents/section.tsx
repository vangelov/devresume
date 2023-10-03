import { ReactNode } from "react";
import { Text, View } from "@react-pdf/renderer";

type Props = {
  title?: string;
  children: ReactNode;
};
export function Section({ title, children }: Props) {
  return (
    <View>
      {title && <Text style={{ fontSize: 18, color: "#64748b" }}>{title}</Text>}
      {children}
    </View>
  );
}
