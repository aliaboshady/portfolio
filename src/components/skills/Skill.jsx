import { motion } from 'framer-motion';

export default function Skill({ skill, color, index }) {
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
      className={`border-${color}-500/50 border-2 rounded-xl px-5 py-3 bg-white`}
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
