import { Text } from "@react-pdf/renderer";
import { InfoItem } from "../info-item";
import { LocationIcon, MailIcon } from "../icons";
import { GlobeIcon } from "../icons/globe-icon";
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
              icon={<GlobeIcon />}
              value="Github"
              href="https://github.com"
            />
          </HStack>
        </VStack>

        <Text style={{ fontSize: 14, color: "#6b7280" }}>
          Some info about yourself. Several sentences.
        </Text>
      </VStack>
    </Section>
  );
}
