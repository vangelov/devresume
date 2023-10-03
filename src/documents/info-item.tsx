import { View, Text, Link } from "@react-pdf/renderer";
import { ReactElement, cloneElement } from "react";

type Props = {
  icon: ReactElement;
  value: string;
  href?: string;
};

export function InfoItem({ icon, href, value }: Props) {
  return (
    <View
      style={{
        fontSize: 12,
        display: "flex",
        color: "#6b7280",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {cloneElement(icon, {
        size: 12,
        color: "gray",
        style: { marginRight: 4 },
      })}
      {href ? (
        <Link style={{ color: "#6b7280" }} src={href}>
          {value}
        </Link>
      ) : (
        <Text>{value}</Text>
      )}
    </View>
  );
}
