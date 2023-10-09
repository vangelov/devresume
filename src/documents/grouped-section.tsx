import { Text, View } from "@react-pdf/renderer";
import { Section } from "./section";
import { HStack, VStack } from "./stack";
import { RichText } from "./rich-text";
import { ReactNode } from "react";

type GroupItemProps = {
  title: string;
  description: string;
};

export function GroupItem({ title, description }: GroupItemProps) {
  return (
    <HStack style={{ fontSize: 14, alignItems: "flex-start" }}>
      <Text style={{ flex: 1, fontWeight: "medium" }}>{title}</Text>
      <View
        style={{
          flex: 1,
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <RichText>{description}</RichText>
      </View>
    </HStack>
  );
}

//

type EventSectionProps = {
  title: string;
  children: ReactNode;
};

export function GroupedSection({ title, children }: EventSectionProps) {
  return (
    <Section title={title}>
      <VStack gap={22}>{children}</VStack>
    </Section>
  );
}
