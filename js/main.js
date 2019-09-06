//In the space below each problem, write the code to answer. This page connects to index.html

/* 1.--------
*/

// Day of Week
var today = new Date();
var thisDay = today.getDay();
var myDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
var thisDay = myDays[thisDay];
    // Code attained from https://trans4mind.com/personal_development/JavaScript/time2.htm

// Current time
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
if (minute < 10) {
	 minute = "0" + minute;
  }
var suffix = "AM";
	if (hour >= 12) {
    suffix = "PM";
    hour = hour - 12;
	}
	if (hour == 0) {
	 hour = 12;
	}
    // Code attained from https://www.quackit.com/javascript/tutorial/javascript_date_and_time.cfm

document.getElementById("answer1").innerHTML =
  "Today is " + thisDay + "." + "<br>Current time : " + hour + ":" + minute + ":" + second + " " + suffix;

/* 2.--------
*/

var today = new Date ();
var day = today.getDate();
var month = today.getMonth();
var year = today.getFullYear();
if (day < 10) {
  day = "0" + day;
}
if (month < 10) {
  month = "0" + month;
}

document.getElementById("answer2").innerHTML =
  month + "-" + day + "-" + year + "<br>" + month + "/" + day + "/" + year + "<br>" + day + "/" + month + "/'" + year;

/* 3.--------
*/

paper.install(window);
paper.setup(document.getElementById('mainCanvas'));

var tool2 = new Tool();
tool2.onMouseDown = function(event) {
  var c = Shape.Circle(event.point.x,
  event.point.y, 20)
  c.fillColor = "green";
}

paper.view.draw();

/* Brown, Ethan. Learning JavaScript: JavaScript Essentials for Modern Application Development
  (Kindle Locations 380-382). O'Reilly Media. Kindle Edition. */
