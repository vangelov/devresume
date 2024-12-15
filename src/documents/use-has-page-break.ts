import { useCallback, useMemo } from "react";
import { Meta, ResumeSectionName } from "../types";

export function useHasPageBreak(meta?: Meta | null) {
  const sectionsPageBreaksSet = useMemo(
    () =>
      meta && Array.isArray(meta.sectionsPageBreaks)
        ? new Set<ResumeSectionName>(meta.sectionsPageBreaks)
        : null,
    [meta]
  );

  const hasPageBreak = useCallback(
    (sectionName: ResumeSectionName) => {
      return sectionsPageBreaksSet
        ? sectionsPageBreaksSet.has(sectionName)
        : false;
    },
    [sectionsPageBreaksSet]
  );

  return hasPageBreak;
}
