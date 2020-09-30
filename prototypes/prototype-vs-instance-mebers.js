function Circle(radius) {
	// Instance member
	this.radius = radius;

	/*
    Instead of having the draw method on every instance of Circle
    we can add it to it's prototype
  */
	// this.draw = function () {
	//   console.log('draw')
	// }

	// we can access a prototype meber in an Instance meber and vice versa
	this.move = function () {
		console.log('move');
		this.draw();
	};
}

// Prototype member
Circle.prototype.draw = function () {
	console.log('draw');
};

// this way c1 and c2 will be using the same instance of draw in memory
const c1 = new Circle(1);
const c2 = new Circle(3);

// overriding a method in the prototype
Circle.prototype.toString = function () {
	// we can access an instance member in a prototype member and vice versa
	return `Circle with radius ${this.radius}`;
};
