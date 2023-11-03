import Header from './components/header/Header';
import Layout from '../src/components/Layout';
import ActiveSectionContextProvider from './contexts/activeSectionContext';

export default function App() {
  return (
    <>
      <div className="-z-10 bg-[#FBE2E3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]" />
      <div className="-z-10 bg-[#DBD7FB] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" />

      <ActiveSectionContextProvider>
        <Header />
        <Layout />
      </ActiveSectionContextProvider>
    </>
  );
}
