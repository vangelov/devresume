import { Award } from "../../types";
import { Text } from "@react-pdf/renderer";
import { EventItem, EventsSection } from "../events-section";
import { ReactElement } from "react";

export type AwardItemProps = {
  award: Award;
};

export function AwardItem({ award }: AwardItemProps) {
  const titleDetails: Array<ReactElement> = [];
  const { awarder, title, summary, date } = award;

  if (awarder) titleDetails.push(<Text>{awarder}</Text>);

  return (
    <EventItem
      title={title}
      description={summary}
      titleDetails={titleDetails}
      startDate={date}
    />
  );
}

//

type SectionProps = {
  awards: Array<Award>;
};

export function AwardsSection({ awards }: SectionProps) {
  return (
    <EventsSection title="Awards">
      {awards.map((award, index) => (
        <AwardItem key={index} award={award} />
      ))}
    </EventsSection>
  );
}
