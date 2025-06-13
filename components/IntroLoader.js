"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const hellos = ["Hello","Hola","Bonjour","नमस्ते","Ciao","こんにちは","안녕하세요","Olá","مرحبا","Привет","Hallo","Kamusta", "Tere","Ahoj","Halló","Salve"];

export default function IntroLoader({ onFinish }) {
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (index < hellos.length) {
      const timer = setTimeout(() => setIndex(index + 1), 200);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        setDone(true);
        onFinish();
      }, 400);
    }
  }, [index, onFinish]);

  return (
    <div className="w-full h-full bg-black text-white flex items-center justify-center">
      <motion.span
        key={index}
        className="text-5xl font-bold text-white"
      >
        {hellos[index]}
      </motion.span>
    </div>
  );
}