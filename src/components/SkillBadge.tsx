'use client';

import { motion } from 'framer-motion';

interface SkillBadgeProps {
  skill: string;
  index: number;
}

export default function SkillBadge({ skill, index }: SkillBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-900 hover:text-zinc-50 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-zinc-900"
    >
      {skill}
    </motion.span>
  );
}
