const Circle = function () {
	this.draw = function () {
		console.log(this);
	};
};

const c = new Circle();
// Method call
c.draw(); // this keyword will point to the Circle Object

// storing a reference to the object as a standalone function
const draw = c.draw;

// Function Call
draw(); // this keyword will point to the Window Object

/*
  in strict mode this will point to undefined instead of the Global object i.e Window in the browser env
  by default the ES6 class uses the strict mode 
*/
