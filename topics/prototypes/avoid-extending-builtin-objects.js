/*
  Avoid this in JS, even though JS is a dynamically typed language and it gives you 
  flexibility to modify objects,
  you should avoid overriding or extending built-in objects or objects that you don't own!
*/
Array.prototype.push = function () {
	console.log('Your push Algorithm');
};
