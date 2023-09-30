import { Resume } from "../types";
import { Page, Document } from "@react-pdf/renderer";
import { WorkSection } from "./work";

type Props = {
  resume: Resume;
};

export function ResumeDocument({ resume }: Props) {
  return (
    <Document>
      <Page style={{ backgroundColor: "white" }} size="A4">
        {resume.work && <WorkSection resume={resume} />}
      </Page>
    </Document>
  );
}
