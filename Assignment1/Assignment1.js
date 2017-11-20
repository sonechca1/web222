/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

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
// console.log(currentYear);

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
          console.log(i);
     }
     else
     {
          console.log(i + " is odd");
     }
}

/*****************************
* Task 5
*****************************/




/*****************************
* Task 6
*****************************/




/*****************************
* Task 7
*****************************/




/*****************************
* Task 8
*****************************/


