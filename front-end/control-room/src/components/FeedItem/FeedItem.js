import React from 'react';
import { Typography, Button, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TodayIcon from '@material-ui/icons/Today';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import { feedItemStyles } from './FeedItem.style';
import { ReactComponent as Policeman } from '../../assets/icons/patrol.svg';
import { ReactComponent as Firetrack } from '../../assets/icons/firetruck.svg';

export default function FeedItem({ incident }) {
  const { type, date, adress, title, id, related } = incident;
  const classes = feedItemStyles();
  const renderAvatar = () => {
    if (type === 'police') return <Policeman className={classes.avatar} />;
    if (type === 'firefighting') return <Firetrack className={classes.avatar} />;
    return <Policeman className={classes.avatar} />;
  };
  return (
    <div>
      <ul className={classes.root}>
        <div className={classes.avatarContainer}>{renderAvatar()}</div>
        <Typography className={classes.id} variant='subtitle1'>
          {id}
        </Typography>
        <li className={classes.feedLi}>
          <Typography className={classes.title} variant='subtitle1'>
            {title}
          </Typography>
        </li>
        <li className={classes.feedLi}>
          <Typography variant='subtitle1'>{adress}</Typography>
          <LocationOnIcon className={classes.locationIcon} />
        </li>
        <li className={classes.feedLi}>
          <Typography variant='subtitle1'>{date}</Typography>
          <TodayIcon className={classes.dateIcon} />
        </li>

        <div className={classes.chipsContainer}>
          <li className={classes.chips}>
            {related.map((relation) => (
              <Chip key={relation} className={classes.chip} size='small' label={relation} />
            ))}
          </li>
        </div>
        <div className={classes.infoContainer}>
          <div className={classes.feedLi}>
            <Typography variant='subtitle2'>Σε εξέλιξη</Typography>
            <MoreHorizIcon className={classes.dateIcon} />
          </div>
          <Button
            className={classes.button}
            size='small'
            variant='outlined'
            color='primary'
            endIcon={<InfoOutlinedIcon />}
          >
            Πληροφορίες
          </Button>
        </div>
      </ul>
    </div>
  );
}
