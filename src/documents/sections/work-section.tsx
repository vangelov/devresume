import { Resume } from "../../types";
import { Link, Text } from "@react-pdf/renderer";
import {
  EventHighlightItem,
  EventItem,
  EventsSection,
} from "../events-section";
import { ReactElement } from "react";

export type WorkItemProps = {
  position: string;
  description?: string;
  employer: string;
  location?: string;
  highlights: Array<string>;
};

export function WorkItem({
  position,
  description,
  employer,
  location,
  highlights,
}: WorkItemProps) {
  const titleDetails: Array<ReactElement> = [
    <Link src="fsd" style={{ color: "black", textDecoration: "none" }}>
      {employer}
    </Link>,
  ];

  if (location) {
    titleDetails.push(<Text style={{ color: "#6b7280" }}>{location}</Text>);
  }

  return (
    <EventItem
      title={position}
      description={description}
      titleDetails={titleDetails}
      start="Nov 2022"
      end="Dev 2023"
    >
      {highlights.map((hightlight) => (
        <EventHighlightItem key={hightlight}>{hightlight}</EventHighlightItem>
      ))}
    </EventItem>
  );
}

type SectionProps = {
  resume: Resume;
};

export function WorkSection({ resume }: SectionProps) {
  if (!resume.work) return null;

  return (
    <EventsSection title="Work Experience">
      <WorkItem
        position="Senior React Developerd"
        employer="ViewRay"
        highlights={[
          "Created medical data visualizations using TypeScript, React and Redux optimizing the rendering to maintain 60fps during frequent updates.",
          "Re-designed and re-implemented the patient profile page achieving 30% more information density.",
          "Enhanced the real-time collaboration features by implementing audio conferencing based on WebRTC.",
        ]}
      />
    </EventsSection>
  );
}
