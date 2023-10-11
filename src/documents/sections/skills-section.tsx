import { Skill } from "../../types";
import { GroupItem, GroupedSection } from "../grouped-section";

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

type Props = {
  skills: Array<Skill>;
};

export function SkillsSection({ skills }: Props) {
  return (
    <GroupedSection title="Skills">
      {skills.map((skill, index) => (
        <SkillItem key={index} skill={skill} />
      ))}
    </GroupedSection>
  );
}
