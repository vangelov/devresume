import { Resume, Work } from "../types";
import { View, Text } from "@react-pdf/renderer";

type ItemProps = {
  work: Work;
};

export function WorkItem({ work }: ItemProps) {
  return (
    <View>
      <Text>{work.name}</Text>
    </View>
  );
}

type SectionProps = {
  resume: Resume;
};

export function WorkSection({ resume }: SectionProps) {
  if (!resume.work) return null;

  return (
    <View>
      <Text>Work</Text>

      {resume.work.map(
        (work) => work && <WorkItem key={work.name} work={work} />
      )}
    </View>
  );
}
