class Reloj {
  constructor(id, delay=100) { //Delay in ms
    this.state = "paused";
    this.delay = delay;
    this.display = document.getElementById(id);
    this.value = 0;
  }
  
  formatTime(ms) {
    var hours   = Math.floor(ms / 3600000);
    var minutes = Math.floor((ms - (hours * 3600000)) / 60000);
    var seconds = Math.floor((ms - (hours * 3600000) - (minutes * 60000)) / 1000);
    var ds = Math.floor((ms - (hours * 3600000) - (minutes * 60000) - (seconds * 1000))/100);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds+'.'+ds;
  }
  
  	start() {
		if (this.state=="paused") {
		  this.state="running";
		  if (!this.interval) {
			var t=this;
			this.interval = setInterval(function(){t.update();}, this.delay);
		  }
		}
	}
  
  reset() {
    this.stop();
    this.value=0;
    this.update();
  }
}

export { Reloj };