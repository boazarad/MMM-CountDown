Module.register("MMM-CountDown",{
	// Default module config.
	defaults: {
		event: "New Millenium:",
		date: "3000-01-01",
		showHours: true,
		showMinutes: true,
		showSeconds: true,
		customInterval: 1000,
		daysLabel: 'Days',
		hoursLabel: 'Hours',
		minutesLabel: 'Minutes',
		secondsLabel: 'Seconds',
	},

	// set update interval
	start: function() {
		var self = this;
		setInterval(function() {
			self.updateDom(); // no speed defined, so it updates instantly.
		}, this.config.customInterval); 
	},

	// Update function
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.id = "countDownTimer"
		
		var header = document.createElement("h1");
		header.innerHTML=this.config.event;
		
		var listWrapper = document.createElement("ul");
		
		var today = new Date(Date.now());
		var target = new Date(this.config.date);
		var timeDiff = target - today;

		// Set days, hours, minutes and seconds
		var diffDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
		var diffHours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var diffMinutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
		var diffSeconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
		
		// Build the output
		var hrs = '';
		var mins = '';
		var secs = '';
		var days = '';
		
		days = '<li><span id="days">' + diffDays + '</span>' + this.configDaysLabel + '</li>';
		
		if(this.config.showHours == true) {
			hrs = '<li><span id="days">' + diffHours + '</span>'  + this.config.hoursLabel + '</li>';
		}
		
		if(this.config.showMinutes == true) {
			mins = '<li><span id="days">' + diffMinutes + '</span>' + this.config.minutesLabel + '</li>';
		}
		
		if(this.config.showSeconds == true) {
			secs = '<li><span id="days">' + diffSeconds + '</span>' + this.config.secondsLabel + '</li>';
		}
		
		
		listWrapper.innerHTML = days + hrs + mins + secs;
		
		wrapper.appendChild(header);
		wrapper.appendchild(listWrapper);
		
		return wrapper;
	}
});
