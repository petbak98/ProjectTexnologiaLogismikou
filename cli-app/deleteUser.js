import axios from 'axios';

export function deleteUser(token,id) {
	return axios({
		method: 'delete',
		url:  'http://localhost:9000/control-center/api/admin/users/' + id + '?format=json',
		headers: {
			Authorization: 'Bearer ' + token
		}
	});
}