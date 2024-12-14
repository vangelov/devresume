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

const sections = [
  { name: "basics", yaml: basicsYAML },
  { name: "work", yaml: workYAML },
  { name: "volunteer", yaml: volunteerYAML },
  { name: "education", yaml: educationYAML },
  { name: "awards", yaml: awardsYAML },
  { name: "publications", yaml: publicationsYAML },
  { name: "skills", yaml: skillsYAML },
  { name: "projects", yaml: projectsYAML },
];

const orders = [
  {
    name: "default",
    sectionsOrder: [
      "basics",
      "skills",
      "work",
      "projects",
      "education",
      "awards",
      "certificates",
      "publications",
      "volunteer",
    ],
  },
  {
    name: "user-specified",
    sectionsOrder: [
      "basics",
      "volunteer",
      "work",
      "projects",

      "awards",
      "certificates",
      "skills",
      "publications",
      "education",
    ],
  },
];

for (const { name, yaml } of sections) {
  test(`should render section: ${name}`, async ({ page }) => {
    await page.goto("/");

    const editor = Editor(page);
    await editor.clearAndRefresh();
    await editor.type(yaml);

    const document = PDFDocument(page);
    await document.waitToAppear();
    await document.expect().toHaveScreenshotsOfPages();
  });
}

for (const { name, sectionsOrder } of orders) {
  test(`should render sections in the specified order: ${name}`, async ({
    page,
  }) => {
    await page.goto("/");

    const editor = Editor(page);
    await editor.clearAndRefresh();

    for (const { yaml } of sections) {
      await editor.type(yaml);
    }

    await editor.type(
      `meta:\n  sectionsOrder:\n${sectionsOrder
        .map((sectionName) => `    - ${sectionName}`)
        .join("\n")}`
    );

    const document = PDFDocument(page);
    await document.waitToAppear();
    await document.expect().toHaveScreenshotsOfPages();
  });
}
