var square = x => x * x;
console.log(square(9));

// not binding for this keyword or arguments array
var user = {
	name: 'Juan',
	sayHi: () => {
		console.log(arguments);
		console.log(`Hi, I'm ${this.name}`);
	},
	sayHiAlt () {
		console.log(arguments);
		console.log(`Hi, I'm ${this.name}`);	
	}
};
user.sayHi(1, 2, 3);