'use client';

import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#c4e2f5]">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <motion.div
          className="h-16 w-16 rounded-full border-4 border-zinc-200 border-t-zinc-900"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-lg font-medium text-zinc-900"
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
}
