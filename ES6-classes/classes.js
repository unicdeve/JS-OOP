// function Circle(radius) {
// 	this.radius = radius;

// 	this.draw = function () {
// 		console.log('draw');
// 	};
// }

class Circle {
	constructor(radius) {
		this.radius = radius;

		// this will appear directly on the object itself
		this.move = function () {};
	}

	// this method will appear in the prototype
	draw() {
		console.log('draw');
	}
}

const c = new Circle(2);

/*
  There is no concept of class JS, the ES6 class is a syntatic sugar for prototypical inheritance
  typeof Circle will return "function"
*/
