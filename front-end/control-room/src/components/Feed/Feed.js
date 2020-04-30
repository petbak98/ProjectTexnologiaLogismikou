import React from 'react';
import FeedItem from '../FeedItem/FeedItem';
import { FeedContainer } from './Feed.style';
import { Button } from '@material-ui/core';

export default function Feed({ incidents }) {
  {
    console.log(incidents);
  }
  return (
    <FeedContainer>
      {incidents.map((incident) => (
        <FeedItem key={incident.id} incident={incident} />
      ))}
    </FeedContainer>
  );
}
