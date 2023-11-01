import { Job } from "../../types";
import { Link, Text } from "@react-pdf/renderer";
import {
  EventHighlightItem,
  EventItem,
  EventsSection,
} from "../events-section";
import { ReactElement } from "react";
import { Theme } from "../theme";

export type JobItemProps = {
  job: Job;
  theme: Theme;
};

export function JobItem({ job, theme }: JobItemProps) {
  const titleDetails: Array<ReactElement> = [];

  if (job.name) {
    titleDetails.push(
      <Link
        src={job.url || ""}
        style={{ color: theme.color.text, textDecoration: "none" }}
      >
        {job.name}
      </Link>
    );
  }

  if (job.location) {
    titleDetails.push(
      <Text style={{ color: theme.color.lightText }}>{job.location}</Text>
    );
  }

  return (
    <EventItem
      title={job.position}
      description={job.summary}
      titleDetails={titleDetails}
      startDate={job.startDate}
      endDate={job.endDate}
      theme={theme}
    >
      {job.highlights &&
        Array.isArray(job.highlights) &&
        job.highlights.map(
          (hightlight) =>
            hightlight && (
              <EventHighlightItem key={hightlight}>
                {hightlight}
              </EventHighlightItem>
            )
        )}
    </EventItem>
  );
}

//

type SectionProps = {
  work: Array<Job | null>;
  theme: Theme;
};

export function WorkSection({ work, theme }: SectionProps) {
  return (
    <EventsSection theme={theme} title="Work Experience">
      {work.map(
        (job, index) => job && <JobItem key={index} theme={theme} job={job} />
      )}
    </EventsSection>
  );
}
