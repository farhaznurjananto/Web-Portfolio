"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "De-Lay",
    description: "Web-based motiroting and farm management application",
    image: "images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/farhaznurjananto/De-Lay",
    previewUrl: "https://github.com/farhaznurjananto/De-Lay",
  },
  {
    id: 2,
    title: "FarmBase",
    description: "Mobile-based agricultural pest recording application",
    image: "images/projects/2.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/farhaznurjananto/FarmBase",
    previewUrl: "https://github.com/farhaznurjananto/FarmBase",
  },
];

export const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));

  return (
    <section id="project">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4">My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
