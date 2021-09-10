window.addEventListener("load", calculateTime)

function calculateTime() {
  var date = new Date();
  var monthNumber = date.getMonth();
  var dayNumber = date.getDay();
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var ampm = hour >= 12 ? 'PM' : "AM";
  var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var monthNames = ["Jun", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "dec"]

  day = day < 10 ? "0" + day : day;
  hour = hour % 12;
  hour = hour ? hour : "12";
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;

  document.getElementById("month").innerHTML = monthNames[monthNumber]
  document.getElementById("date").innerHTML = day
  document.getElementById("day").innerHTML = dayNames[dayNumber];
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = minute;
  document.getElementById("ampm").innerHTML = ampm;

  setTimeout(calculateTime, 200);
}