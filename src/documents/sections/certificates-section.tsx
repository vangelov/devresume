import { Certificate } from "../../types";
import { Text } from "@react-pdf/renderer";
import { EventItem, EventsSection } from "../events-section";
import { ReactElement } from "react";
import { Theme } from "../theme";
import { SectionProps } from "../section";

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

type CertificatesSection = {
  certificates: Array<Certificate | null>;
} & SectionProps;

export function CertificatesSection({
  theme,
  certificates,
  ...rest
}: CertificatesSection) {
  return (
    <EventsSection theme={theme} title="Certificates" {...rest}>
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
