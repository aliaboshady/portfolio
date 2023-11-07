import Avatar from './Avatar';
import Intro from './Intro';
import Socials from './Socials';
import useSectionInView from '../../hooks/useSectionInView';

export default function Home() {
  const ref = useSectionInView('Home');

  return (
    <section
      id="home"
      ref={ref}
      className="max-w-[50rem] text-center scroll-mt-96"
    >
      <Avatar />
      <Intro />
      <Socials />
    </section>
  );
}
