function Shape(color) {
	this.color = color;
}

Shape.prototype.duplicate = function () {
	console.log('duplicate');
};

// intermediate function inheritance
function extend(Child, Parent) {
	Child.prototype = Object.create(Parent.prototype);
	Child.prototype.constructor = Child;
}

function Circle(radius, color) {
	Shape.call(this, color);

	this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function () {
	console.log('draw');
};

// overriding the duplicate method from the Parent object
Circle.prototype.duplicate = function () {
	// extending the Parent's dupliacate method
	Shape.prototype.duplicate.call(this);

	console.log('dublicate circle method');
};

const s = new Shape();
const c = new Circle();
