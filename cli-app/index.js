#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('inquirer');
import { healthCheck } from './healthCheck.js';
import { login } from './login.js';

clear();

console.log(
	chalk.green(
		figlet.textSync('Control Room', { horizontalLayout: 'full' })
		)
	);

let command = process.argv[2];

if(command === "health-check") {
	healthCheck();
} else if (command === "login") {
	inquirer
	.prompt([
	{
		name: 'user',
		message: 'Please enter your username: ',
	},
	{
		type: 'password',
		name: 'pass',
		message: 'Please enter your password: ',
	},
	])
	.then(answers => {
		let user = String(answers.user);
		let pass = String(answers.pass);
		login(user,pass);
	});

	
}






