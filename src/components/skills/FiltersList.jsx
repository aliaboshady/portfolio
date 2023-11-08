import FilterButton from './FilterButton';

export default function FiltersList({ onSelectFilter }) {
  return (
    <div className="w-fit flex flex-wrap justify-center gap-2 mb-10">
      <FilterButton onClick={onSelectFilter}>All</FilterButton>

      <FilterButton onClick={onSelectFilter} color="red">
        Languages
      </FilterButton>

      <FilterButton onClick={onSelectFilter} color="blue">
        Web Dev
      </FilterButton>

      <FilterButton onClick={onSelectFilter} color="yellow">
        Game Dev
      </FilterButton>

      <FilterButton onClick={onSelectFilter} color="gray">
        Artificial Intelligence
      </FilterButton>

      <FilterButton onClick={onSelectFilter} color="green">
        Backend
      </FilterButton>

      <FilterButton onClick={onSelectFilter} color="orange">
        Version Control
      </FilterButton>

      <FilterButton onClick={onSelectFilter} color="pink">
        Programming Concepts
      </FilterButton>
    </div>
  );
}
