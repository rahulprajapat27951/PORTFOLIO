
// Portfolio
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CurtainTransition from "./components/CurtainTransition";
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

      <footer className="border-t border-slate-800 py-6 text-center text-sm text-slate-400">
        © 2026 Rahul Prajapat. All rights reserved.
      </footer>
    </div>
   </CurtainTransition>
  );
}


export default App;
