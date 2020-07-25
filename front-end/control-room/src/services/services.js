import Axios from 'axios';

import { API } from '../config/config.utils';

export async function fetchIncidents() {
  const result = await Axios.get(API + '/incidents');
  return result.data;
}

export function createIncident(params) {
  return Axios.post(API + '/incidents', params);
}
export function editIncident(requestParams) {
  return Axios.put(`${API}/incidents/${requestParams.incidentId}`, requestParams);
}

export function deleteIncident(requestParams) {
  return Axios.delete(`${API}/incidents/${requestParams.incidentId}`);
}
export function deleteUser(requestParams) {
  return Axios.delete(`${API}/admin/users/${requestParams.id}`);
}

export function updateLocation(key, params) {
  return Axios.put(API + '/user/update-location', params);
}

export function createReport(params) {
  return Axios.post(API + '/user/reports', params);
}

export function editReport(params) {
  return Axios.put(API + '/user/reports', params);
}

export async function fetchNewIncidents() {
  const result = await Axios.get(API + '/user/new-incidents');
  return result.data;
}

export async function getUsers() {
  const result = await Axios.get(API + '/admin/users');
  return result.data;
}
