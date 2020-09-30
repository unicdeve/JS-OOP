const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
	constructor(radius) {
		// private property
		_radius.set(this, radius);

		_move.set(this, function () {
			console.log(
				'move',
				this
			); /* this will be undefined because using the function keyword will rebounce the this keyword, use arrow function instead */
		});
	}

	draw() {
		// getting and using the private variable
		const theRadius = _radius.get(this);
		console.log(theRadius);
		_move.get(this)();
	}
}

const c = new Circle(2);
