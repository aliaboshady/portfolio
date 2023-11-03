import { motion } from 'framer-motion';

export default function Project({ project }) {
  const projectAnimationVariants = {
    initial: { opacity: 0.3, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      variants={projectAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group sm:mb-8 last:mb-0 mb-3"
    >
      <div className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative hover:bg-gray-200 transition-all rounded-lg">
        <div className="sm:pl-10 sm:pr-2 sm:pt-10 px-5 pt-4 pb-10 sm:max-w-[50%] sm:h-[20rem] flex flex-col h-full">
          <h3 className="text-2xl font-semibold">{project.title}</h3>

          <p className="mt-2 leading-relaxed text-gray-700">
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
          className="top-8 -right-40 absolute w-[28.25rem] transition-all rounded-t-lg shadow-2xl group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2"
          src={`../../../public/project_images/${project.imageName}`}
          alt={project.title}
        />
      </div>
    </motion.div>
  );
}
