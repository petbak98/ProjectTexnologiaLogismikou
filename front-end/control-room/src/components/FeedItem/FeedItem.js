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

import { useAuthService } from '../../hooks/useAuth';
import useEditIncident from '../../hooks/useEditIncident';
import { Avatar } from '../../shared';
import { AvatarContainer } from '../Incident/Incident.style';
import Can from '../Permissions/Can';
import FeedServiceActions from '../Service/FeedServiceActions/FeedServiceActions';
import Stars from '../Stars/Stars';
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
  } = incident;
  const classes = feedItemStyles();
  const date = new Date(lastUpdate).toLocaleDateString();
  const history = useHistory();
  const [authState] = useAuthService();
  const { roles, firstName, id, latitude, longitude, lastName, username } = authState.context.user;

  const { mutate } = useEditIncident();

  async function acceptIncident() {
    const requestParams = {
      ...incident,
      receivers: [
        ...incident.receivers,
        { firstName, lastName, longitude, latitude, username, id },
      ],
    };
    await mutate({ incidentId, requestParams });
  }

  function viewIncident() {
    history.push(`/incidents/${incidentId}`);
  }

  function editIncident() {
    history.replace({ pathname: '/form', state: { incident } });
  }

  return (
    <motion.div variants={variants}>
      <ul className={classes.root}>
        <AvatarContainer>
          <Avatar id={authority.id} />
        </AvatarContainer>
        <Typography className={classes.id} variant='subtitle1'>
          {incidentId}
        </Typography>
        <li className={classes.feedLi}>
          <Typography className={classes.title} variant='subtitle1'>
            {title}
          </Typography>
        </li>
        <li className={classes.feedLi}>
          <Typography variant='subtitle1'>{`${region} ${street} ${number}`}</Typography>
          <LocationOnIcon className={classes.locationIcon} />
        </li>
        <li className={classes.feedLi}>
          <Typography variant='subtitle1'>{date}</Typography>
          <TodayIcon className={classes.dateIcon} />
        </li>
        <li className={classes.feedLi}>
          <Typography style={{ marginRight: 10 }} variant='subtitle1'>
            Επείγον
          </Typography>
          <Stars startsCount={incident.importance.id} />
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
          <Can
            roles={roles}
            action={'view'}
            resource='incident'
            yes={
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
            }
            no={null}
          />
          <Can
            resource='incident'
            action='accept'
            roles={roles}
            yes={
              <FeedServiceActions
                acceptIncident={acceptIncident}
                user={authState.context.user}
                incident={incident}
                className={classes.button}
                viewIncident={viewIncident}
              />
            }
            no={null}
          />
          <Can
            resource='incident'
            roles={roles}
            action='edit'
            yes={
              <Button
                style={{ marginLeft: 'auto' }}
                onClick={editIncident}
                className={classes.button}
                size='small'
                variant='text'
                color='secondary'
                endIcon={<Edit />}
              >
                {' '}
              </Button>
            }
            no={null}
          />
        </div>
      </ul>
    </motion.div>
  );
}
