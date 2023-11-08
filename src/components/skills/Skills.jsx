import { useState } from 'react';
import useSectionInView from '../../hooks/useSectionInView';
import SectionHeading from '../SectionHeading';
import FiltersList from './FiltersList';
import SkillsList from './SkillsList';

export default function Skills() {
  const ref = useSectionInView('Skills');
  const [filter, setFilter] = useState('all');

  function handleFilterClick(newFilter) {
    setFilter(newFilter);
  }

  return (
    <section
      id="skills"
      ref={ref}
      className="flex flex-col max-w-[53rem] scroll-mt-24 sm:scroll-mt-48 text-center items-center"
    >
      <SectionHeading>My Skills</SectionHeading>
      <p className="mb-6 -mt-6 text-gray-700">
        Filter skills by clicking on the buttons bellow!
      </p>
      <FiltersList onSelectFilter={handleFilterClick} activeButton={filter} />
      <SkillsList filter={filter} />
    </section>
  );
}
