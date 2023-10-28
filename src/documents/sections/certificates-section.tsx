import { Certificate } from "../../types";
import { Text } from "@react-pdf/renderer";
import { EventItem, EventsSection } from "../events-section";
import { ReactElement } from "react";
import { Theme } from "../theme";

export type CertificateItemProps = {
  certificate: Certificate;
  theme: Theme;
};

export function CerticateItem({ certificate, theme }: CertificateItemProps) {
  const titleDetails: Array<ReactElement> = [];

  if (certificate.issuer) {
    titleDetails.push(<Text>{certificate.issuer}</Text>);
  }

  return (
    <EventItem
      title={certificate.name}
      theme={theme}
      url={certificate.url}
      titleDetails={titleDetails}
      startDate={certificate.date}
    />
  );
}

//

type SectionProps = {
  certificates: Array<Certificate | null>;
  theme: Theme;
};

export function CertificatesSection({ theme, certificates }: SectionProps) {
  return (
    <EventsSection theme={theme} title="Certificates">
      {certificates.map(
        (certificate, index) =>
          certificate && (
            <CerticateItem
              key={index}
              theme={theme}
              certificate={certificate}
            />
          )
      )}
    </EventsSection>
  );
}
