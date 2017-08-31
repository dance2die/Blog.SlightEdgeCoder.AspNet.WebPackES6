import Promise from 'es6-promise-promise';

// A Promise that times out after ms milliseconds
function delay(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, ms);
	});
}

export default class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	speak() {
		console.log(`Hi I'm ${this.name} and ${this.age} years old and I am awesome`);
	}

	printData() {
		// Which ever Promise fulfills first is the result passed to our handler
		Promise.race([
			fetch('https://jsonplaceholder.typicode.com/users/1'),
				delay(5000).then(() => { username: "we don't know!" })
			])
			.then(function (response) {
				// this will be 'guest' if fetch takes longer than 5 sec.
				console.log("user:", response.json());
			})
			.catch(function (err) {
				console.log("error:", err);
			});
	}
}