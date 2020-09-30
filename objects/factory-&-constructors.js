/*
  When an object have more one methods, we say the object have behaviour
  the object literal is not a good approach in creating this kind of object 
  because we will be duplicating codes
  A good aproach would be to use a Factory or a Constructor

  The main difference btw a Factory and a constructor functions is that, you explicitly return an object 
  and in a contructor function, you use the new operator together with the this keyword 
  to create an object
*/

// Factory Function
function createCircle(radius) {
	return {
		radius,
		draw: function () {
			console.log('drawing');
		},
	};
}

const circle = createCircle(1);
circle.draw();

// Constructor function, the naming convention is to use Uppercase,
// and we use this keyword the define properties
function Circle(radius) {
	this.radius = radius;
	this.draw = function () {
		console.log('drawing');
	};
}

const another = new Circle(1);

/*
  under the hood, the new operator/keyword create a new empty object,
  and then make the this key word point to that object, 
  and finally it will return that object from that constructor function
  else without the new keyword, by default, the this keyword points to the global objects
  i.e in a browser env, window; in a node env, it points to global
*/
