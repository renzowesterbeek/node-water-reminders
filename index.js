var request = require('request');
var fs = require('fs');

function yoAll(){
  request.post('http://api.justyo.co/yoall/', {
    form: {api_token: 'b931eed2-1c90-4a53-8415-2263c48322ff'}
  });
}

function zerofix(number){
  if(number < 10){
    return "0" + number
  } else {
    return number;
  }
}

function writeLog(data){
  var date = new Date();
  var timestamp = date.getDate() + "-" + parseInt(date.getMonth()+1) + ", " + zerofix(date.getHours()) + ":" + zerofix(date.getMinutes());
  var writedata = timestamp + " - " + data + '\n';
  fs.appendFile('log.txt', writedata, function (err) {
    if (err) throw err;
  });
}

var lasttimecheck = "";
setInterval(function(){
  var date = new Date();
  var time = zerofix(date.getHours()) + ":" + zerofix(date.getMinutes());

  if(time !== lasttimecheck){
    var day = date.getDay();
    var timelist = [];
    // Adjust timelist to weekend or week
    if(day == 0 || day == 6){
      timelist = ["10:30", "12:30", "13:30", "14:30", "16:30", "18:30", "20:30", "21:30"];
    } else {
      timelist = ["07:20", "07:30", "11:10", "13:10", "15:12", "16:12", "17:00", "19:00",  "20:00",  "21:00",  "21:30"];
    }

    // Check for time in list
    if(timelist.indexOf(time) >= 0){
      console.log("Sending yo");
      writeLog("Sending yo");
      yoAll();
    }
    lasttimecheck = time;
    console.log(time);
  }
}, 5 * 1000);
