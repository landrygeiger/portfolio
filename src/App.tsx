import Experience from "./components/Experience";
import Hero from "./components/Hero";
import "./index.css";

function App() {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-xl px-10 md:px-20 lg:px-28 py-5 flex flex-col gap-12 lg:gap-20">
        <Hero />
        <Experience />
      </div>
    </div>
  );
}

export default App;
