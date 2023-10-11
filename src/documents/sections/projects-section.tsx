import { Project } from "../../types";
import {
  EventHighlightItem,
  EventItem,
  EventsSection,
} from "../events-section";

export type ProjectItemProps = {
  project: Project;
};

export function ProjectItem({ project }: ProjectItemProps) {
  const { highlights } = project;

  return (
    <EventItem
      title={project.name}
      url={project.url}
      description={project.description}
      startDate={project.startDate}
      endDate={project.endDate}
    >
      {highlights &&
        Array.isArray(highlights) &&
        highlights.map((hightlight) => (
          <EventHighlightItem key={hightlight}>{hightlight}</EventHighlightItem>
        ))}
    </EventItem>
  );
}

//

type SectionProps = {
  projects: Array<Project>;
};

export function ProjectsSection({ projects }: SectionProps) {
  return (
    <EventsSection title="Projects">
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </EventsSection>
  );
}
