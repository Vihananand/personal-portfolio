"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import DotCursor from "@/components/DotCursor";
import IntroLoader from "@/components/IntroLoader";

export default function ClientWrapper({ children }) {
  const [showLoader, setShowLoader] = useState(true);

  return (
    <div className={showLoader ? "overflow-hidden" : ""}>
      <DotCursor />
      
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: showLoader ? 0 : "-100%",
          opacity: showLoader ? 1 : 0
        }}
        transition={{ 
          y: {
            duration: 1.5, 
            ease: [0.33, 1, 0.68, 1],
            delay: showLoader ? 0 : 0.2
          },
          opacity: {
            duration: 1.2,
            ease: [0.4, 0, 0.2, 1],
            delay: showLoader ? 0 : 0.6
          }
        }}
        className="fixed inset-0 z-[999]"
      >
        {showLoader && <IntroLoader onFinish={() => setShowLoader(false)} />}
      </motion.div>
      
      <div className="min-h-screen">
        {children}
      </div>
    </div>
  );
}