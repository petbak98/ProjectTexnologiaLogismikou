import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import styled from 'styled-components/macro';

const StarsContainer = styled.div`
  display: flex;
  .star {
    font-size: 13px !important;
  }
`;

function Stars({ startsCount }) {
  const stars = [];
  for (let i = 0; i < 5; i = +1) {
    if (i < startsCount) {
      stars.push(<StarIcon key={i} className="star" />);
    } else {
      stars.push(<StarBorderIcon key={i} className="star" />);
    }
  }
  return <StarsContainer>{stars}</StarsContainer>;
}

export default Stars;
