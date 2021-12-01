const setAlarm = process.argv.slice(2);



const Alarm = function() {
for (time of setAlarm) {
    if (time > 0) {
      let secs = parseInt(time) * 1000
      setTimeout(() => {
      process.stdout.write('\x07');
      }, secs);
    } 
  }
}


Alarm()