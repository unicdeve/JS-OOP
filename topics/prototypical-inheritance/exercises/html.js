function HtmlElement() {
	this.click = function () {
		console.log('clicked');
	};
}

HtmlElement.prototype.focus = function () {
	console.log('focused');
};

function HtmlSelectElement(items = []) {
	this.items = items;

	this.addItem = function (item) {
		this.items.push(item);
	};

	this.removeItem = function (item) {
		this.items.splice(this.items.indexOf(item), 1);
	};
}

/*
  Using
    Object.create(HtmlElement.prototype)
  we don't get to inherit the click method which is an instance method
  we only inherit the focus method on the prototype
  Instead, we use the NEW operator
*/
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
