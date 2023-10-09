import { Text } from "@react-pdf/renderer";
import { Section } from "./section";
import { HStack, VStack } from "./stack";
import { RichText } from "./rich-text";
import { ReactElement, ReactNode } from "react";

type EventHighlightItemProps = {
  children: string;
};

export function EventHighlightItem({ children }: EventHighlightItemProps) {
  return (
    <HStack style={{ alignItems: "flex-start" }} gap={3}>
      <Text>•</Text>
      <RichText>{children}</RichText>
    </HStack>
  );
}

//

type EventItemProps = {
  title: string;
  titleDetails?: Array<ReactElement>;
  description?: string;
  children?: ReactNode;
  start?: string;
  end?: string;
};

export function EventItem({
  title,
  children,
  description,
  titleDetails,
  start,
  end,
}: EventItemProps) {
  return (
    <VStack gap={6}>
      <VStack gap={8}>
        <HStack
          style={{
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Text
            style={{
              marginRight: 12,
              flex: 1,
            }}
          >
            <Text style={{ fontWeight: "medium" }}>{title}</Text>
            {titleDetails &&
              titleDetails.map((titleDetail) => (
                <>
                  <Text style={{ color: "#6b7280" }}> • </Text>
                  {titleDetail}
                </>
              ))}
          </Text>

          <Text>
            {start}
            {end ? ` - ${end}` : null}
          </Text>
        </HStack>

        <Text>{description}</Text>
      </VStack>

      <VStack gap={6}>{children}</VStack>
    </VStack>
  );
}

//

type EventSectionProps = {
  title: string;
  children: ReactNode;
};

export function EventsSection({ title, children }: EventSectionProps) {
  return (
    <Section title={title}>
      <VStack gap={22}>{children}</VStack>
    </Section>
  );
}
