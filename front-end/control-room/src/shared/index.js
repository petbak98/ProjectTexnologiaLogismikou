import React from 'react';
import styled from 'styled-components/macro';

import { ReactComponent as Policeman } from '../assets/icons/patrol.svg';
import { ReactComponent as Firetrack } from '../assets/icons/firetruck.svg';
import theme from '../config/theme';

const AvatarWrapper = styled.div`
  opacity: 0.9;
  border-radius: 600px;
  box-shadow: ${theme.shadows[5]};
  height: 4rem;
  width: 4rem;
  padding: 5px;
  border: 2px solid ${theme.palette.primary.main};
  background: #fff;
  .avatar {
    width: 100%;
    height: 100%;
  }
`;

function Avatar({ id }) {
  const renderAvatar = () => {
    if (id === 1) return <Policeman className='avatar' />;
    if (id === 2) return <Firetrack className='avatar' />;
    return null;
  };
  return <AvatarWrapper>{renderAvatar()}</AvatarWrapper>;
}

const InfomationContainer = styled.div`
  display: flex;
  position: relative;
  color: ${theme.palette.primary.main};
  span {
    margin-left: 0.5rem;
  }
`;

function InformationItem({ label, value }) {
  return (
    <InfomationContainer>
      <h4>
        {label}
        {':'}
      </h4>
      <span>{value}</span>
    </InfomationContainer>
  );
}

export { Avatar, InformationItem };
