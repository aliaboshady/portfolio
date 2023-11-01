import { motion } from 'framer-motion';

export default function Avatar() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="../../public/avatar.jpg"
            alt="Ali Aboshady"
            className="h-32 w-32 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
          />
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.3,
            type: 'spring',
            stiffness: 200,
          }}
        >
          <span className="absolute bottom-0 right-0 text-4xl">👋</span>
        </motion.div>
      </div>
    </div>
  );
}
