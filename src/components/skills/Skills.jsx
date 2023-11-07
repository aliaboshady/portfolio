import { motion } from 'framer-motion';
import { skillsData } from '../../../data/data';
import useSectionInView from '../../hooks/useSectionInView';
import SectionHeading from '../SectionHeading';

export default function Skills() {
  const ref = useSectionInView('Skills');
  const delayBetweenEachSkill = 0.05;
  const delayBeforeAnimationStart = 0.25;

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="max-w-[53rem] scroll-mt-24 sm:scroll-mt-48 text-center"
    >
      <SectionHeading>My Skills</SectionHeading>

      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="border-black/10 rounded-xl px-5 py-3 bg-white border"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{
              delay: delayBetweenEachSkill * index + delayBeforeAnimationStart,
            }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
