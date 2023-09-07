"use client";
import React, { useState, useRef } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectTag } from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "FilmHub Website",
    description: "Inspirado na Nextflix, o FilmHub é um site de filmes que usa a API do TMDB para o catálogo de filmes.",
    image: "/images/projects/project1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Vinicius-Rubia/FilmHub",
    previewUrl: "https://project-film-hub.vercel.app/",
  },
  {
    id: 2,
    title: "Galleria Photos",
    description: "Galeria de photos feito com SASS e seus recursos como: Mixins, Nestings e Parent Selector.",
    image: "/images/projects/project2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Vinicius-Rubia/Galeria-Fotos-SASS",
    previewUrl: "https://vinicius-rubia.github.io/Galeria-Fotos-SASS/",
  },
  {
    id: 3,
    title: "Splitter",
    description: "Calculador de gorjeta com validação de formulário com React-Hook-Form.",
    image: "/images/projects/project3.png",
    tag: ["All", "Em processo"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Ignite Feed",
    description: "Feed que lista posts e comentários podendo realizar comentários e ainda curtir os comentários.",
    image: "/images/projects/project4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Vinicius-Rubia/Feed-Ignite-Rockeatseat",
    previewUrl: "https://feed-ignite-rockeatseat.vercel.app/",
  },
  {
    id: 5,
    title: "Typeform",
    description: "Clone da animação do Typeform com a biblioteca framer-motion.",
    image: "/images/projects/project5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Vinicius-Rubia/Clone-Animation-Typeform",
    previewUrl: "https://clone-animation-typeform.vercel.app/",
  },
  {
    id: 6,
    title: "Lookscout",
    description: "Landing Page com componentes reutilizaveis com React-Hook-Form, Styled-Components e Radix UI.",
    image: "/images/projects/project6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Vinicius-Rubia/Lookscout",
    previewUrl: "https://lookscout.vercel.app/",
  },
];

export const ProjectsSections: React.FC = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
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
        Meus Projetos
      </h2>
      <div className="text-white flex flex-row flex-wrap justify-center items-center gap-2 py-6">
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
          name="Em processo"
          isSelected={tag === "Em processo"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12">
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
              imgUrl={project.image}
              desciption={project.description}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
