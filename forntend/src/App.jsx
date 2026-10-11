import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CurtainTransition from "./components/CurtainTransition";
import Footer from "./components/Footer";
import ThemeChanger from "./components/ThemeChanger";

function App() {
  return (
    <CurtainTransition>
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Footer />
        <ThemeChanger />
      </div>
    </CurtainTransition>
  );
}

export default App;