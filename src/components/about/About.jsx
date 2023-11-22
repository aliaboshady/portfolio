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
        I{"'"}m an innovative computer engineer driven by a relentless pursuit
        of knowledge in cutting-edge technologies. With my expertise spanning
        game, web, and app development, I have a rich portfolio demonstrating my
        talents. Not limited to just that, I bring hands-on experience in
        machine learning, deep learning, and computer vision to the table. What
        sets me apart is my dedication to continuous improvement, particularly
        in mastering software design patterns and test-driven development, which
        results in code that is highly readable, scalable, and easily adaptable.
      </p>
    </motion.section>
  );
}
