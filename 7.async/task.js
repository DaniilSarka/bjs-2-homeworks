class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}
	addClock(time, callback) {
		if (time.length == 0 || callback.length == 0) {
			throw new Error('Отсутствуют обязательные аргументы');
		}


		let timeCheck = this.alarmCollection.find(item => item.time === time);
		if (timeCheck) {
			console.warn('Уже присутствует звонок на это же время')
		}

		this.alarmCollection.push({
			callback: callback,
			time: time,
			canCall: true
		})
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(item => {
			return item.time !== time
		});
	}

	getCurrentFormattedTime() {
		let timeToday = new Date();
		let hours = timeToday.getHours();
		let minutes = timeToday.getMinutes();
		if (hours < 10) {
			hours = "0" + hours.toString();
		} else {
			hours = hours.toString();
		}

		if (minutes < 10) {
			minutes = "0" + minutes.toString();
		} else {
			minutes = minutes.toString();
		}

		let fullTime = hours + ":" + minutes;
		return fullTime;

	}

	start() {
		if (this.intervalId !== undefined) {
			return
		} else {
			this.intervalId = setInterval(() => {
				this.alarmCollection.forEach((item) => {
					if ((this.getCurrentFormattedTime() === item.time) && item.canCall === true) {
						item.canCall = false;
						item.callback();
					}
				})
			}, 1000)
		}
	}


	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;

	}

	resetAllCalls() {
		this.alarmCollection.forEach(item => {
			item.canCall = true;
		})
	}


	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}

}
 