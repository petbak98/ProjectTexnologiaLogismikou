import axios from 'axios';

export function getUserFull(token,id) {
	

	return axios({
		method: 'get',
		url:  'http://localhost:9000/control-center/api/admin/users/' + id + '/full?format=JSON',
		headers: {
			Authorization: 'Bearer ' + token
		}
	});
}