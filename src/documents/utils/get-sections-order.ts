import { Meta, ResumeSectionName } from "../../types";

export const defaultSectionsOrder: ResumeSectionName[] = [
  "basics",
  "skills",
  "work",
  "projects",
  "education",
  "awards",
  "certificates",
  "publications",
  "volunteer",
];

export function getSectionsOrder(meta?: Meta | null) {
  if (!meta || !Array.isArray(meta.sectionsOrder)) {
    return defaultSectionsOrder;
  }

  const { sectionsOrder } = meta;
  const finalSectionsOrder = [...sectionsOrder];

  const leftOutSections = defaultSectionsOrder.filter(
    (sectionName) => !sectionsOrder.includes(sectionName)
  );
  finalSectionsOrder.push(...leftOutSections);

  return finalSectionsOrder;
}
