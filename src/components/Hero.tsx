import { FC } from "react";
import SocialButton from "./SocialButton";

const Hero: FC = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse gap-8 items-stretch md:items-end">
      <div className="flex flex-col gap-4 flex-grow basis-0">
        <h1 className="text-6xl md:text-5xl lg:text-6xl xl:text-8xl font-lemon text-white">
          Hello!
        </h1>
        <h2 className="text-3xl md:text-2xl lg:text-4xl xl:text-5xl  text-white font-bold">
          I'm <span style={{ color: "rgb(255, 228, 94)" }}>Landry Geiger.</span>
        </h2>
        <h3 className="text-2xl md:text-xl lg:text-3xl xl:text-3xl  text-white font-bold">
          I solve problems through{" "}
          <span style={{ color: "rgb(255, 228, 94)" }}>code.</span>
        </h3>
        <div className="mt-8 flex gap-4">
          <SocialButton href="https://github.com/landrygeiger">
            GitHub
          </SocialButton>
          <SocialButton href="https://www.linkedin.com/in/landrygeiger/">
            LinkedIn
          </SocialButton>
          <SocialButton href="https://drive.google.com/file/d/10wco34wq18SrXb8XFP4viL_5huD1RbqA/view?usp=sharing">
            Resume
          </SocialButton>
        </div>
      </div>
      <div className="flex-grow basis-0 relative">
        <div className="bg-white rounded-lg flex-grow basis-0 absolute w-full h-3/4 bottom-0 -z-10"></div>
        <img src="/src/assets/headshot.png" />
      </div>
    </div>
  );
};

export default Hero;
