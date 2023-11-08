import { skillsData } from '../../../data/data';
import Skill from './Skill';

export default function SkillsList({ filter }) {
  return (
    <ul
      key={filter}
      className="flex flex-wrap justify-center gap-2 text-lg text-gray-800"
    >
      {skillsData.map((skill, index) => (
        <Skill skill={skill} index={index} key={index} />
      ))}
    </ul>
  );
}
