import { Text, View } from "@react-pdf/renderer";
import { Section } from "../../section";
import { HStack, VStack } from "../../stack";
import { Basics } from "../../../types";
import { RichText } from "../../rich-text";
import { Contacts } from "./contacts";
import { Theme } from "../../theme";

export type Props = {
  basics: Basics;
  theme: Theme;
};

export function BasicsSection({ basics, theme }: Props) {
  return (
    <Section theme={theme}>
      <VStack gap={theme.space[5]}>
        <HStack>
          {basics.name && (
            <Text style={{ fontSize: theme.fontSize[2], fontWeight: "medium" }}>
              {basics.name}
            </Text>
          )}

          {basics.label && (
            <Text
              style={{
                color: theme.color.lightText,
                fontSize: theme.fontSize[1],
              }}
            >
              {" "}
              • {basics.label}
            </Text>
          )}
        </HStack>

        <HStack style={{ alignItems: "flex-start" }}>
          <Contacts theme={theme} style={{ flex: 0.6 }} basics={basics} />
          <View style={{ flex: 1 }}>
            {basics.summary && <RichText>{basics.summary}</RichText>}
          </View>
        </HStack>
      </VStack>
    </Section>
  );
}
