import { motion } from 'framer-motion';
import { links } from '../../../data/data';
import { useActiveSection } from '../../contexts/activeSectionContext';

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();

  function handleClick(name) {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
  }

  return (
    <motion.header className="relative z-50">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h[3.25rem] sm:w-[36rem] sm:rounded-full sm:h-[3.25rem]"
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="h-3/4 relative flex items-center justify-center"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <a
                href={link.hash}
                onClick={() => handleClick(link.name)}
                className={`hover:text-gray-950 flex items-center justify-center w-full p-3 transition-all duration-300 ${
                  link.name === activeSection ? 'text-gray-950' : ''
                }`}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="-z-10 absolute inset-0 bg-gray-200 rounded-full"
                    layoutId="activeSection"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
