 

// JavaScript (script.js):

// // Task 1: Object Creation
// let myObject = {};
// let person = {
// 	name: 'John Doe',
// 	age: 30,
// 	profession: 'Developer'
// };

// // Task 2: Object Properties
// console.log(person.name); // outputs: John Doe
// console.log(person.age); // outputs: 30
// console.log(person.profession); // outputs: Developer

// person.age = 31;
// person.country = 'USA';

// // Task 3: Object Methods
// let greeting = {
// 	sayHello: function() {
// 		console.log('Hello, World!');
// 	}
// };

// greeting.sayHello(); // outputs: Hello, World!

// let calculator = {
// 	num1: 5,
// 	num2: 10,
// 	add: function() {
// 		return this.num1 + this.num2;
// 	}
// };

// console.log(calculator.add()); // outputs: 15

// // Task 4: Object Iteration
// for(let property in person) {
// 	console.log(property + ": " + person[property]);
// }

// // Task 5: Object Comparison
// let person2 = {
// 	name: 'John Doe',
// 	age: 30,
// 	profession: 'Developer'
// };

// console.log(person === person2); // outputs: false
// console.log(JSON.stringify(person) === JSON.stringify(person2)); // outputs: true

// // Task 6: Object Nesting
// let person = {
// 	name: 'John Doe',
// 	age: 30,
// 	address: {
// 		street: '123 Main St',
// 		city: 'Anytown',
// 		state: 'CA',
// 		zip: '12345'
// 	}
// };

// console.log(person.address.street); // outputs: 123 Main St

// // Task 7: Object Prototypes
// let personPrototype = {
// 	sayHello: function() {
// 		console.log('Hello, World!');
// 	}
// };

// let person1 = Object.create(personPrototype);
// let person2 = Object.create(personPrototype);

// person1.sayHello(); // outputs: Hello, World!
// person2.sayHello(); // outputs: Hello, World!

// // Task 8: Object Serialization
// let person = {
// 	name: 'John Doe',
// 	age: 30,
// 	profession: 'Developer'
// };

// let jsonString = JSON.stringify(person);
// console.log(jsonString); // outputs: {"name":"John Doe","age":30,"profession":"Developer"}

// let parsedObject = JSON.parse(jsonString);
// console.log(parsedObject.name); // outputs: John Doe

// // Task 9: Object Destructuring
// let person = {
// 	name: 'John Doe',
// 	age: 30,
// 	profession: 'Developer'
// };

// let {name, age} = person;
// console.log(name); // outputs: John Doe
// console.log(age); // outputs: 30

// // Task 10: Object Property Enumeration
// let person = {
// 	name: 'John Doe',
// 	age: 30,
// 	profession: 'Developer'
// };

// let properties = Object.keys(person);
// console.log(properties); // outputs: ["name", "age", "profession"]

// // Task 11: Object Inheritance
// let parentObject = {
// 	sayHello: function() {
// 		console.log('Hello, World!');
// 	}
// };

// let childObject = Object.create(parentObject);
// childObject.sayHello(); // outputs: Hello, World!

// // Task 12: Object Privacy
// let person = (function() {
// 	let privateName = 'John Doe';
// 	return {
// 		getName: function() {
// 			return privateName;
// 		}
// 	};
// })();

// console.log(person.getName()); // outputs: John Doe

 

