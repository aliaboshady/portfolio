import { projectsData } from '../../../data/data';
import SectionHeading from '../SectionHeading';
import Project from './Project';

export default function Projects() {
  return (
    <section>
      <SectionHeading>My Projects</SectionHeading>
      <div className="sm:grid-cols-2 grid-cols grid gap-4">
        {projectsData.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    </section>
  );
}
