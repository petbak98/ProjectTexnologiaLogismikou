import fetch from 'node-fetch';
import axios from 'axios';
const chalk = require('chalk');

export function login(user,pass) {
	axios({
		method: 'post',
		url: 'http://localhost:9000/control-center/api/login',
		data: {
			"username": user,
			"password": pass
		}
	})
	.then(response => {
		console.log(chalk.green('Authenticated, permission granted.'));
		console.log(response.data);
	}, (error) => {
		console.log(chalk.red("Permission is denied.Try Again"));
	});
}
