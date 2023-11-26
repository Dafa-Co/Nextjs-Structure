"use client";

import { motion, AnimatePresence, MotionProps } from "framer-motion";

import { ReactNode } from "react";

export default function Transition({
  children,
  options,
  className,
}: {
  children: ReactNode;
  options: MotionProps;
  className?: string;
}) {
  return (
    <AnimatePresence>
      <motion.div {...options} className={className}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
