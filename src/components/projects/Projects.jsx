import { projectsData } from '../../../data/data';
import SectionHeading from '../SectionHeading';
import Project from './Project';
import useSectionInView from '../../hooks/useSectionInView';

export default function Projects() {
  const ref = useSectionInView('Projects', 0.5);

  return (
    <section id="projects" ref={ref} className="scroll-mt-28">
      <SectionHeading>My Projects</SectionHeading>
      <div className="sm:grid-cols-2 grid-cols grid gap-4">
        {projectsData.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    </section>
  );
}
