import { Text, Link } from "@react-pdf/renderer";
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
    <HStack wrap2={false} style={{ alignItems: "flex-start" }} gap={3}>
      <Text>•</Text>
      <RichText>{children}</RichText>
    </HStack>
  );
}

//

type EventItemProps = {
  title?: string;
  url?: string;
  titleDetails?: Array<ReactElement>;
  description?: string;
  children?: ReactNode;
  startDate?: string | number;
  endDate?: string | number;
};

export function EventItem({
  title,
  url,
  children,
  description,
  titleDetails,
  startDate,
  endDate,
}: EventItemProps) {
  return (
    <VStack wrap2={false} gap={6}>
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
            {url ? (
              <Link
                src={url}
                style={{
                  fontWeight: "medium",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                {title}
              </Link>
            ) : (
              <Text style={{ fontWeight: "medium" }}>{title}</Text>
            )}

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

        {description && <RichText>{description}</RichText>}
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
