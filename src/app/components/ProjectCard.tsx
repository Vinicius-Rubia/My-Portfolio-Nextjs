import React from "react";
import { BsGithub } from "react-icons/bs";
import { CiShare1 } from "react-icons/ci";
import Link from "next/link";

interface IProjectCard {
  imgUrl: string;
  title: string;
  desciption: string;
  gitUrl: string;
  previewUrl: string;
}

export const ProjectCard: React.FC<IProjectCard> = ({
  imgUrl,
  title,
  desciption,
  gitUrl,
  previewUrl
}) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center center" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link href={gitUrl} className="h-14 w-14 mr-2 border-2 relative rounded-full text-[#ADB7BE] border-[#ADB7BE] hover:border-white hover:text-white" target="_blank">
            <BsGithub className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" />
          </Link>
          <Link href={previewUrl} className="h-14 w-14 border-2 relative rounded-full text-[#ADB7BE] border-[#ADB7BE] hover:border-white hover:text-white" target="_blank">
            <CiShare1 className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] md:line-clamp-2">{desciption}</p>
      </div>
    </div>
  );
};
