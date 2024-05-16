"use client";

import {ReactNode} from "react";

import {motion, AnimatePresence} from "framer-motion";

type Props = Readonly<{children: ReactNode}>;

export default function TransitionPage({children}: Props) {
  return (
    <AnimatePresence>
      <motion.section initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, y: 20}}>
        {children}
      </motion.section>
    </AnimatePresence>
  );
}
