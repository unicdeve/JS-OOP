function Stopwatch() {
	let startTime,
		endTime,
		running,
		duration = 0;

	Object.defineProperty(this, 'duration', {
		get: function () {
			return duration;
		},
		set: function (value) {
			duration = value;
		},
	});

	Object.defineProperty(this, 'startTime', {
		get: function () {
			return startTime;
		},
	});

	Object.defineProperty(this, 'endTime', {
		get: function () {
			return endTime;
		},
	});

	Object.defineProperty(this, 'running', {
		get: function () {
			return running;
		},
	});
}

Stopwatch.prototype.start = function () {
	if (this.running) throw new Error('Stopwatch has already started!');

	this.running = true;
	this.startTime = new Date();
};

Stopwatch.prototype.stop = function () {
	if (!this.running) throw new Error('Stopwatch has not started yet!');

	this.running = false;
	this.endTime = new Date();

	const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
	this.duration += seconds;
};

Stopwatch.prototype.reset = function () {
	this.startTime = 0;
	this.endTime = 0;
	this.running = false;
	this.duration = 0;
};

/*
	A problem faced in converting the Stopwatch exercise from Object module
	is: the duration must now also be exposed which broke the abstraction principle,
	and putting it in the public interface messes the Stopwatch because this means 
	the duration can now be modify easily which makes it unrealiable.
*/
