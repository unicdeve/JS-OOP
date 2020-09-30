function Shape() {}

Shape.prototype.duplicate = function () {
	console.log('duplicate');
};

function Circle(radius) {
	this.radius = radius;
}

/*
	reseting Circle prototype, making Circle inherit from Shape
	initially
		Circle.prototype = Object.create(Object.prototype) // implicit relation
		i.e the objectBase
*/
Circle.prototype = Object.create(Shape.prototype);

/*
	initially
		Circle.prototype.constructor = Circle
	reseting Circle prototype also reset it's constructor to the Shape constructor,
	so we can no longer create a Circle dynamically with it's contructor function
	Now,
		Circle.prototype.constructor = Shape
*/
// as best practice, also reset the child constructor property back to the child's
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
	console.log('draw');
};

const s = new Shape();
const c = new Circle();
