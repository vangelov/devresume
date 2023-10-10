import { Text, View } from "@react-pdf/renderer";
import { Section } from "../../section";
import { HStack, VStack } from "../../stack";
import { Basics } from "../../../types";
import { RichText } from "../../rich-text";
import { Contacts } from "./contacts";

export type Props = {
  basics: Basics;
};

export function BasicsSection({ basics }: Props) {
  return (
    <Section>
      <VStack gap={12}>
        <HStack>
          {basics.name && (
            <Text style={{ fontSize: 20, fontWeight: "medium" }}>
              {basics.name}
            </Text>
          )}

          {basics.label && (
            <Text
              style={{
                color: "#6b7280",
                fontSize: 16,
              }}
            >
              {" "}
              • {basics.label}
            </Text>
          )}
        </HStack>

        <HStack style={{ alignItems: "flex-start" }}>
          <Contacts style={{ flex: 0.6 }} basics={basics} />
          <View style={{ flex: 1 }}>
            {basics.summary && <RichText>{basics.summary}</RichText>}
          </View>
        </HStack>
      </VStack>
    </Section>
  );
}
