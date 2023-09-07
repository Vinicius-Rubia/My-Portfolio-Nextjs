"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

export const HeroSection: React.FC = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Olá, eu sou{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Vinicius",
                1000,
                "Dev Web",
                1000,
                "Dev Front End",
                1000,
                "Programador",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Nos bastidores do código, encontro a poesia da tecnologia.
          </p>
          <div className="grid min-[425px]:flex items-center">
            <Link href="#contact" className="px-6 py-3 w-full h-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:from-secondary-500 hover:via-primary-500 hover:to-blue-500 text-white">
              Fale comigo
            </Link>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3 min-[425px]:mt-0">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Baixar CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }} className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden mt-5 md:mt-0">
            <Image
              src="/images/hero-image.png"
              alt="Hero Image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
      <p className="text-[#ADB7BE] text-base text-center sm:text-lg mb-6 lg:text-xl pt-20 max-w-[1200px] mx-auto">"Na imensidão do código, encontro a reflexão da complexidade humana, onde cada linha é um pensamento, cada função uma decisão e cada projeto uma jornada rumo ao infinito da inovação."</p>
    </section>
  );
};
