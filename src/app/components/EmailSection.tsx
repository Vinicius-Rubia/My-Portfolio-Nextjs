"use client";
import React from "react";
import Link from "next/link";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import Image from "next/image";
// import { motion } from "framer-motion";

export const EmailSection: React.FC = () => {
  // const [emailSubmitted, setEmailSubmitted] = useState(false);

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  //   const data = {
  //     email: e.target.email.value,
  //     subject: e.target.subject.value,
  //     message: e.target.message.value,
  //   };
  //   const JSONdata = JSON.stringify(data);
  //   const endpoint = "api/email";

  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSONdata,
  //   };

  //   const response = await fetch(endpoint, options);
  //   const resData = await response.json();
  //   console.log(resData);

  //   if (response.status === 200) {
  //     console.log("Mensagem enviada.");
  //     setEmailSubmitted(true);
  //   }
  // };

  return (
    <section
      id="contact"
      className="grid lg:grid-cols-2 my-12 md:my-12 pb-32 sm:py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-2/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Vamos nos conectar
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Estou em busca de novos horizontes, minha caixa de entrada está sempre
          aberta. Se você tiver alguma dúvida ou apenas quiser dizer oi, farei o
          possível para entrar em contato com você!
        </p>
        <div className="socials flex flex-row gap-5">
          <Link href="https://github.com/Vinicius-Rubia" target="_blank">
            <BsGithub className="text-white text-4xl hover:text-white/60" />
          </Link>
          <Link href="https://www.linkedin.com/in/vinicius-rubia-149ab0213/" target="_blank">
            <BsLinkedin className="text-white text-4xl hover:text-white/60" />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center md:justify-normal mt-14">
        {/* <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Seu email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9ca2a969] outline-none focus:border-primary-700 text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="seuemail@exemplo.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Assunto
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9ca2a969] outline-none focus:border-primary-700 text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Qual é o assunto que deseja tratar?"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Mensagem
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9ca2a969] outline-none focus:border-primary-700 text-gray-100 text-sm rounded-lg block w-full p-2.5 resize-none"
              placeholder="Digite aqui sua mensagem..."
            />
          </div>

          <button
            type="submit"
            className="bg-primary-700 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Enviar Mensagem
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email enviado com sucesso!
            </p>
          )}
        </form> */}

        <Image src="/images/astronaut.png" className="hidden md:block w-[160px]" style={{ WebkitBoxReflect: "right 340px" }} alt="Astronauta" width={300} height={300} />
        <Link target="_blank" href="https://api.whatsapp.com/send/?phone=5511910412912" className="bg-green-700 hover:bg-green-600 w-3/4 ml-0 h-12 px-8 rounded-md md:w-[50%] sm:ml-0 text-white group justify-center text-2xl font-bold flex items-center" style={{ boxShadow: "0px 0px 4px 12px rgba(0, 167, 57, 0.247)" }}>
          <BsWhatsapp />
        </Link>
      </div>
    </section>
  );
};
