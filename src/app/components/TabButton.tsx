import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0},
  active: { width: "100%"},
}

interface ITabButton {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

export const TabButton: React.FC<ITabButton> = ({ active, children, selectTab }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-2"
      ></motion.div>
    </button>
  );
};
