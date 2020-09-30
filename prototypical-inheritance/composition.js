/*
  Composition to create Objects
*/

const canEat = {
	eat: function () {
		this.hunger--;
		console.log('eating');
	},
};

const canWalk = {
	walk: function () {
		this.hunger--;
		console.log('walking');
	},
};

const canSwim = {
	swim: function () {
		console.log('swimming');
	},
};

// using the Object.assign() to create a compostion
const person = Object.assign({}, canEat, canWalk);

function GoldFish() {}

// passing an object that's not empty
Object.assign(GoldFish.prototype, canEat, canSwim);
