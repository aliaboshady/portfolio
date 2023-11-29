import { motion } from 'framer-motion';

export default function Project({ project }) {
  const projectAnimationVariants = {
    initial: { opacity: 0.3, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  };

  return (
    <a href={project.link} target="_blank" rel="noreferrer">
      <motion.div
        variants={projectAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group sm:mb-8 last:mb-0 sm:mx-0 mx-2 mb-3"
      >
        <div className="bg-gray-100 h-[25rem] max-w-[40rem] border border-black/5 overflow-hidden sm:pr-8 relative hover:bg-gray-200 transition-all rounded-lg -z-20 shadow-sm">
          <div className="sm:pl-10 sm:pr-2 sm:pt-10 px-5 pt-4 pb-10 sm:max-w-[58%] sm:h-[20rem] flex flex-col h-full">
            <h3 className="text-2xl font-semibold">{project.title}</h3>

            <p className="my-5 leading-relaxed text-gray-700 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,1)]">
              {project.description}
            </p>

            <ul className="sm:mt-auto flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag, index) => (
                <li
                  className="bg-black/70 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <img
            className="top-20 sm:-right-[14rem] -right-28 absolute w-[32rem] transition-all duration-200 rounded shadow-2xl group-hover:shadow-[0_100px_100px_-15px_rgba(0,0,0,0.3)] group-hover:scale-[1.15] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 -z-10 opacity-40 sm:opacity-100"
            src={`/project_images/${project.imageName}`}
            alt={project.title}
          />
        </div>
      </motion.div>
    </a>
  );
}
