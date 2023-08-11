import React from "react";
import { motion } from "framer-motion";

const App1 = () => {
  return (
    <div className="grid gap-1 p-20 grid-cols-3">
      <motion.img
        src="./img/image1x1.jpg"
        className="h-60 w-60"
        drag
      ></motion.img>
      <motion.img
        src="./img/image1x2.jpg"
        className="h-60 w-60"
        drag
      ></motion.img>
      <motion.img
        src="./img/image1x3.jpg"
        className="h-60 w-60"
        drag
      ></motion.img>
      <motion.img
        src="./img/image2x1.jpg"
        className="h-60 w-60"
        drag
      ></motion.img>
      <motion.img
        src="./img/image2x2.jpg"
        className="h-60 w-60"
        drag
      ></motion.img>
      <motion.img
        src="./img/image2x3.jpg"
        className="h-60 w-60"
        drag
      ></motion.img>
      <motion.img
        src="./img/image3x1.jpg"
        className="h-60 w-60"
        drag
      ></motion.img>
      <motion.img
        src="./img/image3x2.jpg"
        className="h-60 w-60"
        drag
      ></motion.img>
      <motion.img
        src="./img/image3x3.jpg"
        className="h-60 w-60"
        drag
      ></motion.img>
    </div>
  );
};

export default App1;
