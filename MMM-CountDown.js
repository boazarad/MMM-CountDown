Module.register("MMM-CountDown",{
	// Default module config.
	defaults: {
		event: "New Millenium:",
		date: "3000-01-01"
		
	},

	// set update interval
	start: function() {
		var self = this;
		setInterval(function() {
			self.updateDom(); // no speed defined, so it updates instantly.
		}, 1000*60*10); //perform every 10 minutes
	},
	
	// Update function
	getDom: function() {
		var wrapper = document.createElement("div");
		
		var timeWrapper = document.createElement("div");
		var textWrapper = document.createElement("div");
		var unitWrapper = document.createElement("sup");
		
		textWrapper.className = "align-left week dimmed medium";
		timeWrapper.className = "time bright xlarge light";
		unitWrapper.className = "dimmed";
		
		textWrapper.innerHTML=this.config.event;
		
		var today = new Date(Date.now());
		//var target = new Date("2018-09-31");
		var target = new Date(this.config.date);
		var timeDiff = target.getTime() - today.getTime();
		var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
		
		timeWrapper.innerHTML = diffDays;
		unitWrapper.innerHTML = " days";
				
		wrapper.appendChild(textWrapper);
		timeWrapper.appendChild(unitWrapper);
		wrapper.appendChild(timeWrapper);
		//wrapper.innerHTML =  diffDays;*/
		
		return wrapper;
	}
});
