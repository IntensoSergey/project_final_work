'use strict';

const position = [
	'Junior developer', 
	'Middle developer', 
	'Senior developer', 
	'Junior QA', 
	'Middle QA', 
	'Senior QA', 
	'Project manager'
];
// const participants = [
// 	'Андрій', 
// 	'Микола', 
// 	'Стас', 
// 	'Катерина', 
// 	'Олег', 
// 	'Світлана', 
// 	'Юля'];
var participants = [];
const team = {
	team: {},
	showTeam: function () {
		for (const i in this.team) {
			const person = this.team[i];
			console.log(`${person.name} - ${person.position}. Зарплата ${person.salary}$.`);
			this.team[i].tellAboutYourSelf();
		}
	},
};

function getNames() {
	for (let i = 0; i < position.length; i++) {
		let name = prompt("Введіть Ім'я працівника на посаду " + position[i]);
		participants.push(name);
	}

	createTeam(position, participants);
}

function setSalary(position) {
	if (position.indexOf('Junior') != -1) {
		return Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
	} else if (position.indexOf('Middle') != -1) {
		return Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
	} else if (position.indexOf('Senior') != -1) {
		return Math.floor(Math.random() * (3000 - 2500 + 1)) + 2500;
	} else {
		return Math.floor(Math.random() * (4500 - 4000 + 1)) + 4000;
	}
}

function createTeam(position, participants) {
	for (let i = 0; i < position.length; i++) {
		const person = {
			name: participants[i],
			position: position[i],
			salary: setSalary(position[i]),
			tellAboutYourSelf: function () {
				console.log(`Мене звати ${this.name} і я - ${this.position} . Я заробляю ${this.salary}$.`);
				console.log('*-----------------*')
			},
		};
		team.team[`Persone ${i + 1}`] = person;
	}
	team.showTeam();
}

getNames()