import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import useSectionInView from '../../hooks/useSectionInView';
import SectionHeading from '../SectionHeading';
import FiltersList from './FiltersList';
import SkillsList from './SkillsList';

export default function Skills() {
  const refSection = useSectionInView('Skills');
  const [filter, setFilter] = useState('all');

  const { ref: refSkillsList, inView } = useInView({ threshold: 0.75 });

  function handleFilterClick(newFilter) {
    setFilter(newFilter);
  }

  return (
    <section
      id="skills"
      ref={refSection}
      className="flex flex-col max-w-[53rem] scroll-mt-24 sm:scroll-mt-[8rem] text-center items-center transition-all"
    >
      <SectionHeading>My Skills</SectionHeading>
      <p ref={refSkillsList} className="mb-6 -mt-6 text-gray-700">
        Filter skills by clicking on the buttons bellow!
      </p>
      <FiltersList onSelectFilter={handleFilterClick} activeButton={filter} />
      <SkillsList filter={filter} inView={inView} />
    </section>
  );
}
