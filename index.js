var request = require('request');

// request.post('http://api.justyo.co/yoall/', {
//   form: {api_token: 'b931eed2-1c90-4a53-8415-2263c48322ff'}
// });

var weekendlist = ["10:30", "12:30", "13:30", "14:30", "16:30", "18:30", "20:30", "21:30"];
var weeklist = ["07:20", "07:30", "11:10", "13:10", "15:12", "16:12", "17:00", "19:00",  "20:00",  "21:00",  "21:30"];

var lasttimecheck = "";
setInterval(function(){
  var date = new Date();
  var time = date.getHours() + ":" + date.getMinutes();
  
  if(time !== lasttimecheck){
    lasttimecheck = time;
    console.log(time);
  }
}, 2 * 1000);
