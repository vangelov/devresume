import { View, Text, Link } from "@react-pdf/renderer";
import { ReactElement, cloneElement } from "react";
import { HStack } from "../../stack";

type Props = {
  icon: ReactElement;
  value: string;
  href?: string;
};

export function InfoItem({ icon, href, value }: Props) {
  return (
    <HStack
      style={{
        color: "#6b7280",
      }}
    >
      {cloneElement(icon, {
        size: 12,
        color: "gray",
        style: { marginRight: 2 },
      })}
      {href ? (
        <Link style={{ color: "#6b7280", textDecoration: "none" }} src={href}>
          {value}
        </Link>
      ) : (
        <Text>{value}</Text>
      )}
    </HStack>
  );
}
