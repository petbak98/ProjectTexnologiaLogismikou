import React from 'react';
import { motion } from 'framer-motion';

export function WithAnimation(Wrapped) {
  const { slide = 0, slideUp = 0 } = animationConfig;
  return (props) => (
    <motion.div
      exit={{ opacity: 0, x: slide, y: slideUp }}
      initial={{ opacity: 0, x: slide, y: slideUp }}
      animate={{ opacity: 1, x: 0, y: 0 }}
    >
      <Wrapped {...props} />
    </motion.div>
  );
}

export const animationConfig = {
  slideUp: 30
};
