"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="py-20 relative z-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="text-base md:text-lg text-text-medium font-normal tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Integrated Marketing × Brand Strategy × Visual Design
        </motion.p>
      </motion.div>
    </section>
  );
}
