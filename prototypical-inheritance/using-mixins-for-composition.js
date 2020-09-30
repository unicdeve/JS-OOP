/*
  using mixins to create composition
*/
// rest operator argument to create an array of args
function mixin(target, ...sources) {
	// spread operator to spread an arraw into multiple objects
	Object.assign(target, ...sources);
}

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

// using the mixin to create a compostion
const person = mixin({}, canEat, canWalk);

function GoldFish() {}

// passing an object that's not empty
mixin(GoldFish.prototype, canEat, canSwim);
