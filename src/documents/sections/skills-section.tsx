import { Skill } from "../../types";
import {
  GroupItem,
  GroupedSection,
  GroupedSectionProps,
} from "../grouped-section";

type SkillItemProps = {
  skill: Skill;
};

export function SkillItem({ skill }: SkillItemProps) {
  const { keywords } = skill;
  const description =
    keywords && Array.isArray(keywords) ? keywords.join(", ") : "";

  return <GroupItem title={skill.name} description={description} />;
}

//

type SkillsSectionProps = {
  skills: Array<Skill | null>;
} & GroupedSectionProps;

export function SkillsSection({ skills, theme, ...rest }: SkillsSectionProps) {
  return (
    <GroupedSection theme={theme} title="Skills" {...rest}>
      {skills.map(
        (skill, index) => skill && <SkillItem key={index} skill={skill} />
      )}
    </GroupedSection>
  );
}
