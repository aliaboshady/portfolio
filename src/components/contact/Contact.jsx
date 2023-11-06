import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import useSectionInView from '../../hooks/useSectionInView';
import SectionHeading from '../SectionHeading';
import emailjs from '@emailjs/browser';
import SubmitButton from './SubmitButton';
import toast from 'react-hot-toast';

export default function Contact() {
  const serviceID = 'service_dghdb8p';
  const templateID_ToMe = 'template_99iyvin';
  const templateID_ToFormSender = 'template_bv463j9';
  const publicKey = 'sMnYF7E84nMTIwjWH';

  const refSection = useSectionInView('Contact');
  const refForm = useRef();
  const [submittingForm, setSubmittingForm] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmittingForm(true);

    // Send to me
    emailjs
      .sendForm(serviceID, templateID_ToMe, refForm.current, publicKey)
      .then(
        (result) => {
          toast.success('Form Submitted!');
          setSubmittingForm(false);
        },
        (error) => {
          toast.error('There was a problem submitting. Please try again.');
          setSubmittingForm(false);
        }
      );

    //Send to form submitter
    emailjs.sendForm(
      serviceID,
      templateID_ToFormSender,
      refForm.current,
      publicKey
    );
  }

  return (
    <motion.section
      id="contact"
      ref={refSection}
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

      <form
        ref={refForm}
        className="flex flex-col mt-10"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your full name"
          required
          maxLength={500}
          disabled={submittingForm}
          className="h-14 border-black/10 px-4 mb-3 border rounded-lg"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your email address"
          required
          maxLength={500}
          disabled={submittingForm}
          className="h-14 border-black/10 px-4 border rounded-lg"
        />
        <textarea
          name="message"
          placeholder="Your message"
          required
          maxLength={2000}
          disabled={submittingForm}
          className="h-52 border-black/10 p-4 my-3 border rounded-lg"
        />

        <SubmitButton submittingForm={submittingForm} />
      </form>
    </motion.section>
  );
}