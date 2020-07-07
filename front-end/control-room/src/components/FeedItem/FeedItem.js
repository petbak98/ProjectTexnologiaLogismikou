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
import { checkIfIncidentAccpeted } from '../../utils';
import { AvatarContainer } from '../Incident/Incident.style';
import Can from '../Permissions/Can';
import AcceptButton from '../Service/AcceptButton/AcceptButton';
import { feedItemStyles } from './FeedItem.style';
const variants = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: { opacity: 0, x: 10 },
};
export default function FeedItem({ incident }) {
  console.log(incident);
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
  const { roles } = authState.context.user;
  const isIncidentAccpted = checkIfIncidentAccpeted(incident, authState.context.user);

  const { mutate, status } = useEditIncident();

  async function acceptIncident() {
    const requestParams = {
      ...incident,
      status: {
        ...incident.status,
        completed: 1,
      },
    };
    await mutate(requestParams);
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
          {!isIncidentAccpted ? (
            <Can
              resource='incident'
              action='accept'
              roles={roles}
              yes={
                <AcceptButton
                  acceptIncident={acceptIncident}
                  status={status}
                  className={classes.button}
                />
              }
              no={null}
            />
          ) : (
            <Can resource='incident' action='addReport' roles={roles} />
          )}
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
          >
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
          </Can>
        </div>
      </ul>
    </motion.div>
  );
}
