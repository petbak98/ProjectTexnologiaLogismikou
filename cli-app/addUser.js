import axios from 'axios';

export function addUser(token,username,password,firstName,lastName,role,agency,email) {
	return axios({
		method: 'post',
		url: 'http://localhost:9000/control-center/api/admin/users',
		headers: {
			Authorization: 'Bearer ' + token
		},
		data: {
			"username": username,
			"password": password,
			"firstName": firstName,
			"lastName": lastName,
			"roles":[{"id": role}],
			"authorityId": agency ,
			"email": email
		}
	});
}
