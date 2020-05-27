import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

export const FeedContainer = styled(motion.div)`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 300px));
  grid-gap: 50px;
`;
