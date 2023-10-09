import { Resume } from "../types";
import { Page, Document, StyleSheet } from "@react-pdf/renderer";
import { WorkSection } from "./sections/work-section";
import { BasicsSection } from "./sections/basics-section";
import { VStack } from "./stack";
import { EducationSection, LanguagesSection, SkillsSection } from "./sections";

type Props = {
  resume: Resume;
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#e2e8f0",
    fontFamily: "Roboto",
    padding: 24,
    fontSize: 12,
    lineHeight: 1.5,
  },
});

export function ResumeDocument({ resume }: Props) {
  return (
    <Document>
      <Page style={styles.page} size="A4">
        <VStack gap={24}>
          <BasicsSection />
          {resume.work && <WorkSection resume={resume} />}
          <EducationSection />
          <LanguagesSection />
          <SkillsSection />
        </VStack>
      </Page>
    </Document>
  );
}
