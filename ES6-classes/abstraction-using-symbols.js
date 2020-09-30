// using symbols to create private properties
const _radius = Symbol();
const _draw = Symbol();

class Circle {
	constructor(radius) {
		this[_radius] = radius;
	}

	[_draw]() {
		console.log('draw method');
	}
}

const c = new Circle(2);
