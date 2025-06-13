"use client"

import Link from "next/link";
import { useState } from "react";
import FuzzyText from "@/components/TextAnimations/FuzzyText/FuzzyText";
import FullScreenMenu from "./FullScreenMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-16 py-6">
        <Link href="/">
          <FuzzyText
            fontFamily="Aalto"
            fontSize="clamp(2.8rem, 6vw, 4.5rem)"
            className="text-white"
          >
            Portfolio
          </FuzzyText>
        </Link>

        <div onClick={() => setMenuOpen(true)} className="">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="sm:w-10 sm:h-10 md:w-12 md:h-12"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </div>
      </nav>

      <FullScreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
