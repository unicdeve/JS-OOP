const person = { name: 'Taiwo' };
const keys = Object.keys(person);

/*
  We only see ['name'], i.e only person own properties, and don't include
  it's proto properties and method like toString, toLocale ...etc, 
  this is because some of the properties and method
  have some properties that disabled it from being iterable/enumerable
*/

let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(descriptor);

// We can redefine the object properties' property/decriptors
Object.defineProperty(person, 'name', {
	writable: false, // this makes it readonly
	enumerable: false, // this makes this property, 'name', hidden from the iteration
});
person.name = 'Kehinde'; // this won't work because writable is set to false
console.log(Object.keys(person)); // will return []
