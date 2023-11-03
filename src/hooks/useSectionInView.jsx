import { useInView } from 'react-intersection-observer';
import { useActiveSection } from '../contexts/activeSectionContext';
import { useEffect } from 'react';

export default function useSectionInView(sectionName, threshold = 0.75) {
  const { ref, inView } = useInView({ threshold: threshold });
  const { setActiveSection, timeOfLastClick } = useActiveSection();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000)
      setActiveSection(sectionName);
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return ref;
}
