import Divider from './Divider';
import About from './about/About';
import Home from './home/Home';

export default function Layout() {
  return (
    <main className="absolute flex flex-col items-center w-full">
      <Home />
      <Divider />
      <About />
    </main>
  );
}
