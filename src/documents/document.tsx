import { Resume } from "../types";
import { Page, Document, StyleSheet } from "@react-pdf/renderer";
import { BasicsSection } from "./sections/basics-section";
import { VStack } from "./stack";

type Props = {
  resume: Resume;
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#e2e8f0",
    fontFamily: "Roboto",
    padding: 24,
    fontSize: 12,
  },
});

export function ResumeDocument({ resume }: Props) {
  return (
    <Document>
      <Page style={styles.page} size="A4">
        <VStack gap={24}>
          {resume.basics && <BasicsSection basics={resume.basics} />}
        </VStack>
      </Page>
    </Document>
  );
}
