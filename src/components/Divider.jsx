import { motion } from 'framer-motion';

export default function Divider() {
  return (
    <motion.div
      className="sm-block my-14 w-1 h-16 bg-gray-200 rounded-full"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
    ></motion.div>
  );
}
