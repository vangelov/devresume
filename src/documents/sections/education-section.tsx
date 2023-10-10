import { Link } from "@react-pdf/renderer";
import { EventItem, EventsSection } from "../events-section";

export function EducationItem() {
  return (
    <EventItem
      title="Bachelor of Software Engineering"
      titleDetails={[
        <Link src="fsd" style={{ color: "black" }}>
          Sofia University
        </Link>,
      ]}
      startDate="Nov 2022"
      endDate="Dev 2023"
    />
  );
}

export function EducationSection() {
  return (
    <EventsSection title="Education">
      <EducationItem />
    </EventsSection>
  );
}
