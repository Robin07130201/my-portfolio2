import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <motion.div
          key={technology.name}
          className="w-28 h-28"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-full h-full object-contain"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
