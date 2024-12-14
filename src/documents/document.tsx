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
import { Theme, createTheme } from "./theme";
import { Bar } from "./bar";
import { useMemo } from "react";
import { getSectionsOrder } from "./utils";

type Props = {
  resume: Resume;
};

function createStyles(theme: Theme) {
  return StyleSheet.create({
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
}

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

  const accentColor = meta && meta.accentColor;
  const baseFontSize = meta && meta.baseFontSize;
  const sectionsOrder = useMemo(() => getSectionsOrder(meta), [meta]);

  const theme = useMemo(
    () => createTheme(accentColor, baseFontSize),
    [accentColor, baseFontSize]
  );
  const styles = createStyles(theme);

  return (
    <Document>
      <Page style={styles.page} size="A4">
        <Bar theme={theme} />
        <VStack gap={theme.space[10]}>
          {sectionsOrder.map((sectionName) => {
            if (sectionName === "basics" && basics) {
              return (
                <BasicsSection
                  key={sectionName}
                  theme={theme}
                  basics={basics}
                />
              );
            }

            if (sectionName === "skills" && Array.isArray(skills)) {
              return (
                <SkillsSection
                  key={sectionName}
                  theme={theme}
                  skills={skills}
                />
              );
            }

            if (sectionName === "work" && Array.isArray(work)) {
              return (
                <WorkSection key={sectionName} theme={theme} work={work} />
              );
            }

            if (sectionName === "projects" && Array.isArray(projects)) {
              return (
                <ProjectsSection
                  key={sectionName}
                  theme={theme}
                  projects={projects}
                />
              );
            }

            if (sectionName === "education" && Array.isArray(education)) {
              return (
                <EducationSection
                  key={sectionName}
                  theme={theme}
                  education={education}
                />
              );
            }

            if (sectionName === "awards" && Array.isArray(awards)) {
              return (
                <AwardsSection
                  key={sectionName}
                  theme={theme}
                  awards={awards}
                />
              );
            }

            if (sectionName === "certificates" && Array.isArray(certificates)) {
              return (
                <CertificatesSection
                  key={sectionName}
                  theme={theme}
                  certificates={certificates}
                />
              );
            }

            if (sectionName === "publications" && Array.isArray(publications)) {
              return (
                <PublicationsSection
                  key={sectionName}
                  theme={theme}
                  publications={publications}
                />
              );
            }

            if (sectionName === "volunteer" && Array.isArray(volunteer)) {
              return (
                <VolunterrSection
                  key={sectionName}
                  theme={theme}
                  volunteer={volunteer}
                />
              );
            }

            return null;
          })}
        </VStack>
      </Page>
    </Document>
  );
}
