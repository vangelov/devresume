import { Award } from "../../types";
import { Text } from "@react-pdf/renderer";
import { EventItem, EventsSection } from "../events-section";
import { ReactElement } from "react";
import { Theme } from "../theme";

export type AwardItemProps = {
  award: Award;
  theme: Theme;
};

export function AwardItem({ award, theme }: AwardItemProps) {
  const titleDetails: Array<ReactElement> = [];

  if (award.awarder) {
    titleDetails.push(<Text>{award.awarder}</Text>);
  }

  return (
    <EventItem
      theme={theme}
      title={award.title}
      description={award.summary}
      titleDetails={titleDetails}
      startDate={award.date}
    />
  );
}

//

type SectionProps = {
  awards: Array<Award | null>;
  theme: Theme;
};

export function AwardsSection({ awards, theme }: SectionProps) {
  return (
    <EventsSection theme={theme} title="Awards">
      {awards.map(
        (award, index) =>
          award && <AwardItem key={index} theme={theme} award={award} />
      )}
    </EventsSection>
  );
}
