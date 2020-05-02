import React from 'react';
import styled from 'styled-components/macro';

import BubleStep from './BubleStep/BubleStep';
import { ReactComponent as Location } from '../../assets/icons/location.svg';
import { ReactComponent as Checkmark } from '../../assets/icons/checkmark.svg';
import { ReactComponent as CC } from '../../assets/icons/cc.svg';
import { ReactComponent as Call } from '../../assets/icons/call.svg';

function StepNav({ currentStep, goTostep }) {
  return (
    <StepsInfoContainer>
      <BubleStep active={currentStep === 1} label='Συμβάν' icon={CC} />
      <BubleStep active={currentStep === 2} label='Τοποθεσία' icon={Location} />
      <BubleStep active={currentStep === 3} label='Στοχεία Κλήσης' icon={Call} />
      <BubleStep active={currentStep === 4} label='Ολοκλήρωση' icon={Checkmark} />
    </StepsInfoContainer>
  );
}

export default StepNav;

const StepsInfoContainer = styled.div`
  padding-top: 1rem;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
