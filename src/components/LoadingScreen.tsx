"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Don't show if already visited in this session
    const seen = sessionStorage.getItem("portfolio-loaded");
    if (seen) {
      setVisible(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            sessionStorage.setItem("portfolio-loaded", "1");
          }, 400);
          return 100;
        }
        return p + Math.random() * 12 + 4;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Background orbs */}
          <div className="orb w-96 h-96 bg-brand-blue/20" style={{ top: "20%", left: "10%" }} />
          <div className="orb w-72 h-72 bg-brand-violet/20" style={{ bottom: "20%", right: "10%" }} />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex flex-col items-center gap-8"
          >
            <div className="text-center">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="font-mono-custom text-xs text-brand-cyan tracking-[0.3em] uppercase mb-3"
              >
                Loading Portfolio
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-display text-4xl font-bold gradient-text-violet"
              >
                {"<Munna />"}
              </motion.h1>
            </div>

            {/* Progress bar */}
            <div className="w-48 h-px bg-brand-blue/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: `${Math.min(progress, 100)}%`,
                  background: "linear-gradient(90deg, #7C3AED, #4F8EF7, #00FFC8)",
                  transition: "width 0.1s ease",
                }}
              />
            </div>

            <motion.p
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="font-mono-custom text-[10px] text-muted tracking-widest"
            >
              {Math.min(Math.floor(progress), 100)}%
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
