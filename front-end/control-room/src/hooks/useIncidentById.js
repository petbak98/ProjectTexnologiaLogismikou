import { useQuery } from 'react-query';
import Axios from 'axios';
import { API } from '../config/config.utils';

function useIncidentById(id) {
  async function fetchIncidentById() {
    const result = await Axios.get(
      `${API}control-center/api/mod/incidents/${id}`
    );
    return result.data;
  }

  return useQuery(['incident', { id: Number(id) }], fetchIncidentById);
}

export default useIncidentById;
