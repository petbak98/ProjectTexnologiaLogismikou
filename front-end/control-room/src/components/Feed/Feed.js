import React from 'react';
import FeedItem from '../FeedItem/FeedItem';
import { FeedContainer } from './Feed.style';

export default function Feed({ incidents }) {
  return (
    <FeedContainer>
      {incidents.map((incident) => (
        <FeedItem key={incident.id} incident={incident} />
      ))}
    </FeedContainer>
  );
}
