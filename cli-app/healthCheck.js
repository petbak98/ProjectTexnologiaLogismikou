import axios from 'axios';

export function healthCheck(token) {
	return axios({
		method: 'get',
		url: 'http://localhost:9000/control-center/api/health-check',
		headers: {
			Authorization: 'Bearer ' + token
		}
	})
}