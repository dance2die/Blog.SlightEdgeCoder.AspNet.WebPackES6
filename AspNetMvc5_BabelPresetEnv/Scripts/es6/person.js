//import Promise from 'es6-promise-promise';

export default class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	speak() {
		console.log(`Hi I'm ${this.name} and ${this.age} years old and I love CodingBlocks podcast!`);
	}

	msgAfterTimeout(msg, who, timeout) {
		return new Promise((resolve, reject) => {
			setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout);
		});
	}

	printData() {
		this.msgAfterTimeout("", "Foo", 100).then((msg) =>
			this.msgAfterTimeout(msg, "Bar", 2000)).then((msg) => {
				console.log(`done after 2100ms:${msg}`);
		});

		//// Which ever Promise fulfills first is the result passed to our handler
		//Promise.race([
		//	fetch('https://jsonplaceholder.typicode.com/users/1'),
		//		delay(5000).then(() => { username: "we don't know!" })
		//	])
		//	.then(function (response) {
		//		// this will be 'guest' if fetch takes longer than 5 sec.
		//		console.log("user:", response.json());
		//	})
		//	.catch(function (err) {
		//		console.log("error:", err);
		//	});


	}
}