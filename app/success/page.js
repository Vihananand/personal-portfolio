"use client";
import RotatingText from "@/components/TextAnimations/RotatingText/RotatingText";
import { useRouter } from "next/navigation";

export default function Success() {
  const router = useRouter();
  return (
    <div className="min-h-screen w-full bg-black flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 lg:px-20 font-['Aalto'] text-white gap-10 text-center">
      <p className="text-5xl lg:text-8xl tracking-wider">
        I usually respond within 24 hours unless I’m
      </p>

      <RotatingText
        texts={[
          "hitting PRs at the gym",
          "working on a project",
          "on a vacation",
        ]}
        mainClassName="px-4 sm:px-6 md:px-8 bg-white text-black overflow-hidden py-2 sm:py-2.5 md:py-3 justify-center rounded-xl min-w-[360px] sm:min-w- md:min-w-[800px] text-5xl lg:text-8xl font-semibold text-center tracking-wider"
        staggerFrom="last"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={3000}
      />

      <button
        type="button"
        onClick={() => {
          router.push("/");
        }}
        className="text-white text-2xl lg:text-5xl tracking-wider"
      >
        <svg
          className="hover:cursor-none"
          width="4rem"
          height="4rem"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M6 12H18M18 12L13 7M18 12L13 17"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </button>
    </div>
  );
}
