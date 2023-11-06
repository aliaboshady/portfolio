import Divider from './Divider';
import About from './about/About';
import Contact from './contact/Contact';
import Experience from './experience/Experience';
import Home from './home/Home';
import Projects from './projects/Projects';
import Skills from './skills/Skills';

export default function Layout() {
  return (
    <main className="absolute flex flex-col items-center w-full">
      <Home />
      <Divider />
      <About />
      <Divider />
      <Projects />
      <Divider />
      <Skills />
      <Divider />
      <Experience />
      <Divider />
      <Contact />
    </main>
  );
}
