import { Resume } from "../types";
import { Page, Document, StyleSheet } from "@react-pdf/renderer";
import { BasicsSection } from "./sections/basics-section";
import {
  AwardsSection,
  CertificatesSection,
  EducationSection,
  ProjectsSection,
  PublicationsSection,
  SkillsSection,
  VolunteerSection,
  WorkSection,
} from "./sections";
import { Theme, createTheme } from "./theme";
import { Bar } from "./bar";
import { useMemo } from "react";
import { getSectionsOrder } from "./utils";
import { SectionProps } from "./section";
import { useHasPageBreak } from "./use-has-page-break";

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

  const hasPageBreak = useHasPageBreak(meta);

  return (
    <Document>
      <Page style={styles.page} size="A4">
        <Bar theme={theme} />

        {sectionsOrder.map((sectionName) => {
          const commonProps: SectionProps = {
            theme,
            hasPageBreak: hasPageBreak(sectionName),
          };

          if (sectionName === "basics" && basics) {
            return (
              <BasicsSection
                {...commonProps}
                key={sectionName}
                basics={basics}
              />
            );
          }

          if (sectionName === "skills" && Array.isArray(skills)) {
            return (
              <SkillsSection
                {...commonProps}
                key={sectionName}
                skills={skills}
              />
            );
          }

          if (sectionName === "work" && Array.isArray(work)) {
            return (
              <WorkSection {...commonProps} key={sectionName} work={work} />
            );
          }

          if (sectionName === "projects" && Array.isArray(projects)) {
            return (
              <ProjectsSection
                {...commonProps}
                key={sectionName}
                projects={projects}
              />
            );
          }

          if (sectionName === "education" && Array.isArray(education)) {
            return (
              <EducationSection
                {...commonProps}
                key={sectionName}
                education={education}
              />
            );
          }

          if (sectionName === "awards" && Array.isArray(awards)) {
            return (
              <AwardsSection
                {...commonProps}
                key={sectionName}
                awards={awards}
              />
            );
          }

          if (sectionName === "certificates" && Array.isArray(certificates)) {
            return (
              <CertificatesSection
                {...commonProps}
                key={sectionName}
                certificates={certificates}
              />
            );
          }

          if (sectionName === "publications" && Array.isArray(publications)) {
            return (
              <PublicationsSection
                {...commonProps}
                key={sectionName}
                publications={publications}
              />
            );
          }

          if (sectionName === "volunteer" && Array.isArray(volunteer)) {
            return (
              <VolunteerSection
                {...commonProps}
                key={sectionName}
                volunteer={volunteer}
              />
            );
          }

          return null;
        })}
      </Page>
    </Document>
  );
}
