import { motion } from 'framer-motion';

export default function Skill({ skill, index }) {
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
  );
}
