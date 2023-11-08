import { skillsData } from '../../../data/data';
import Skill from './Skill';

export default function SkillsList({ filter }) {
  let allSkillsNoDuplicates = [];

  if (filter === undefined || filter === 'all') {
    const allSkillsArrays = Object.values(skillsData);
    const allSkills = allSkillsArrays.reduce(
      (result, currentArray) => result.concat(currentArray),
      []
    );
    allSkillsNoDuplicates = [...new Set(allSkills)];
  } else {
    allSkillsNoDuplicates = skillsData[filter];
  }

  return (
    <ul
      key={filter}
      className="flex flex-wrap justify-center gap-2 text-lg text-gray-800"
    >
      {allSkillsNoDuplicates.map((skill, index) => (
        <Skill skill={skill} index={index} key={index} />
      ))}
    </ul>
  );
}
