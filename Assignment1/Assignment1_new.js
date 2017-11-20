/*******************************************************************************
 *                     WEB222 – Assignment 1
 * I declare that this assignment is my own work in accordance with Seneca 
 * Academic Policy.  No part of this assignment has been copied manually or 
 * electronically from any other source (including web sites) or distributed to 
 * other students.
 * 
 * Name: _Damian_Murawiecki_ Student ID: _121531164_ Date: _September 12, 2017_
 *
 ******************************************************************************/

/*****************************
* Task 1
*****************************/
 
var studentName = "Damian";
var numOfCourses = 4;
var program = "CPA";
var hasPtJob = true;
var hasPtJobString = hasPtJob ? "have" : "don't have";
var welcomeMsg = "My name is " + studentName + " and I'm in " + program + " program. I'm taking " + numOfCourses + " courses in this semester and I " + hasPtJobString + " a part-time job now.";
 
console.log(welcomeMsg);
 
/*****************************
* Task 2
*****************************/
 
var currentTime = new Date();
var currentYear = currentTime.getFullYear();
 
var age = prompt("Please enter your age:");
console.log("I was born in the year of " + (currentYear - age) + ".");
 
var estGradYear = prompt("Enter the number of year you expect to study in the college:");
console.log("You will graduate from Seneca college in the year of " + (currentYear + eval(estGradYear)) + ".");
 
 
/*****************************
* Task 3
*****************************/
 
var cels = 30;
var celToFahr = cels * 9/5 + 32; 
 
console.log(cels + "°C is " + celToFahr + "°F.")
 
var fahr = 50
var fahrToCel = (fahr - 32) * 5/9; 
 
console.log(fahr + "°F is " + fahrToCel + "°C.")
 
/*****************************
* Task 4
*****************************/
 
for (var i = 0; i < 10; i++) 
{
     if (i % 2 == 0) 
     {
          console.log(I + " is even");
     }
     else
     {
          console.log(i + " is odd");
     }
}
 
/*****************************
* Task 5
*****************************/
 
function largerNum(param1, param2) {
  return param1 > param2 ? param1 : param2;
}
 
var greaterNum = function(param1, param2) {
  return param1 > param2 ? param1 : param2;
}
 
console.log(largerNum(28, 21));
console.log(greaterNum(3, 35));
 
/*****************************
* Task 6
*****************************/
 
function evaluator() {
  var sumOfArgs = 0;
  var avgScore = 0;
  
  for (var i = 0; i < arguments.length; i++) {
    sumOfArgs += arguments[i];
  }
  avgScore = sumOfArgs / arguments.length;
  return avgScore > 50 ? "greater than 50" : "less or equal 50" ;
 
console.log(evaluator(50,75,27));    // 50.66
console.log(evaluator(10,60,70));    // 46.66
console.log(evaluator(50,75,100));   // 75
 
 
/*****************************
* Task 7
*****************************/
 
function grader(score) {
  
  var grade ;
  if (score >= 80) {
    grade = "A";
  }
  else if (score >= 70) {
    grade = "B";
  }
  else if (score >= 60) {
    grade = "C";
  }
  else if (score >= 50) {
    grade = "D";
  }
  else {
    grade = "F";
  }
  return grade;
}
 
console.log(grader(49));
console.log(grader(50));
console.log(grader(99));
 
/*****************************
* Task 8
*****************************/
 
function showMultiples (num, numMultiples) {
  for (var i = 1; i <= numMultiples; ++i) {
    console.log(num + " x " + i + " = " + (num * i));
  }
}
 
showMultiples(5,4);
