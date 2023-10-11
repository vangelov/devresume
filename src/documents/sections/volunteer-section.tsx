import { Voluteering } from "../../types";
import { Link } from "@react-pdf/renderer";
import {
  EventHighlightItem,
  EventItem,
  EventsSection,
} from "../events-section";
import { ReactElement } from "react";

export type VolunteeringItemProps = {
  volunteering: Voluteering;
};

export function VolunteeringItem({ volunteering }: VolunteeringItemProps) {
  const titleDetails: Array<ReactElement> = [];
  const {
    organization,
    url,
    startDate,
    endDate,
    summary,
    position,
    highlights,
  } = volunteering;

  if (organization) {
    titleDetails.push(
      <Link src={url || ""} style={{ color: "black", textDecoration: "none" }}>
        {organization}
      </Link>
    );
  }

  return (
    <EventItem
      title={position}
      description={summary}
      titleDetails={titleDetails}
      startDate={startDate}
      endDate={endDate}
    >
      {highlights &&
        Array.isArray(highlights) &&
        highlights.map((highlight) => (
          <EventHighlightItem key={highlight}>{highlight}</EventHighlightItem>
        ))}
    </EventItem>
  );
}

//

type SectionProps = {
  volunteer: Array<Voluteering>;
};

export function VolunterrSection({ volunteer }: SectionProps) {
  return (
    <EventsSection title="Volunteer">
      {volunteer.map((volunteering, index) => (
        <VolunteeringItem key={index} volunteering={volunteering} />
      ))}
    </EventsSection>
  );
}
