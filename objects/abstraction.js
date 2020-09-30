function Circle(radius) {
	this.radius = radius;

	/*
    this.defaultLocation = {
      x: 1,
      y: 1,
    };

    this.computeOptimumLocation = function () {};
    
    putting these two on the objects will make it to be accessible from the outside
    this might not be what we want, this is where ABSTRACTION comes in, we want to 
    hide as much details and show only the essentials

    Using the Abstraction concept for these two props, we have to convert them into
    Private properties and method
  */

	const defaultLocation = {
		x: 1,
		y: 1,
	};

	const computeOptimumLocation = function (factor) {
		console.log(factor);
	};

	this.draw = function () {
		computeOptimumLocation(0.1);
		console.log('drawing');
	};
}

const circle = new Circle(1);
