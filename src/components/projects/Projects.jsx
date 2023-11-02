import { projectsData } from '../../../data/data';
import SectionHeading from '../SectionHeading';
import Project from './Project';

export default function Projects() {
  return (
    <section>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    </section>
  );
}
