"use client";
import Image from "next/image";
import React, { useTransition, useState } from "react";
import { FaReact, FaPython, FaSass, FaHtml5, FaCss3 } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTypescript, BiLogoRedux, BiLogoPostgresql, BiLogoJavascript } from "react-icons/bi";
import { BsFillDatabaseFill, BsBootstrapFill, BsGit, BsGithub } from "react-icons/bs";
import { SiSelenium, SiTailwindcss } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { TabButton } from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <>
        <li className="flex flex-col text-center border-b border-b-purple-700/40 pb-5 before:hidden items-center gap-2 min-[425px]:border-none min-[425px]:flex-row min-[425px]:text-start min-[425px]:pb-0 min-[425px]:before:block before:w-1 before:h-1 before:bg-purple-700 before:rounded-full">
          React.js / Next.js / TypeScript / Redux
          <div className="flex gap-2">
            <FaReact className="text-cyan-400" />
            <TbBrandNextjs />
            <BiLogoTypescript className="text-blue-400" />
            <BiLogoRedux className="text-purple-400" />
          </div>
        </li>
        <li className="flex flex-col text-center border-b border-b-purple-700/40 pb-5 before:hidden items-center gap-2 min-[425px]:border-none min-[425px]:flex-row min-[425px]:text-start min-[425px]:pb-0 min-[425px]:before:block before:w-[5px] before:h-[5px] before:bg-purple-700 before:rounded-full">
          Python / Selenium
          <div className="flex gap-2">
            <FaPython className="text-yellow-400" />
            <SiSelenium className="text-green-400" />
          </div>
        </li>
        <li className="flex flex-col text-center border-b border-b-purple-700/40 pb-5 before:hidden items-center gap-2 min-[425px]:border-none min-[425px]:flex-row min-[425px]:text-start min-[425px]:pb-0 min-[425px]:before:block before:w-[6px] before:h-[6px] before:bg-purple-700 before:rounded-full">
          MySQL / SQL Server / PostgreSQL
          <div className="flex gap-2">
            <GrMysql className="text-blue-400" />
            <BsFillDatabaseFill className="text-yellow-400" />
            <BiLogoPostgresql className="text-blue-400" />
          </div>
        </li>
        <li className="flex flex-col text-center border-b border-b-purple-700/40 pb-5 before:hidden items-center gap-2 min-[425px]:border-none min-[425px]:flex-row min-[425px]:text-start min-[425px]:pb-0 min-[425px]:before:block before:w-[7px] before:h-[7px] before:bg-purple-700 before:rounded-full">
          SASS / Tailwind CSS / Bootstrap
          <div className="flex gap-2">
            <FaSass className="text-pink-400" />
            <SiTailwindcss className="text-cyan-400" />
            <BsBootstrapFill className="text-purple-400" />
          </div>
        </li>
        <li className="flex flex-col text-center border-b border-b-purple-700/40 pb-5 before:hidden items-center gap-2 min-[425px]:border-none min-[425px]:flex-row min-[425px]:text-start min-[425px]:pb-0 min-[425px]:before:block before:w-[8px] before:h-[8px] before:bg-purple-700 before:rounded-full">
          Git / GitHub
          <div className="flex gap-2">
            <BsGit className="text-orange-500" />
            <BsGithub />
          </div>
        </li>
        <li className="flex flex-col text-center border-b border-b-purple-700/40 pb-5 before:hidden items-center gap-2 min-[425px]:border-none min-[425px]:flex-row min-[425px]:text-start min-[425px]:pb-0 min-[425px]:before:block before:w-[9px] before:h-[9px] before:bg-purple-700 before:rounded-full">
          HTML 5 / CSS 3 / JavaScript
          <div className="flex gap-2">
            <FaHtml5 className="text-orange-500" />
            <FaCss3 className="text-blue-400" />
            <BiLogoJavascript className="text-yellow-400" />
          </div>
        </li>
      </>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <>
        <li className="flex flex-col text-center before:hidden border-b border-b-purple-700/40 pb-5 items-center gap-2 before:w-1 before:h-1 before:bg-purple-700 before:rounded-full min-[520px]:flex-row min-[520px]:text-start min-[520px]:before:block min-[520px]:border-none min-[520px]:pb-0">
          <p>Análise e Desenvolvimento de Sistemas{" "}
            <span className="text-xs">(Mai, 2022 - Dez, 2024)</span><br />
            <span className="text-xs ml-2">
              Faculdade Unicesumar - <strong className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 via-secondary-400 to-secondary-500">Cursando</strong>
            </span>
          </p>
          
        </li>
        <li className="flex flex-col text-center before:hidden border-b border-b-purple-700/40 pb-5 items-center gap-2 before:w-[5px] before:h-[5px] before:bg-purple-700 before:rounded-full min-[520px]:flex-row min-[520px]:text-start min-[520px]:before:block min-[520px]:border-none min-[520px]:pb-0">
          <p>Técnico, Desenvolvimento De Sistemas{" "}
            <span className="text-xs">(Ago, 2020 - Dez, 2021)</span><br />
            <span className="text-xs ml-2">
              Etec Dr. Emílio Hernandez Aguilar - <strong className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500">Concluído</strong>
            </span>
          </p>
        </li>
        <li className="flex flex-col text-center before:hidden border-b border-b-purple-700/40 pb-5 items-center gap-2 before:w-[6px] before:h-[6px] before:bg-purple-700 before:rounded-full min-[520px]:flex-row min-[520px]:text-start min-[520px]:before:block min-[520px]:border-none min-[520px]:pb-0">
          <p>Ensino Médio{" "}
            <span className="text-xs">(Término - Dez, 2021)</span><br />
            <span className="text-xs ml-2">
              E.E Profª Lydia Scarlet Walker - <strong className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500">Concluído</strong>
            </span>
          </p>
        </li>
      </>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <>
        <li className="flex flex-col text-center before:hidden border-b border-b-purple-700/40 pb-5 items-center gap-2 before:w-1 before:h-1 before:bg-purple-700 before:rounded-full min-[520px]:flex-row min-[520px]:text-start min-[520px]:before:block min-[520px]:border-none min-[520px]:pb-0">
          <p>Dev Front-end - Estagiário{" "}
            <span className="text-xs">(4 meses)</span><br />
            <span className="text-xs ml-2">
              Empresa - <strong className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 via-secondary-400 to-secondary-500">Lamp Comunicação</strong>
            </span>
          </p>
        </li>
        <li className="flex flex-col text-center before:hidden border-b border-b-purple-700/40 pb-5 items-center gap-2 before:w-[5px] before:h-[5px] before:bg-purple-700 before:rounded-full min-[520px]:flex-row min-[520px]:text-start min-[520px]:before:block min-[520px]:border-none min-[520px]:pb-0">
          <p>Dev Front-end - Estagiário{" "}
            <span className="text-xs">(Trabalho Atual)</span><br />
            <span className="text-xs ml-2">
              Empresa - <strong className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500">Negocie Online</strong>
            </span>
          </p>
        </li>
      </>
    ),
  },
];

export const AboutSection: React.FC = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="lg:grid lg:grid-cols-2 gap-8 pt-0 pb-8 items-stretch px-4 lg:pb-16 xl:px-16">
        <Image
          className="mx-auto hidden lg:block"
          src="/images/about-image.jpg"
          width={500}
          height={500}
          alt="Illustration"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mim</h2>
          <p className="text-base lg:text-lg">
            Acredito no poder transformador da tecnologia e em sua constante
            evolução ao longo dos anos, com a emergência de novas linguagens de
            programação e o aprimoramento do desempenho tecnológico. Como{" "}
            <strong className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500">Desenvolvedor Web Front-end</strong>, busco expandir minha expertise para o
            campo <strong className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 via-secondary-400 to-secondary-500">FullStack</strong>, refletindo meu compromisso com a excelência e a
            adaptação às demandas do mercado de tecnologia.
          </p>
          <div className="flex flex-row gap-3 mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Habilidades
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Educação
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experiência
            </TabButton>
          </div>
          <div className="mt-8">
            <ul className="grid gap-5">
              {TAB_DATA.find((t) => t.id === tab)!.content}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
