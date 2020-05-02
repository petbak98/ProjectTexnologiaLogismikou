import React from 'react';
import { BubbleItem, BubbleTitle, BubbleIcon } from './BubleStep.style';

function BubleStep({ active, label, icon: Icon }) {
  function handleClick() {}
  return (
    <BubbleItem onClick={handleClick} active={active}>
      <BubbleIcon active={active}>
        <Icon styles={{ marginTop: 1000 }} />
      </BubbleIcon>
      <BubbleTitle active={active}>{label}</BubbleTitle>
    </BubbleItem>
  );
}

export default BubleStep;
