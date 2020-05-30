import React from 'react';
import { motion } from 'framer-motion';

export const animationConfig = {
  slideUp: 30
};

export function WithAnimation(Wrapped) {
  const { slide = 0, slideUp = 0 } = animationConfig;
  return () => (
    <motion.div
      exit={{ opacity: 0, x: slide, y: slideUp }}
      initial={{ opacity: 0, x: slide, y: slideUp }}
      animate={{ opacity: 1, x: 0, y: 0 }}
    >
      <Wrapped />
    </motion.div>
  );
}
