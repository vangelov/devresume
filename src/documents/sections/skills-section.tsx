import { GroupItem, GroupedSection } from "../grouped-section";

export function SkillsSection() {
  return (
    <GroupedSection title="Skills">
      <GroupItem
        title="Languages and technologies"
        description="JavaScript, TypeScript, SQL, Git, GraphQL, REST, WebSocket, Electron, WebRTC, HTML, CSS, Node.js"
      />
      <GroupItem
        title="Frameworks"
        description="React, Redux, React Query, React Testing Library, React Hook Form, React Router, Playwright, Cypress"
      />
    </GroupedSection>
  );
}
