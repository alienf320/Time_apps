import {Reloj} from './reloj.js'

class Timer extends Reloj {
	
	constructor(id, time, delay=100) {
		super(id, delay);
		this.time = time;
	}
    
    update() {
        var t = this;
        if (this.value == 0) {
            this.state == "stop";
            this.stop();
            this.interval = setInterval(function () {
                t.color()
            }, 500);
        } else if (this.state == "running") {
            this.value -= this.delay;
        }
        this.display.innerHTML = this.formatTime(this.value);
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

    stop() {
        if (this.state == "running") {
            this.state = "paused";
        }
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    set() {
        let horas = parseInt(document.getElementById('horas').value);
        let minutos = parseInt(document.getElementById('minutos').value);
        let segundos = parseInt(document.getElementById('segundos').value);

        this.value = (horas * 3600 + minutos * 60 + segundos) * 1000;
        this.display.innerHTML = this.formatTime(this.value);
    }

    color() {
        this.display.style.color = this.display.style.color == 'red' ? '#33FF33' : 'red';
        this.display.style.textShadow = this.display.style.textShadow == 'rgb(219, 0, 26) 0px 0px 3px' ? '0 0 3px #33FF33' : 'rgb(219, 0, 26) 0px 0px 3px';
    }
}

timer = new Timer("timer", 10000);
