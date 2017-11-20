/*******************************************************************************
 *                     WEB222 – Assignment 2
 * I declare that this assignment is my own work in accordance with Seneca
 * Academic Policy.  No part of this assignment has been copied manually or
 * electronically from any other source (including web sites) or distributed to
 * other students.
 *
 * Name: __Damian__Murawiecki__ Student ID: __121531164__ Date: ___9/24/2017___
 *
 ******************************************************************************/

/*****************************
 * Step 1
 *****************************/
var e1, e2, e3, e4, e5, e6, e7, str;

/*****************************
 * Step 2
 *****************************/
function capFirstLetter (param1) {
  var stringA = param1.substring(0,1).toUpperCase();
  var stringB = param1.substring(1).toLowerCase();
  var capFirst = stringA + stringB;
  return capFirst;
}
e1 = prompt("Enter your first name: ");
e1 = capFirstLetter(e1);
console.log(capFirstLetter(e1));

/*****************************
 * Step 3
 *****************************/
var getAge = function(yearBorn) {
  var currentYear = new Date().getFullYear();
  var age = currentYear - yearBorn;
  return age;
}
e2 = prompt("Enter the year of your birth: ");
e2 = getAge(e2);
console.log(e2);

/*****************************
 * Step 4
 *****************************/
e3 = prompt("Enter name of the college you attend to: ");
var split = e3.split(' ');
var splitCaps = [];
var i = 0;
var len = split.length;
for (var i = 0; i < len; i++) {
  splitCaps[i] = capFirstLetter(split[i]);
}
console.log(splitCaps);

/*****************************
 * Step 5
 *****************************/
e4 = prompt("Enter your 5 favorite sports (comma separated): ");
e4 = e4.replace(/football/,"soccer");
e4 = e4.split(',');
e5 = prompt("What is your other favorite sport?");
e4.push(e5);
console.log(e4);

/*****************************
 * Step 6
 *****************************/
// e4.forEach(toUpperCase(), e4.length);
for (var i = 0; i < e4.length; i++) {
  e4[i] = e4[i].toUpperCase();
}
e4.sort()
console.log(e4);

/*****************************
 * Step 7
 *****************************/
function getDateString(date) {
  function zeroPad(no) {
    return (no < 10)? '0' + no : no.toString();
  }
  var day = zeroPad(date.getDate());
  var month = zeroPad(date.getMonth() + 1);
  var year = date.getFullYear();
  return year + "-" + month + "-" + day;
}
e6 = new Date();
e7 = getDateString(e6);
console.log(e7);

/*****************************
 * Step 8
 *****************************/
var str = "User info:\n\n" +
    "name (e1): " + e1 + "\n" +
    "age (e2): " + e2 + "\n" + 
    "school (e3): " + e3 + "\n" +
    "favorite sports (e4):\n" +
    "\t" + e4[0].toUpperCase() + "\n" +
    "\t" + e4[1].toUpperCase() + "\n" +
    "\t" + e4[2].toUpperCase() + "\n" +
    "\t" + e4[3].toUpperCase() + "\n" +
    "\t" + e4[4].toUpperCase() + "\n" +
    "\t" + e4[5].toUpperCase() + "\n" +

    "current date (e7): " + e7;

console.log(str);