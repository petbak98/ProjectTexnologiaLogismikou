import axios from 'axios';

export function updateUser(token,id,username,password,firstName,lastName,roleID,roleName,authorityId,email,active,latitude,longitude,myIncidents,incidents,reports,lastNewIncident) {
	return axios({
		method: 'put',
		url: 'http://localhost:9000/control-center/api/admin/users/' + id + '?format=JSON',
		headers: {
			Authorization: 'Bearer ' + token
		},
		data: {
			"userId": id,
			"username": username,
			"password": password,
			"email": email,
			"firstName": firstName,
			"lastName": lastName,
			"active": active,
			"roles": [ {"id": roleID, "name": roleName} ],
			"latitude": latitude,
			"longitude": longitude,
			"authorityId": authorityId,
			"myIncidents": myIncidents,
			"incidents": incidents,
			"reports": reports,
			"lastNewIncident": lastNewIncident
		}
	});
}
