import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/HAVA.png"
          title="Hava Project"
          description="The avant-garde platform where artificial intelligence converges with your unique narratives, offering a personalized and versatile AI experience. At Hava, we believe in empowering users to shape their own AI, 
          engage in meaningful conversations, and explore a burgeoning marketplace within the crypto space."
        />
        <ProjectCard
          src="/HAVA.png"
          title="Hava Project"
          description="The avant-garde platform where artificial intelligence converges with your unique narratives, offering a personalized and versatile AI experience. At Hava, we believe in empowering users to shape their own AI, 
          engage in meaningful conversations, and explore a burgeoning marketplace within the crypto space."
        />
        <ProjectCard
          src="/HAVA.png"
          title="Hava Project"
          description="The avant-garde platform where artificial intelligence converges with your unique narratives, offering a personalized and versatile AI experience. At Hava, we believe in empowering users to shape their own AI, 
          engage in meaningful conversations, and explore a burgeoning marketplace within the crypto space."
        />
      </div>
    </div>
  );
};

export default Projects;
