import ExperienceList from "./components/ExperienceList";
import Hero from "./components/Hero";
import { JOBS, PROJECTS } from "./content";
import "./index.css";

function App() {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-xl px-10 md:px-20 lg:px-28 pt-5 pb-10 flex flex-col gap-12 lg:gap-20">
        <Hero />
        <ExperienceList sectionTitle="Experience" experiences={JOBS} />
        <ExperienceList sectionTitle="Projects" experiences={PROJECTS} />
      </div>
    </div>
  );
}

export default App;
