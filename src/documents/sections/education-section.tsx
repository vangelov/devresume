import { EducationPlace } from "../../types";
import { Link } from "@react-pdf/renderer";
import {
  EventHighlightItem,
  EventItem,
  EventsSection,
} from "../events-section";
import { ReactElement } from "react";

export type EducationPlaceItemProps = {
  educationPlace: EducationPlace;
};

export function EducationPlaceItem({
  educationPlace,
}: EducationPlaceItemProps) {
  const titleDetails: Array<ReactElement> = [];

  if (educationPlace.institution) {
    titleDetails.push(
      <Link
        src={educationPlace.url || ""}
        style={{ color: "black", textDecoration: "none" }}
      >
        {educationPlace.institution}
      </Link>
    );
  }

  const { courses, score, area, startDate, endDate } = educationPlace;

  return (
    <EventItem
      title={area}
      description={score}
      titleDetails={titleDetails}
      startDate={startDate}
      endDate={endDate}
    >
      {courses &&
        Array.isArray(courses) &&
        courses.map((course) => (
          <EventHighlightItem key={course}>{course}</EventHighlightItem>
        ))}
    </EventItem>
  );
}

//

type SectionProps = {
  education: Array<EducationPlace>;
};

export function EducationSection({ education }: SectionProps) {
  return (
    <EventsSection title="Education">
      {education.map((educationPlace, index) => (
        <EducationPlaceItem key={index} educationPlace={educationPlace} />
      ))}
    </EventsSection>
  );
}
