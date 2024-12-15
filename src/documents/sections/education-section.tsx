import { EducationPlace } from "../../types";
import { Link } from "@react-pdf/renderer";
import {
  EventHighlightItem,
  EventItem,
  EventsSection,
  EventsSectionProps,
} from "../events-section";
import { ReactElement } from "react";
import { Theme } from "../theme";

export type EducationPlaceItemProps = {
  educationPlace: EducationPlace;
  theme: Theme;
};

export function EducationPlaceItem({
  educationPlace,
  theme,
}: EducationPlaceItemProps) {
  const titleDetails: Array<ReactElement> = [];

  if (educationPlace.institution) {
    titleDetails.push(
      <Link
        src={educationPlace.url || ""}
        style={{ color: theme.color.text, textDecoration: "none" }}
      >
        {educationPlace.institution}
      </Link>
    );
  }

  return (
    <EventItem
      title={educationPlace.area}
      description={educationPlace.score}
      titleDetails={titleDetails}
      startDate={educationPlace.startDate}
      endDate={educationPlace.endDate}
      theme={theme}
    >
      {educationPlace.courses &&
        Array.isArray(educationPlace.courses) &&
        educationPlace.courses.map(
          (course) =>
            course && (
              <EventHighlightItem key={course}>{course}</EventHighlightItem>
            )
        )}
    </EventItem>
  );
}

//

type EducationSectionProps = {
  education: Array<EducationPlace | null>;
} & EventsSectionProps;

export function EducationSection({
  education,
  theme,
  ...rest
}: EducationSectionProps) {
  return (
    <EventsSection theme={theme} title="Education" {...rest}>
      {education.map(
        (educationPlace, index) =>
          educationPlace && (
            <EducationPlaceItem
              key={index}
              theme={theme}
              educationPlace={educationPlace}
            />
          )
      )}
    </EventsSection>
  );
}
