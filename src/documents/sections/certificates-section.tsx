import { Certificate } from "../../types";
import { Text } from "@react-pdf/renderer";
import { EventItem, EventsSection } from "../events-section";
import { ReactElement } from "react";

export type CertificateItemProps = {
  certificate: Certificate;
};

export function CerticateItem({ certificate }: CertificateItemProps) {
  const titleDetails: Array<ReactElement> = [];
  const { issuer, name, url, date } = certificate;

  if (issuer) titleDetails.push(<Text>{issuer}</Text>);

  return (
    <EventItem
      title={name}
      url={url}
      titleDetails={titleDetails}
      startDate={date}
    />
  );
}

//

type SectionProps = {
  certificates: Array<Certificate>;
};

export function CertificatesSection({ certificates }: SectionProps) {
  return (
    <EventsSection title="Certificates">
      {certificates.map((certificate, index) => (
        <CerticateItem key={index} certificate={certificate} />
      ))}
    </EventsSection>
  );
}
