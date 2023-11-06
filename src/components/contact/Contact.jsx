import { motion } from 'framer-motion';
import useSectionInView from '../../hooks/useSectionInView';
import SectionHeading from '../SectionHeading';

export default function Contact() {
  const ref = useSectionInView('Contact');

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="scroll-mt-28 sm:mb-40 mb-20 w-[min(100%, 38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="-mt-6 text-gray-700">
        Please contact me directly at{' '}
        <a href="mailto:ali_aboshady@hotmail.com" className="underline">
          ali_aboshady@hotmail.com
        </a>{' '}
        or through this form.
      </p>

      <form className="flex flex-col mt-10">
        <input
          type="email"
          placeholder="Your email address"
          className="h-14 border-black/10 px-4 border rounded-lg"
        />
        <textarea
          placeholder="Your message"
          className="h-52 border-black/10 p-4 my-3 border rounded-lg"
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all hover:scale-110 hover:bg-black"
        >
          Send{' '}
          <span className="material-symbols-outlined group-hover:translate-x-4 text-lg transition-all">
            send
          </span>
        </button>
      </form>
    </motion.section>
  );
}
