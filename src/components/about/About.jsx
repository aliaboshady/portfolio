import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import useSectionInView from '../../hooks/useSectionInView';

export default function About() {
  const ref = useSectionInView('About');

  return (
    <motion.section
      id="about"
      ref={ref}
      className="mx-5 max-w-[45rem] text-center leading-8 scroll-mt-24 sm:scroll-mt-48"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.35 }}
    >
      <SectionHeading className="mb-8 text-3xl font-medium capitalize">
        About me
      </SectionHeading>

      <p>
        Hi, I{"'"}m Ali. I{"'"}m a computer engineer who{"'"}s passionate about
        making video games. I{"'"}ve been working with Unity and Unreal for a
        few years, mainly focusing on learning the engine and how to make games.
        Now, I{"'"}m learning software design patterns and test driven
        development to help me improve code readability, scalability, and
        refactoring. I{"'"}m also interested in artificial intelligence, which
        includes machine learning, deep learning, computer vision, and so on.
        And I actually used some of these concepts in games, like in Flappy Bird
        that you{"'"}ll see in the {"'"}Recent Work{"'"} section. Feel free to
        hit me up with questions or comments, or just to chat!
      </p>
    </motion.section>
  );
}
