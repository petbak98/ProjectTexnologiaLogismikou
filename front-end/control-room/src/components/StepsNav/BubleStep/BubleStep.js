import React from 'react';
import { BubbleItem, BubbleTitle, BubbleIcon } from './BubleStep.style';

function BubleStep({ active, label, icon: Icon }) {
  function handleClick() {}
  return (
    <BubbleItem onClick={handleClick} active={active}>
      <div className='step'>
        <BubbleIcon active={active}>
          <Icon />
        </BubbleIcon>
        <div className='line' />
      </div>
      <BubbleTitle active={active}>{label}</BubbleTitle>
    </BubbleItem>
  );
}

export default BubleStep;
