import { Publication } from "../../types";
import { Text } from "@react-pdf/renderer";
import {
  EventItem,
  EventsSection,
  EventsSectionProps,
} from "../events-section";
import { ReactElement } from "react";
import { Theme } from "../theme";

export type PublicationItemProps = {
  publication: Publication;
  theme: Theme;
};

export function PublicationItem({ publication, theme }: PublicationItemProps) {
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
      theme={theme}
    />
  );
}

//

type PublicationsSectionProps = {
  publications: Array<Publication | null>;
} & EventsSectionProps;

export function PublicationsSection({
  publications,
  theme,
  ...rest
}: PublicationsSectionProps) {
  return (
    <EventsSection theme={theme} title="Publications" {...rest}>
      {publications.map(
        (publication, index) =>
          publication && (
            <PublicationItem
              key={index}
              theme={theme}
              publication={publication}
            />
          )
      )}
    </EventsSection>
  );
}
