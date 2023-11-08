import FilterButton from './FilterButton';

export default function FiltersList({ onSelectFilter, activeButton }) {
  return (
    <div className="w-fit flex flex-wrap justify-center gap-3 mx-2 mb-10">
      <FilterButton activeButton={activeButton} onClick={onSelectFilter}>
        All
      </FilterButton>

      <FilterButton
        activeButton={activeButton}
        onClick={onSelectFilter}
        color="red"
      >
        Languages
      </FilterButton>

      <FilterButton
        activeButton={activeButton}
        onClick={onSelectFilter}
        color="blue"
      >
        Front End
      </FilterButton>

      <FilterButton
        activeButton={activeButton}
        onClick={onSelectFilter}
        color="green"
      >
        Back End
      </FilterButton>

      <FilterButton
        activeButton={activeButton}
        onClick={onSelectFilter}
        color="gray"
      >
        Artificial Intelligence
      </FilterButton>

      <FilterButton
        activeButton={activeButton}
        onClick={onSelectFilter}
        color="yellow"
      >
        Game Dev
      </FilterButton>

      <FilterButton
        activeButton={activeButton}
        onClick={onSelectFilter}
        color="orange"
      >
        Version Control
      </FilterButton>

      <FilterButton
        activeButton={activeButton}
        onClick={onSelectFilter}
        color="pink"
      >
        Programming Concepts
      </FilterButton>
    </div>
  );
}
