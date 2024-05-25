import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import SideNav from "./components/SideNav";
import Technologies from "./components/Technologies";
import { IoLogoWhatsapp } from "react-icons/io";
import { TbCircleArrowRightFilled } from "react-icons/tb";

function App() {
  const [sideOpen, setSideOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const whatsapp = () => {
    const phoneNumber = "+94761522239";
    const message = encodeURIComponent(
      "Could you please provide me with more insights into the workings of the your team?"
    );
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(whatsappLink, "_blank");
  };

  return loading ? (
    <div className="flex w-full h-screen justify-center items-center bg-black">
      <img src="pre.gif" alt="preloader" />
    </div>
  ) : (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed -z-10 top-0">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      {!sideOpen && (
        <TbCircleArrowRightFilled
          className="text-white text-5xl fixed -left-5 hover:left-0 transition-all top-[50vh] z-50 cursor-pointer"
          onClick={() => setSideOpen(true)}
        />
      )}
      {sideOpen && <SideNav setSideOpen={setSideOpen} />}
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Project />
        <Contact />
      </div>
      <a
        href="#"
        onClick={whatsapp}
        className="fixed cursor-pointer bottom-8 right-8 anim text-5xl"
      >
        <IoLogoWhatsapp className="hover:scale-110" />
      </a>
    </div>
  );
}

export default App;
