import { motion } from 'framer-motion';
import styled from 'styled-components/macro';

export const FeedContainer = styled(motion.div)`
  padding: 5rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 300px));
  grid-gap: 50px;
`;
