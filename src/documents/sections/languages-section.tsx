import { Section } from "../section";
import { Text } from "@react-pdf/renderer";
import { HStack, VStack } from "../stack";

export function Language() {
  return (
    <VStack
      style={{
        paddingHorizontal: 8,
        paddingVertical: 6,
        minWidth: 100,
        border: "1px solid black",
      }}
    >
      <Text style={{ fontWeight: "medium" }}>English</Text>
      <Text style={{ fontSize: 12, color: "#6b7280" }}>Fluent</Text>
    </VStack>
  );
}

export function LanguagesSection() {
  return (
    <Section title="Languages">
      <HStack wrap={true} gap={8}>
        <Language />
        <Language />
      </HStack>
    </Section>
  );
}
