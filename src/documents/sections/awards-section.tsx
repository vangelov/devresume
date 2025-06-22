import { Award } from "../../types";
import { Text } from "@react-pdf/renderer";
import {
  EventItem,
  EventsSection,
  EventsSectionProps,
} from "../events-section";
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
      date={award.date}
    />
  );
}

//

export type AwardsSectionProps = {
  awards: Array<Award | null>;
} & EventsSectionProps;

export function AwardsSection({ awards, theme, ...rest }: AwardsSectionProps) {
  return (
    <EventsSection theme={theme} title="Awards" {...rest}>
      {awards.map(
        (award, index) =>
          award && <AwardItem key={index} theme={theme} award={award} />
      )}
    </EventsSection>
  );
}
