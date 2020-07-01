import Axios from 'axios';
import { useQuery } from 'react-query';

import { API } from '../config/config.utils';

function useIncidentById(id) {
  async function fetchIncidentById() {
    const result = await Axios.get(`${API}/incidents/${id}?format=json`);
    return result.data;
  }

  return useQuery(['incident', { id: Number(id) }], fetchIncidentById);
}

export default useIncidentById;
