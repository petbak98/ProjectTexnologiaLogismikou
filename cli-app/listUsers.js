import axios from 'axios';

export function listUsers(token) {
	return axios({
		method: 'get',
		url: 'http://localhost:9000/control-center/api/admin/users',
		headers: {
			Authorization: 'Bearer ' + token
		}
	});
}
