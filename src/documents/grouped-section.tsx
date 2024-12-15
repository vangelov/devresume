import { Text, View } from "@react-pdf/renderer";
import { Section } from "./section";
import { HStack, VStack } from "./stack";
import { RichText } from "./rich-text";
import { EventsSectionProps } from "./events-section";

type GroupItemProps = {
  title?: string;
  description?: string;
};

export function GroupItem({ title, description }: GroupItemProps) {
  return (
    <HStack wrap={false} style={{ alignItems: "flex-start" }}>
      {title && (
        <Text style={{ flex: 0.6, fontWeight: "medium" }}>{title}</Text>
      )}

      {description ? (
        <View
          style={{
            flex: 1,
            display: "flex",
          }}
        >
          <RichText>{description}</RichText>
        </View>
      ) : null}
    </HStack>
  );
}

//

export type GroupedSectionProps = EventsSectionProps;

export function GroupedSection({
  title,
  children,
  theme,
  ...rest
}: GroupedSectionProps) {
  return (
    <Section theme={theme} title={title} {...rest}>
      <VStack gap={theme.space[7]}>{children}</VStack>
    </Section>
  );
}
