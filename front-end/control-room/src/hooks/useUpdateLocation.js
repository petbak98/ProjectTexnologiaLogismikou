import useGeolocation from 'react-hook-geolocation';
import { useQuery } from 'react-query';

import { updateLocation } from '../services/services';

export default function useUpdateLocation({ id: userId }) {
  const geolocation = useGeolocation({ maximumAge: 300000 });
  const { latitude, longitude } = geolocation;
  return {
    geolocation,
    ...useQuery(
      latitude && longitude && ['update-location', { userId, latitude, longitude }],
      updateLocation,
    ),
  };
}
