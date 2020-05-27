import React from 'react';

import { Typography, Button, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TodayIcon from '@material-ui/icons/Today';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { motion } from 'framer-motion';

import { feedItemStyles } from './FeedItem.style';
import { ReactComponent as Policeman } from '../../assets/icons/patrol.svg';
import { ReactComponent as Firetrack } from '../../assets/icons/firetruck.svg';

const variants = {
  visible: {
    opacity: 1,
    x: 0
  },
  hidden: { opacity: 0, x: 10 }
};
export default function FeedItem({ incident }) {
  const {
    reports,
    receivers,
    authorityId,
    number,
    street,
    region,
    lastUpdate,
    title,
    incidentId,
    postalCode
  } = incident;
  const classes = feedItemStyles();
  const date = new Date(lastUpdate).toLocaleDateString();
  const renderAvatar = () => {
    if (authorityId === 1) return <Policeman className={classes.avatar} />;
    if (authorityId === 2) return <Firetrack className={classes.avatar} />;
    return <Policeman className={classes.avatar} />;
  };
  return (
    <motion.div variants={variants}>
      <ul className={classes.root}>
        <div className={classes.avatarContainer}>{renderAvatar()}</div>
        <Typography className={classes.id} variant='subtitle1'>
          {incidentId}
        </Typography>
        <li className={classes.feedLi}>
          <Typography className={classes.title} variant='subtitle1'>
            {title}
          </Typography>
        </li>
        <li className={classes.feedLi}>
          <Typography variant='subtitle1'>{`${region} ${street} ${number}, ${postalCode}`}</Typography>
          <LocationOnIcon className={classes.locationIcon} />
        </li>
        <li className={classes.feedLi}>
          <Typography variant='subtitle1'>{date}</Typography>
          <TodayIcon className={classes.dateIcon} />
        </li>
        <li className={classes.feedLi}>
          <Typography variant='subtitle1'>{`${reports.length} reports`} </Typography>
          <AssessmentOutlinedIcon className={classes.dateIcon} />
        </li>
        <li className={classes.feedLi}>
          <Typography variant='subtitle1'>{`${receivers.length} αποδέκτες`} </Typography>
          <PermIdentityIcon className={classes.dateIcon} />
        </li>
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
    </motion.div>
  );
}
