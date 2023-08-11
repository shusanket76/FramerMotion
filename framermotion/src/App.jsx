import React from "react";
import { motion } from "framer-motion";
const App = () => {
  return (
    <motion.h1
      className="text-center text-5xl"
      // initial={{ y: -102 }}
      animate={{ y: [0, 300, 0] }}
      transition={{ repeat: Infinity, duration: "2" }}
    >
      MY NAME IS SHUSANKET BASYAL AND I LIVE IN NEW YORK
    </motion.h1>
  );
};

export default App;
