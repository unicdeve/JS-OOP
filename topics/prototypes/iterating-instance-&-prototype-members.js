function Circle(radius) {
	this.radius = radius;

	this.move = function () {
		console.log('move');
	};
}

Circle.prototype.draw = function () {
	console.log('draw');
};

const c1 = new Circle(1);

// Returns Instance members only
console.log(Object.keys(c1));

// Returns both Instance and prototype mebers
for (let key in c1) console.log(key);

c1.hasOwnProperty('move'); // will return true

c1.hasOwnProperty('draw'); // will return false because it's on the prototype
