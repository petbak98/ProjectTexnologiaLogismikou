import Axios from 'axios';
import { API } from '../config/config.utils';
import { incidents } from './mockiIncidents';

export async function fetchIncidents() {
  const result = await Axios.get(API + 'control-center/api/mod/incidents');
  return result.data;
}
