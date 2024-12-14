import { expect, test } from "vitest";
import { defaultSectionsOrder, getSectionsOrder } from "./get-sections-order";
import { ResumeSectionName } from "../../types";

test("returns the default order if no metadata", () => {
  const actual = getSectionsOrder();
  expect(actual).toEqual(defaultSectionsOrder);
});

test("returns the sections in the specified order ", () => {
  const sectionsOrder: ResumeSectionName[] = [
    "basics",
    "awards",
    "education",
    "volunteer",
    "skills",
    "work",
    "certificates",
    "projects",
    "publications",
  ];

  const actual = getSectionsOrder({
    sectionsOrder,
  });

  expect(actual).toEqual(sectionsOrder);
});

test("returns the specified sections in their order and the others in the default one", () => {
  const sectionsOrder: ResumeSectionName[] = ["basics", "work", "education"];

  const actual = getSectionsOrder({
    sectionsOrder,
  });

  expect(actual).toEqual([
    ...sectionsOrder,
    "skills",
    "projects",
    "awards",
    "certificates",
    "publications",
    "volunteer",
  ]);
});
