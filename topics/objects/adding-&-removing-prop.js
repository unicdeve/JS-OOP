function Circle(radius) {
	this.radius = radius;
	this.draw = function () {
		console.log('drawing');
	};
}

const circle = new Circle(1);

// Adding new property to an object
circle.location = {
	x: 1,
	y: 19,
};

// OR
circle['location'] = {
	x: 1,
	y: 19,
};

// Removing a property
delete circle.location;
// OR
delete circle['location'];
