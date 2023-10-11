import { Project } from "../../types";
import {
  EventHighlightItem,
  EventItem,
  EventsSection,
} from "../events-section";
import { Theme } from "../theme";

export type ProjectItemProps = {
  project: Project;
  theme: Theme;
};

export function ProjectItem({ project, theme }: ProjectItemProps) {
  return (
    <EventItem
      title={project.name}
      url={project.url}
      description={project.description}
      startDate={project.startDate}
      endDate={project.endDate}
      theme={theme}
    >
      {project.highlights &&
        Array.isArray(project.highlights) &&
        project.highlights.map((hightlight) => (
          <EventHighlightItem key={hightlight}>{hightlight}</EventHighlightItem>
        ))}
    </EventItem>
  );
}

//

type SectionProps = {
  projects: Array<Project>;
  theme: Theme;
};

export function ProjectsSection({ projects, theme }: SectionProps) {
  return (
    <EventsSection theme={theme} title="Projects">
      {projects.map((project, index) => (
        <ProjectItem key={index} theme={theme} project={project} />
      ))}
    </EventsSection>
  );
}
