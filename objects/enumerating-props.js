function Circle(radius) {
	this.radius = radius;
	this.draw = function () {
		console.log('drawing');
	};
}

const circle = new Circle(1);

// Enumerating or Iterating through an object
for (let key in circle) {
	console.log(key, circle[key]);

	// to get only properies and not methods
	if (typeof circle[key] !== 'function') console.log(key, circle[key]);
}

// OR
const keys = Object.keys(circle);
console.log(keys);

// to check if an object has a given property, we use the 'in' operator
if ('radius' in circle) console.log('Circle has a radius');
