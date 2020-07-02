import Axios from 'axios';

import { API } from '../config/config.utils';

export async function fetchIncidents() {
  const result = await Axios.get(API + '/mod/incidents');
  return result.data;
}

export function createIncident(params) {
  return Axios.post(API + '/incidents', params);
}
export function editIncident(params) {
  return Axios.put(API + '/incidents', params);
}
