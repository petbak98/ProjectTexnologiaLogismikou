import React from 'react';
import styled from 'styled-components/macro';

import BubleStep from './BubleStep/BubleStep';
import { ReactComponent as Location } from '../../assets/icons/location.svg';
import { ReactComponent as Checkmark } from '../../assets/icons/checkmark.svg';
import { ReactComponent as CC } from '../../assets/icons/cc.svg';
import { ReactComponent as Call } from '../../assets/icons/call.svg';

function StepNav({ currentStep }) {
  return (
    <StepsInfoContainer>
      <BubleStep active={currentStep >= 1} label='Αρμοδιότητες' icon={CC} />
      <BubleStep active={currentStep >= 2} label='Τοποθεσία' icon={Location} />
      <BubleStep active={currentStep >= 3} label='Στοχεία Κλήσης' icon={Call} />
      <BubleStep active={currentStep >= 4} label='Ολοκλήρωση' icon={Checkmark} />
    </StepsInfoContainer>
  );
}

export default StepNav;

const StepsInfoContainer = styled.div`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 1rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
