import {Reloj} from './reloj.js'


class Stopwatch extends Reloj {
  
	update() {
		if (this.state=="running") {
		  this.value += this.delay;
		}
		this.display.innerHTML = this.formatTime(this.value);
	}
  
  
	stop() {
		if (this.state=="running") {
			this.state="paused";
			if (this.interval) {
			  clearInterval(this.interval);
			  this.interval = null;
			}
		}
	}
 
}

stopwatch = new Stopwatch("stopwatch");