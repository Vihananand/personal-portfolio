"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function DotCursor() {
  const pathname = usePathname();

  useEffect(() => {
    const dot = document.querySelector("[data-dot-cursor]");
    if (!dot) return;

    const move = ({ clientX: x, clientY: y }) => {
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
    };

    const scaleDot = (scale) =>
      (dot.style.transform = `translate(-50%, -50%) scale(${scale})`);

    const handleHoverIn = () => scaleDot(1.5);
    const handleHoverOut = () => scaleDot(1);

    const hoverTargets = document.querySelectorAll(
      "a, button, [role='button'], svg"
    );

    window.addEventListener("mousemove", move);
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
      className="w-12 h-12 fixed left-0 top-0 rounded-full bg-white mix-blend-difference pointer-events-none z-50 transition-transform duration-300 ease-out hidden lg:block"
      style={{ transform: "translate(-50%, -50%) scale(1)" }}
    />
  );
}
