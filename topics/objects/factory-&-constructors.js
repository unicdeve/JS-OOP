/*
  When an object have more one methods, we say the object have behaviour
  the object literal is not a good approach in creating this kind of object 
  because we will be duplicating codes
  A good aproach would be to use a Factory or a Constructor
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
