import { Job } from "../../types";
import { Link, Text } from "@react-pdf/renderer";
import {
  EventHighlightItem,
  EventItem,
  EventsSection,
} from "../events-section";
import { ReactElement } from "react";

export type JobItemProps = {
  job: Job;
};

export function JobItem({ job }: JobItemProps) {
  const titleDetails: Array<ReactElement> = [];

  if (job.name) {
    titleDetails.push(
      <Link
        src={job.url || ""}
        style={{ color: "black", textDecoration: "none" }}
      >
        {job.name}
      </Link>
    );
  }

  if (job.location) {
    titleDetails.push(<Text style={{ color: "#6b7280" }}>{job.location}</Text>);
  }

  return (
    <EventItem
      title={job.position}
      description={job.summary}
      titleDetails={titleDetails}
      startDate={job.startDate}
      endDate={job.endDate}
    >
      {job.highlights &&
        job.highlights.map((hightlight) => (
          <EventHighlightItem key={hightlight}>{hightlight}</EventHighlightItem>
        ))}
    </EventItem>
  );
}

//

type SectionProps = {
  work: Array<Job>;
};

export function WorkSection({ work }: SectionProps) {
  return (
    <EventsSection title="Work Experience">
      {work.map((job, index) => (
        <JobItem key={index} job={job} />
      ))}
    </EventsSection>
  );
}
