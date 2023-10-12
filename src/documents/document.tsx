import { Resume } from "../types";
import { Page, Document, StyleSheet } from "@react-pdf/renderer";
import { BasicsSection } from "./sections/basics-section";
import { VStack } from "./stack";
import {
  AwardsSection,
  CertificatesSection,
  EducationSection,
  ProjectsSection,
  PublicationsSection,
  SkillsSection,
  VolunterrSection,
  WorkSection,
} from "./sections";
import { createTheme } from "./theme";
import { Bar } from "./bar";

type Props = {
  resume: Resume;
};

export function ResumeDocument({ resume }: Props) {
  const {
    basics,
    work,
    skills,
    projects,
    education,
    awards,
    certificates,
    publications,
    volunteer,
    meta,
  } = resume;

  const theme = createTheme(meta);

  const styles = StyleSheet.create({
    page: {
      backgroundColor: "white",
      fontFamily: "Roboto",
      paddingVertical: theme.space[10],
      paddingHorizontal: theme.space[12],
      fontSize: theme.fontSize[0],
      lineHeight: theme.lineHeight,
      color: theme.color.text,
    },
  });

  return (
    <Document>
      <Page style={styles.page} size="A4">
        <Bar theme={theme} />
        <VStack gap={theme.space[10]}>
          {basics && <BasicsSection theme={theme} basics={basics} />}
          {skills && Array.isArray(skills) && (
            <SkillsSection theme={theme} skills={skills} />
          )}
          {work && Array.isArray(work) && (
            <WorkSection theme={theme} work={work} />
          )}

          {projects && Array.isArray(projects) && (
            <ProjectsSection theme={theme} projects={projects} />
          )}

          {education && Array.isArray(education) && (
            <EducationSection theme={theme} education={education} />
          )}

          {awards && Array.isArray(awards) && (
            <AwardsSection theme={theme} awards={awards} />
          )}

          {certificates && Array.isArray(certificates) && (
            <CertificatesSection theme={theme} certificates={certificates} />
          )}

          {publications && Array.isArray(publications) && (
            <PublicationsSection theme={theme} publications={publications} />
          )}

          {volunteer && Array.isArray(volunteer) && (
            <VolunterrSection theme={theme} volunteer={volunteer} />
          )}
        </VStack>
      </Page>
    </Document>
  );
}
