import { Resume } from "../types";
import { Page, Document, StyleSheet } from "@react-pdf/renderer";
import { WorkSection } from "./sections/work-section";
import { BasicsSection } from "./sections/basics-section";
import { VStack } from "./stack";

type Props = {
  resume: Resume;
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#cbd5e1",
    fontFamily: "Roboto",
    padding: "24px",
  },
});

export function ResumeDocument({ resume }: Props) {
  return (
    <Document>
      <Page style={styles.page} size="A4">
        <VStack gap={20}>
          <BasicsSection />
          {resume.work && <WorkSection resume={resume} />}
        </VStack>
      </Page>
    </Document>
  );
}
