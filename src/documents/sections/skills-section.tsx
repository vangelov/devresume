import { Skill } from "../../types";
import { GroupItem, GroupedSection } from "../grouped-section";
import { Theme } from "../theme";

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
  theme: Theme;
};

export function SkillsSection({ skills, theme }: Props) {
  return (
    <GroupedSection theme={theme} title="Skills">
      {skills.map((skill, index) => (
        <SkillItem key={index} skill={skill} />
      ))}
    </GroupedSection>
  );
}
