"use client";

import { useEffect } from "react";

import { usePathname } from "next/navigation";

export default function DotCursor() {
  const pathname = usePathname();

  useEffect(() => {
    const dot = document.querySelector("[data-dot-cursor]");
    if (!dot) return;

    const move = (e) => {
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    };

    const handleHoverIn = () => {
      dot.style.transform = "translate(-50%, -50%) scale(1.5)";
    };

    const handleHoverOut = () => {
      dot.style.transform = "translate(-50%, -50%) scale(1)";
    };

    window.addEventListener("mousemove", move);

    const hoverTargets = document.querySelectorAll(
      "a, button, [role='button'], svg"
    );
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverIn);
      el.addEventListener("mouseleave", handleHoverOut);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverIn);
        el.removeEventListener("mouseleave", handleHoverOut);
      });
    };
  }, [pathname]);

  return (
    <div
      data-dot-cursor
      className="w-16 h-16 fixed left-0 top-0 rounded-full bg-white mix-blend-difference pointer-events-none z-50 transition-transform duration-300 ease-out hidden lg:block"
      style={{ transform: "translate(-50%, -50%) scale(1)" }}
    />
  );
}
