import React from 'react';
import { useParams } from 'react-router-dom';

import useIncidentById from '../../hooks/useIncidentById';
import Loading from '../Loading/Loading';

function Incident() {
  const { id } = useParams();
  const { data, status } = useIncidentById(id);
  if (status === 'loading') return <Loading />;
  return <div>{JSON.stringify(data, null, 2)}</div>;
}

export default Incident;
