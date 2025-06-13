"use client";
import { motion, AnimatePresence } from "framer-motion";
import ScrambledText from "./TextAnimations/ScrambledText/ScrambledText";
import Link from "next/link";

const FullScreenMenu = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/95 z-50 flex flex-col justify-center items-center space-y-8 cursor-pointer"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-4 md:top-8 md:right-16 text-white text-4xl"
          >
            <svg
              fill="#ffffff"
              width="40"
              height="40"
              viewBox="-2.4 -2.4 20.80 20.80"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
              strokeWidth={0}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#CCCCCC"
                strokeWidth="0.128"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z"
                  fillRule="evenodd"
                ></path>{" "}
              </g>
            </svg>
          </button>
          <nav className="text-white text-8xl md:text-[7rem] space-y-9 md:space-y-10 text-center font-['Aalto'] flex flex-col">
            <Link href="/work">
              <div>
                <ScrambledText
                  className=""
                  radius={100}
                  duration={1.2}
                  speed={0.5}
                  scrambleChars=".:"
                >
                  work
                </ScrambledText>
              </div>
            </Link>
            <Link href="/programming-languages">
              <div>
                <ScrambledText
                  className=""
                  radius={100}
                  duration={1.2}
                  speed={0.5}
                  scrambleChars=".:"
                >
                  languages
                </ScrambledText>
              </div>
            </Link>
            <Link href="/about">
              <div>
                <ScrambledText
                  className=""
                  radius={100}
                  duration={1.2}
                  speed={0.5}
                  scrambleChars=".:"
                >
                  about
                </ScrambledText>
              </div>
            </Link>
            <Link href="/contact">
              <div>
                <ScrambledText
                  className=""
                  radius={100}
                  duration={1.2}
                  speed={0.5}
                  scrambleChars=".:"
                >
                  contact me
                </ScrambledText>
              </div>
            </Link>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullScreenMenu;
