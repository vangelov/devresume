import { Publication } from "../../types";
import { Text } from "@react-pdf/renderer";
import { EventItem, EventsSection } from "../events-section";
import { ReactElement } from "react";

export type PublicationItemProps = {
  publication: Publication;
};

export function PublicationItem({ publication }: PublicationItemProps) {
  const titleDetails: Array<ReactElement> = [];
  const { name, url, publisher, releaseDate, summary } = publication;

  if (publisher) titleDetails.push(<Text>{publisher}</Text>);

  return (
    <EventItem
      title={name}
      description={summary}
      url={url}
      titleDetails={titleDetails}
      startDate={releaseDate}
    />
  );
}

//

type SectionProps = {
  publications: Array<Publication>;
};

export function PublicationsSection({ publications }: SectionProps) {
  return (
    <EventsSection title="Publications">
      {publications.map((publication, index) => (
        <PublicationItem key={index} publication={publication} />
      ))}
    </EventsSection>
  );
}
