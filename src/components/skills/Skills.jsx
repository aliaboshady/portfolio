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
      className="max-w-[53rem] scroll-mt-24 sm:scroll-mt-48 text-center"
    >
      <SectionHeading>My Skills</SectionHeading>
      <FiltersList onSelectFilter={handleFilterClick} />
      <SkillsList filter={filter} />
    </section>
  );
}
