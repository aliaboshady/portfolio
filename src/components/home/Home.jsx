import Avatar from './Avatar';
import Intro from './Intro';
import Socials from './Socials';

export default function Home() {
  return (
    <section className="mb-10 max-w-[50rem] text-center">
      <Avatar />
      <Intro />
      <Socials />
    </section>
  );
}
