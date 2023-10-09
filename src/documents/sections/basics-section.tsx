import { Text } from "@react-pdf/renderer";
import { InfoItem } from "../info-item";
import { GitHubIcon, LocationIcon, MailIcon } from "../icons";
import { Section } from "../section";
import { HStack, VStack } from "../stack";

export function BasicsSection() {
  return (
    <Section>
      <VStack gap={12}>
        <VStack gap={5}>
          <HStack>
            <Text style={{ fontSize: 22, fontWeight: "medium" }}>
              Vladimir Angelov
            </Text>
            <Text> </Text>
            <Text style={{ color: "#6b7280", fontSize: 18 }}>
              • Senior UI Developer
            </Text>
          </HStack>

          <HStack wrap={true} gap={10}>
            <InfoItem icon={<MailIcon />} value="vlady.angelov@gmail.com" />
            <InfoItem icon={<LocationIcon />} value="Sofia, Bulgaria" />
            <InfoItem
              icon={<GitHubIcon />}
              value="Github"
              href="https://github.com"
            />
          </HStack>
        </VStack>

        <Text>
          Senior front-end developer with 10+ years of experience with the last
          5 focused on creating web applications. Cares deeply about quality and
          take a holistic approach towards user interfaces that encompasses
          design, implementation, backend communication, performance and
          testing.
        </Text>
      </VStack>
    </Section>
  );
}
