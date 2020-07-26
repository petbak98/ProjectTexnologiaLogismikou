#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('inquirer');
const _ = require('lodash');
import fetch from 'node-fetch';
import axios from 'axios';
import { healthCheck } from './healthCheck.js';
import { login } from './login.js';
import { listUsers } from './listUsers.js';
import { getUser } from './getUser.js';
import { deleteUser } from './deleteUser.js'
import { addUser } from './addUser.js'

clear();

console.log(
	chalk.green(
		figlet.textSync('Control Room', { horizontalLayout: 'full' })
		)
	);

var subset;
var myData;

const giveCommand = (token) => {
	inquirer
	.prompt([
	{
		name: 'command',
		message: 'Enter your command (health-check, list-users, add-user, get-user, update-user, delete-user, exit) : ',
	},
	])
	.then(value => {
		let command = String(value.command);
		if(command === "health-check") {
			healthCheck(token).then(health => {
				subset = _.pick(health, ['data']);
				myData = Object.keys(subset).map(key => {
					return subset[key];
				})
				console.log(myData[0]);
				return giveCommand(token);
			}, (error) => {
				console.log(chalk.red("Sorry, you cannot access Control Room"));
				return giveCommand(token);
			});
		}else if(command === "list-users") {
			listUsers(token).then(list => {
				subset = _.pick(list, ['data']);
				myData = Object.keys(subset).map(key => {
					return subset[key];
				})
				let merged = [].concat.apply([], myData);
				console.log(merged);
				return giveCommand(token);
			}, (error) => {
				console.log(chalk.red("Sorry, this action is supported only for admins."));
				return giveCommand(token);
			});
		}else if(command === "get-user") {
			inquirer
			.prompt([
			{
				name: 'idGotten',
				message: 'Please enter the ID of user to search: ',
			},
			]).then(id => {
				getUser(token,id.idGotten).then(returnedUser => {
					subset = _.pick(returnedUser, ['data']);
					myData = Object.keys(subset).map(key => {
						return subset[key];
					})
					console.log(myData);
					return giveCommand(token);
				}, (error) => {
					console.log(error);
					console.log(chalk.red("Sorry, either the user with given ID does not exist or you have no permissions to access the user"));
					return giveCommand(token);
				});
			});
		}else if(command === "add-user") {
			console.log(chalk.yellow("Add below the credentials of the new user"));
			inquirer
			.prompt([
			{
				name: 'username',
				message: 'Please enter the username of user to add: ',

			},
			{
				name: 'password',
				message: 'Please enter the password of user to add: ',

			},
			{
				name: 'firstName',
				message: 'Please enter the first name of user to add: ',

			},
			{
				name: 'lastName',
				message: 'Please enter the last name of user to add: ',

			},
			{
				name: 'role',
				message: 'Please enter the role of user to add (1 for Simple User, 2 for Moderator, 3 for Administrator) : ',

			},
			{
				name: 'agency',
				message: 'Please enter the agency of user to add (1 for Police Dpt, 2 for Fire Dpt, 3 for Ambulance, 4 for Coast Guard, 5 for Control Room) :  ',

			},
			{
				name: 'email',
				message: 'Please enter the email of user to add: ',

			},
			]).then(added => {
				addUser(token,added.username,added.password,added.firstName,added.lastName,added.role,added.agency,added.email).then(addedUser => {
					subset = _.pick(addedUser, ['data']);
					myData = Object.keys(subset).map(key => {
						return subset[key];
					})
					console.log(myData);
					return giveCommand(token);
				}, (error) => {
					console.log(error);
					console.log(chalk.red("Sorry, could not add user"));
					return giveCommand(token);
				});
			});
		}else if(command === "delete-user") {
			inquirer
			.prompt([
			{
				name: 'idDeleted',
				message: 'Please enter the ID of user to delete: ',
			},
			]).then(id => {
				deleteUser(token,id.idDeleted).then(returnedUser => {
					subset = _.pick(returnedUser, ['data']);
					myData = Object.keys(subset).map(key => {
						return subset[key];
					})
					console.log(myData);
					return giveCommand(token);
				}, (error) => {
					console.log(error);
					console.log(chalk.red("Sorry, either the user with given ID does not exist or you have no permissions to access the user"));
					return giveCommand(token);
				});
			});
		}else if(command === "exit") {
			return 0;
		}else {
			console.log(chalk.red("Your command is wrong."));
			return giveCommand(token);
		}
	});
}


const mainDisplay = () => {
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
	]).then(answers => {
		let user = String(answers.user);
		let pass = String(answers.pass);
		let token = "error";
		login(user,pass).then(x => {
			console.log(chalk.green('Authenticated, permission granted.'));
			subset = _.pick(x, ['data']);
			myData = Object.keys(subset).map(key => {
				return subset[key];
			})
			token = myData[0].accessToken;
			giveCommand(token);
			
		}, (error) => {
			console.log(chalk.red("Permission is denied.Try Again"));
			return mainDisplay();
		});
	});
}

mainDisplay();

