'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: 'var(--background)' }}
    >
      <div className="text-center">
        {/* Animated name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="caveat-name text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-7xl md:text-8xl"
        >
          Mirai Cho
        </motion.h1>

        {/* Animated tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 text-xl text-zinc-600 dark:text-zinc-400 sm:text-2xl"
        >
          Full-stack Developer
        </motion.p>

        {/* Animated line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 200 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mx-auto mt-8 h-1 bg-zinc-900 dark:bg-zinc-50"
        />

        {/* Pulse dot */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mx-auto mt-8 h-3 w-3 rounded-full bg-zinc-900 dark:bg-zinc-50"
        />
      </div>
    </motion.div>
  );
}
