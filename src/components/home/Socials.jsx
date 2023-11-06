import { useActiveSection } from '../../contexts/activeSectionContext';
import { IconGithub, IconLinkedIn } from '../../icons/Icons';
import { motion } from 'framer-motion';

export default function Socials() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSection();

  function handleClickContactMe(name) {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
  }

  return (
    <motion.div
      className="sm:flex-row flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <a
        onClick={() => handleClickContactMe('Contact')}
        href="#contact"
        className="px-7 hover:cursor-pointer hover:scale-110 active:scale-105 border-black/10 flex items-center gap-1 py-3 text-white transition-all bg-gray-900 border rounded-full outline-none"
      >
        Contact me here{' '}
        <span className="material-symbols-outlined pt-1">arrow_right_alt</span>
      </a>

      <a
        href="../../../data/CV.pdf"
        download="Ali Aboshady - CV.pdf"
        className="px-7 hover:cursor-pointer hover:scale-110 active:scale-105 border-black/10 flex items-center gap-1 py-3 transition-all bg-white border rounded-full outline-none"
      >
        Download CV <span className="material-symbols-outlined">download</span>
      </a>

      <div className="flex items-center justify-center gap-2">
        <IconLinkedIn className="hover:scale-[1.15] active:scale-105 border-black/10 flex items-center p-[0.8rem] transition-all bg-white border rounded-full outline-none" />

        <IconGithub className="hover:scale-[1.15] active:scale-105 border-black/10 flex items-center p-[0.65rem] transition-all bg-white border rounded-full outline-none" />
      </div>
    </motion.div>
  );
}
