class Circle {
	constructor(radius) {
		this.radius = radius;
	}

	// Instance method
	draw() {
		console.log('draw');
	}

	/*
		Unlike Instance methods that are availabe on the prototype
		Static methods are available on the class itself
		Static methods are used to create utility functions that are 
		not specific to a given object
	*/

	// Static method
	static parse(str) {
		console.log(str);
	}
}

const c = new Circle(2);
// Static method are not available on an instance of a class, they are available on the class itself
// we can't do c.parse('my string')
Circle.parse('my string');
