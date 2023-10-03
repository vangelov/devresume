import { Resume, Work } from "../../types";
import { View, Text } from "@react-pdf/renderer";
import { Section } from "../section";

type ItemProps = {
  work: Work;
};

export function WorkItem({ work }: ItemProps) {
  return (
    <View>
      <Text style={{ fontSize: 14 }}>{work.name}</Text>
    </View>
  );
}

type SectionProps = {
  resume: Resume;
};

export function WorkSection({ resume }: SectionProps) {
  if (!resume.work) return null;

  return (
    <Section title="Work">
      {resume.work.map(
        (work) => work && work.name && <WorkItem key={work.name} work={work} />
      )}
    </Section>
  );
}
