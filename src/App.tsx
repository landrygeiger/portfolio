import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import "./index.css";

function App() {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-xl px-10 md:px-20 lg:px-28 pt-5 pb-10 flex flex-col gap-12 lg:gap-20">
        <Hero />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}

export default App;
