import { test } from "@playwright/test";
import { Editor, PDFDocument } from "./components";
import {
  basicsYAML,
  workYAML,
  volunteerYAML,
  educationYAML,
  awardsYAML,
  publicationsYAML,
  skillsYAML,
  projectsYAML,
} from "./yaml";

const tests = [
  { section: "basics", yaml: basicsYAML },
  { section: "work", yaml: workYAML },
  { section: "volunteer", yaml: volunteerYAML },
  { section: "education", yaml: educationYAML },
  { section: "awards", yaml: awardsYAML },
  { section: "publications", yaml: publicationsYAML },
  { section: "skills", yaml: skillsYAML },
  { section: "projects", yaml: projectsYAML },
];

for (const { section, yaml } of tests) {
  test(`should render section: ${section}`, async ({ page }) => {
    await page.goto("/");

    const editor = Editor(page);
    await editor.clearAndRefresh();
    await editor.type(yaml);

    const document = PDFDocument(page);
    await document.waitToAppear();
    await document.expect().toHaveScreenshotsOfPages();
  });
}
