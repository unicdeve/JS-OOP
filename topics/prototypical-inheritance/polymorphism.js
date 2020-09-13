function extend(Child, Parent) {
	Child.prototype = Object.create(Parent.prototype);
	Child.prototype.constructor = Child;
}

function Shape() {}

Shape.prototype.duplicate = function () {
	console.log('duplicate');
};

function Circle() {}

extend(Circle, Shape);

Circle.prototype.duplicate = function () {
	console.log('dublicate circle method');
};

function Square() {}

extend(Square, Shape);

Square.prototype.duplicate = function () {
	console.log('dublicate square method');
};

/*
  Different shape objects now have different implementation of the duplicate method
  this is called Polymorphism
*/

const shapes = [new Circle(), new Square()];

for (let shape in shapes) shape.duplicate();
