import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <motion.div
      className="px-4 mt-4 mb-10 sm:text-4xl !leading-[1.5] text-2xl"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span>Hi, I{"'"}m </span>
      <span className="font-bold">Ali Aboshady. </span>
      <span>I enjoy building web apps using </span>
      <span className="font-bold underline">React. </span>
    </motion.div>
  );
}
