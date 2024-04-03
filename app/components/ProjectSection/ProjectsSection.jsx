"use client";
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "Arduino Sketches",
        description: "Collection of codes for Arduino Projects",
        image: "/images/projects/arduino.jpg",
        tag: ["All", "IoT"],
        gitUrl: "https://github.com/chauhannaman98/ArduinoCodes",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "IMDb API",
        description: "A Flask based REST API for IMDb",
        image: "/images/projects/imdb-api.png",
        tag: ["All", "Python"],
        gitUrl: "https://github.com/chauhannaman98/IMDb-API",
        previewUrl: "https://imdbapi.techmirtz.com/",
    },
    {
        id: 3,
        title: "Thala for a Reason",
        description: "Enter a word/number to check Thala for a reason (based on viral meme)",
        image: "/images/projects/thala.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/chauhannaman98/Thala_for_a_reason/",
        previewUrl: "https://thala.techmirtz.com/",
    },
    {
      id: 4,
      title: "Giphy Search Engine",
      description: "Based on AJAX, a search engine to find you favorite gifs",
      image: "/images/projects/giphy-search-engine.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/chauhannaman98/gif-search-engine",
      previewUrl: "https://giphy.techmirtz.com/",
    },
    {
      id: 5,
      title: "Ramcharitmanas API",
      description: "Build on FastAPI, an API for all chapter and verses of Ramcharitmanas [Under development]",
      image: "/images/projects/manas-api.png",
      tag: ["All", "Python"],
      gitUrl: "https://github.com/chauhannaman98/ramcharitmanas-api",
      previewUrl: "https://manasapi.techmirtz.com/docs",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const handleTagChange = (newTag) => {
      setTag(newTag);
    };
  
    const filteredProjects = projectsData.filter((project) =>
      project.tag.includes(tag)
    );
  
    const cardVariants = {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    };
  
    return (
      <section id="projects">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="IoT"
            isSelected={tag === "IoT"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Python"
            isSelected={tag === "Python"}
          />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </section>
    );
  };

export default ProjectsSection;