import { skillsData } from '../../../data/data';
import Skill from './Skill';

export default function SkillsList({ filter }) {
  let skillsWithColor = [];

  // Getting all skills that are going to be shown

  // If "ALL", then get all skills
  if (filter === undefined || filter === 'all') {
    for (let key in skillsData) {
      let color = skillsData[key].color;
      let skills = skillsData[key].skills;

      skills.forEach((skill) => {
        const existingSkill = skillsWithColor.find(
          (obj) => obj.skill === skill
        );

        if (!existingSkill) {
          let skillObject = {
            skill: skill,
            color: color,
          };
          skillsWithColor.push(skillObject);
        }
      });
    }
  }

  // If filter is set, then get that filter's skills
  else {
    skillsData[filter].skills.forEach((skill) => {
      let skillObject = {
        skill: skill,
        color: skillsData[filter].color,
      };
      skillsWithColor.push(skillObject);
    });
  }

  return (
    <ul
      key={filter}
      className="flex flex-wrap justify-center gap-2 text-lg text-gray-800"
    >
      {skillsWithColor.map((skill, index) => (
        <Skill
          skill={skill.skill}
          color={skill.color}
          index={index}
          key={index}
        />
      ))}
    </ul>
  );
}
