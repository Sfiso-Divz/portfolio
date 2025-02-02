import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Portfolio</title>
        </Head>

        <Navbar/>
        <Main />
        <About />
        <Skills />
        <Contact />
      </div>
    </>
   
  );
}
