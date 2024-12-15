import { Project } from "../../types";
import {
  EventHighlightItem,
  EventItem,
  EventsSection,
  EventsSectionProps,
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
        project.highlights.map(
          (hightlight) =>
            hightlight && (
              <EventHighlightItem key={hightlight}>
                {hightlight}
              </EventHighlightItem>
            )
        )}
    </EventItem>
  );
}

//

type ProjectsSectionProps = {
  projects: Array<Project | null>;
} & EventsSectionProps;

export function ProjectsSection({
  projects,
  theme,
  ...rest
}: ProjectsSectionProps) {
  return (
    <EventsSection theme={theme} title="Projects" {...rest}>
      {projects.map(
        (project, index) =>
          project && <ProjectItem key={index} theme={theme} project={project} />
      )}
    </EventsSection>
  );
}
