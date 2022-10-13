import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Transition({ children }: { children: any }) {
  const variants = {
    in: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.75,
        delay: 0.5,
      },
    },
    out: {
      opacity: 0,
      scale: 1,
      y: 40,
      transition: {
        duration: 0.75,
      },
    },
  };
  return (
    <AnimatePresence>
      <motion.div variants={variants} animate='in' initial='out' exit='out'>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
