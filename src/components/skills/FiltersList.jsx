import { skillsData } from '../../../data/data';
import FilterButton from './FilterButton';

export default function FiltersList({ onSelectFilter, activeButton }) {
  let allFilters = [];

  for (let key in skillsData) {
    const filter = {
      name: key
        .split('_')
        .join(' ')
        .replace(/\b\w/g, (match) => match.toUpperCase()),
      color: skillsData[key].color,
    };

    allFilters.push(filter);
  }

  return (
    <div className="w-fit flex flex-wrap justify-center gap-3 mx-2 mb-10">
      <FilterButton activeButton={activeButton} onClick={onSelectFilter}>
        All
      </FilterButton>

      {allFilters.map((filter) => (
        <FilterButton
          key={filter.name}
          activeButton={activeButton}
          onClick={onSelectFilter}
          // color={filter.color}
        >
          {filter.name}
        </FilterButton>
      ))}
    </div>
  );
}
