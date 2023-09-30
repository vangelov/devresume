import { Resume, Work } from "../types";
import { View, Text } from "@react-pdf/renderer";
import { RichText } from "./rich-text";

type ItemProps = {
  work: Work;
};

export function WorkItem({ work }: ItemProps) {
  return (
    <View>
      <RichText>{work.name}</RichText>
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
        (work) => work && work.name && <WorkItem key={work.name} work={work} />
      )}
    </View>
  );
}
