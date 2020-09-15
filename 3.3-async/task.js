class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    if (!id) {
      throw new Error('')
    }
    if (this.alarmCollection.some((item) => id === item.id)) {
      console.error('Будильник с таким id уже существует');
      return;
    }
    this.alarmCollection.push({id, time, callback})
  };

  removeClock(id) {
    this.alarmCollection = this.alarmCollection.filter((item) => item.id !== id);
    const status = !this.alarmCollection.some((item) => item.id);
    return status;
  };

  getCurrentFormattedTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  start() {
    const checkClock = (alarm) => {
      if (this.getCurrentFormattedTime() === alarm.time) {
        alarm.callback();
      }
    };
  
    if (this.timerId === null) {
      this.timerId = setInterval(() => this.alarmCollection.forEach((item) => checkClock(item)), 10000);
    }
  };

  stop() {
    clearInterval(this.timerId);
    this.timerId = null;
  };

  printAlarms() {
    console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
    this.alarmCollection.forEach((item) => console.log(`Будильник №${item.id} заведен на ${item.time}`));
  };

  clearAlarms() {
    clearInterval(this.timerId);
    this.alarmCollection.splice(0, this.alarmCollection.length);
  };
};

const testCase = () => {
  const alarms = new AlarmClock();

  alarms.addClock('11:19', () => { console.log('Просыпайся')}, 1);
  alarms.addClock('11:20', () => { console.log('Поднимайся'); alarms.removeClock(2) }, 2);
  alarms.addClock('11:21', () => { 
    console.log('Вставай'); 
    alarms.clearAlarms();
    alarms.printAlarms();
  }, 3);

  alarms.printAlarms();
  alarms.start();
}

testCase()

