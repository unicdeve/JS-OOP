const _radius = new WeakMap();

class Circle {
	constructor(radius) {
		_radius.set(this, radius);
	}

	// the get keyword will allow us access the property as a property instead of as a method
	// like this: c.radius instead of c.radius()
	get radius() {
		return _radius.get(this);
	}

	get set(value) {
		if (value < 0) throw new Error('Invalid radius');
		_radius.set(this, value);
	}
}

const c = new Circle(2);
