import { Text } from "@react-pdf/renderer";
import { Section } from "./section";
import { HStack, VStack } from "./stack";
import { RichText } from "./rich-text";
import { Fragment, ReactElement, ReactNode } from "react";
import { formatDate } from "./utils";

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
  title?: string;
  titleDetails?: Array<ReactElement>;
  description?: string;
  children?: ReactNode;
  startDate?: string;
  endDate?: string;
};

export function EventItem({
  title,
  children,
  description,
  titleDetails,
  startDate,
  endDate,
}: EventItemProps) {
  console.log("s", startDate, endDate);
  return (
    <VStack gap={6}>
      <VStack gap={4}>
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
              titleDetails.map((titleDetail, index) => (
                <Fragment key={index}>
                  <Text style={{ color: "#6b7280" }}> • </Text>
                  {titleDetail}
                </Fragment>
              ))}
          </Text>

          <Text>
            {startDate && formatDate(startDate)}
            {endDate ? ` - ${formatDate(endDate)}` : null}
          </Text>
        </HStack>

        {description && <Text>{description}</Text>}
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
