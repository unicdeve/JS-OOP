function Circle(radius) {
	this.radius = radius;

	const defaultLocation = {
		x: 1,
		y: 1,
	};

	this.draw = function () {
		console.log('drawing');
	};

	// Setter, used when u don't want to allow direct
	// access to the property
	this.getDefaultLocation = function () {
		return defaultLocation;
	};

	// OR a better syntax
	Object.defineProperty(this, 'defaultLocation', {
		// get: used to get a private prop
		get: function () {
			return defaultLocation;
		},
		// set: used to set a private prop
		set: function (value) {
			// you can do some validation
			if (!value.x || !value.y) throw new Error('Invalid location');

			defaultLocation = value;
		},
	});
}

const circle = new Circle(1);

circle.getDefaultLocation();

// better way in this use case, usng the getter function
circle.defaultLocation;

// using the setter function
circle.defaultLocation = { x: 1, y: 1 };
