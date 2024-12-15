import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { Section, SectionProps } from "../../section";
import { HStack, VStack } from "../../stack";
import { Basics } from "../../../types";
import { RichText } from "../../rich-text";
import { Contacts } from "./contacts";
import { Theme } from "../../theme";
import { useMemo } from "react";

export type Props = {
  basics: Basics;
} & SectionProps;

function createStyles(theme: Theme) {
  return StyleSheet.create({
    name: { fontSize: theme.fontSize[2], fontWeight: "medium" },
    label: {
      color: theme.color.lightText,
      fontSize: theme.fontSize[1],
    },
  });
}

export function BasicsSection({ basics, theme, ...rest }: Props) {
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <Section theme={theme} {...rest}>
      <VStack gap={theme.space[5]}>
        <HStack>
          {basics.name && <Text style={styles.name}>{basics.name}</Text>}
          {basics.label && (
            <Text style={styles.label}>
              <Text> </Text>• {basics.label}
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
