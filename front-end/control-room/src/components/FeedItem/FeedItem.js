import React from 'react';

import { Typography, Button } from '@material-ui/core';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import Edit from '@material-ui/icons/Edit';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import TodayIcon from '@material-ui/icons/Today';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';

import { ReactComponent as Firetrack } from '../../assets/icons/firetruck.svg';
import { ReactComponent as Policeman } from '../../assets/icons/patrol.svg';
import { useAuthService } from '../../hooks/useAuth';
import { feedItemStyles } from './FeedItem.style';

const variants = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: { opacity: 0, x: 10 },
};
export default function FeedItem({ incident }) {
  const {
    authority,
    reports,
    receivers,
    number,
    street,
    region,
    lastUpdate,
    title,
    incidentId,
    postalCode,
  } = incident;
  const classes = feedItemStyles();
  const date = new Date(lastUpdate).toLocaleDateString();
  const history = useHistory();
  const [authState] = useAuthService();
  console.log(authState);
  function viewIncident() {
    history.push(`/incidents/${incidentId}`);
  }

  function editIncident() {
    history.replace({ pathname: '/form', state: { incident } });
  }
  const renderAvatar = () => {
    if (authority.id === 1) return <Policeman className={classes.avatar} />;
    if (authority.id === 2) return <Firetrack className={classes.avatar} />;
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
          <Typography variant='subtitle1'>{`${reports.length} reports`}</Typography>
          <AssessmentOutlinedIcon className={classes.dateIcon} />
        </li>
        <li className={classes.feedLi}>
          <Typography variant='subtitle1'>{`${receivers.length} αποδέκτες`}</Typography>
          <PermIdentityIcon className={classes.dateIcon} />
        </li>
        <div className={classes.infoContainer}>
          <div className={classes.feedLi}>
            <Typography variant='subtitle2'>Σε εξέλιξη</Typography>
            <MoreHorizIcon className={classes.dateIcon} />
          </div>
        </div>
        <div className={classes.actions}>
          <Button
            onClick={viewIncident}
            className={classes.button}
            size='small'
            variant='contained'
            color='primary'
            endIcon={<InfoOutlinedIcon />}
          >
            Πληροφορίες
          </Button>
          {authState.context && (
            <Button
              style={{ marginLeft: 'auto' }}
              onClick={editIncident}
              className={classes.button}
              size='small'
              variant='text'
              color='primary'
              endIcon={<Edit />}
            >
              {' '}
            </Button>
          )}
        </div>
      </ul>
    </motion.div>
  );
}
