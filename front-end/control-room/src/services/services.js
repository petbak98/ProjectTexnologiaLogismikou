import Axios from 'axios';
import { API } from '../config/config.utils';
import { incidents } from './mockiIncidents';

export async function fetchIncidents() {
  // return Axios.get(API + 'incidents');

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(incidents);
    }, 1000);
  });
}
