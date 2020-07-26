import axios from 'axios';

export function getUser(token,id) {
	

	return axios({
		method: 'get',
		url:  'http://localhost:9000/control-center/api/admin/users/' + id + '?format=json',
		headers: {
			Authorization: 'Bearer ' + token
		}
	});
}
