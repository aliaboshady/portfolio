import useSectionInView from '../../hooks/useSectionInView';
import SectionHeading from '../SectionHeading';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '../../../data/data';

export default function Experience() {
  const ref = useSectionInView('Experience', 0.5);

  const contentStyle = {
    background: '#F3F4F5',
    boxShadow: 'none',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    textAlign: 'left',
    padding: '1.3rem 2rem',
  };

  const contentArrowStyle = {
    borderRight: '0.4rem solid #9CA3AF',
  };

  const iconStyle = {
    background: 'white',
    fontSize: '1.5rem',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  };

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>

      <VerticalTimeline lineColor="#E5E7EB">
        {experiencesData.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            date={experience.date}
            icon={experience.icon}
            iconStyle={iconStyle}
          >
            <h3 className="font-bold capitalize">{experience.title}</h3>
            <p className="!mt-0 font-normal">{experience.location}</p>
            <p className="!mt-1 !font-normal text-gray-700">
              {experience.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
