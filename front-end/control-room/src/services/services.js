import Axios from 'axios';

import { API } from '../config/config.utils';

export async function fetchIncidents() {
  const result = await Axios.get(API + '/incidents');
  return result.data;
}

export function createIncident(params) {
  return Axios.post(API + '/incidents', params);
}
export function editIncident({ incidentId, requestParams }) {
  return Axios.put(`${API}/incidents/${incidentId}`, requestParams);
}

export function updateLocation(key, params) {
  return Axios.put(API + '/user/update-location', params);
}

export async function fetchNewIncidents() {
  const result = await Axios.get(API + '/user/new-incidents');
  return result.data;
}
