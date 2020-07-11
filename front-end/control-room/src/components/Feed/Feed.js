import React from 'react';

import { AnimatePresence } from 'framer-motion';

import FeedItem from '../FeedItem/FeedItem';
import { FeedContainer } from './Feed.style';

const variants = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
  hidden: { opacity: 0 },
};

export default function Feed({ incidents = [] }) {
  return (
    <AnimatePresence>
      <FeedContainer animate='visible' initial='hidden' variants={variants}>
        {incidents.map((incident) => (
          <FeedItem key={incident.incidentId} incident={incident} />
        ))}
      </FeedContainer>
    </AnimatePresence>
  );
}
