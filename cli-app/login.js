import axios from 'axios';

export function login(user,pass) {
	return axios({
		method: 'post',
		url: 'http://localhost:9000/control-center/api/login',
		data: {
			"username": user,
			"password": pass
		}
	});
}
