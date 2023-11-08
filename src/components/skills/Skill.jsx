import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Skill({ skill, color, index, inView }) {
  const [hasAnimated, setHasAnimated] = useState(false);
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
      animate={!inView && !hasAnimated ? 'initial' : 'animate'}
      onAnimationComplete={(animationName) => {
        if (animationName === 'animate') setHasAnimated(true);
      }}
      transition={{
        delay: delayBetweenEachSkill * index + delayBeforeAnimationStart,
      }}
    >
      {skill}
    </motion.li>
  );
}
