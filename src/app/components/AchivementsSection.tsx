"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projetos",
    value: "90",
    postfix: "+",
  },
  {
    metric: "Tecnologias",
    value: "15",
    postfix: "+",
  },
  {
    metric: "Experiência",
    value: "2",
    postfix: "+",
  },
];

export const AchivementsSection: React.FC = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:pb-16 sm:pt-0 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-col justify-center items-center gap-6 min-[425px]:gap-0 min-[425px]:flex-row min-[425px]:justify-around">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value)}
                locale="en-US"
                configs={((_, index) => {
                  return {
                    mass: 1,
                    friction: 100,
                    tension: 140 * (index + 1)
                  };
                })}
              />
              {achievement.postfix}
            </h2>
            <p className="text-base text-[#ADB7BE]">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
