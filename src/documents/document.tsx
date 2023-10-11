import { Resume } from "../types";
import { Page, Document, StyleSheet } from "@react-pdf/renderer";
import { BasicsSection } from "./sections/basics-section";
import { VStack } from "./stack";
import {
  AwardsSection,
  CertificatesSection,
  EducationSection,
  ProjectsSection,
  SkillsSection,
  WorkSection,
} from "./sections";

type Props = {
  resume: Resume;
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    fontFamily: "Roboto",
    paddingVertical: 24,
    paddingHorizontal: 32,
    fontSize: 10,
    lineHeight: 1.4,
  },
});

export function ResumeDocument({ resume }: Props) {
  const { basics, work, skills, projects, education, awards, certificates } =
    resume;

  return (
    <Document>
      <Page style={styles.page} size="A4">
        <VStack gap={24}>
          {basics && <BasicsSection basics={basics} />}
          {skills && Array.isArray(skills) && <SkillsSection skills={skills} />}
          {work && Array.isArray(work) && <WorkSection work={work} />}
          {projects && Array.isArray(projects) && (
            <ProjectsSection projects={projects} />
          )}
          {education && Array.isArray(education) && (
            <EducationSection education={education} />
          )}
          {awards && Array.isArray(awards) && <AwardsSection awards={awards} />}
          {certificates && Array.isArray(certificates) && (
            <CertificatesSection certificates={certificates} />
          )}
        </VStack>
      </Page>
    </Document>
  );
}
