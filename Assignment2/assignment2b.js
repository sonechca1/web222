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

// an array of course objects
var courses = [
    { code: 'APC100', name: 'Applied Professional Communications', hours: 3, url: 'http://www.senecacollege.ca/' },
    { code: 'IPC144', name: 'Introduction to Programming Using C', hours: 4, url: 'https://scs.senecac.on.ca/~ipc144/' },
    { code: 'ULI101', name: 'Introduction to Unix/Linux and the Internet', hours: 4, url: 'https://cs.senecac.on.ca/~fac/uli101/live/' },
    { code: 'IOS110', name: 'Introduction to Operating Systems Using Windows', hours: 4, url: 'https://cs.senecac.on.ca/~fac/ios110' },
    { code: 'EAC150', name: 'College English', hours: 3, url: null },
];

// prototype object for creating student objects
var student = { 
    name: "", 
    dob: new Date(),
    sid: "",
    program: "", 
    gpa: 4.0,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
};

/************************************************************
 * Start your Part B code here. Do not change the code above.
 ************************************************************/
// task 1
console.log("*** Task 1 ***\n");
var lastObj = courses.pop();
console.log("Course " + lastObj.code + " was deleted from the array (courses)");


var ibc233 = { code: 'IBC233', name: 'iSERIES Business Computing', hours: 4, url: 'https://cs.senecac.on.ca/~ibc233/' };
var oop244 = { code: 'OOP244', name: 'Introduction to Object Oriented Programing', hours: 4, url: 'https://scs.senecac.on.ca/~oop244/' };
var web222 = { code: 'WEB222', name: 'Internet I - Internet Fundamentals', hours: 4, url: 'https://scs.senecac.on.ca/~wei.song/web222/' };
var dbs201 = { code: 'DBS201', name: 'Introduction to Database Design and SQL', hours: 4, url: 'https://cs.senecac.on.ca/~dbs201/' };

console.log("Adding new course objects into the array (courses)\n");
courses.push(ibc233,oop244,web222,dbs201);

console.log("Course objects in the array (courses):");
for (var i = 0; i < courses.length; i++) {
    console.log(courses[i].code + ", " + courses[i].name + ", " 
                + courses[i].hours + " hours/week, website: " + courses[i].url);
}

// task 2
console.log("\n\n*** Task 2 ***\n");
var st1 = Object.create(student);
var st2 = Object.create(student);
var st3 = Object.create(student);
var st4 = Object.create(student);

st1.name = "John Smith";
st1.dob = new Date(1999, 8, 10);
st1.sid = "010456101";
st1.program = "CPA";
st1.gpa = 4;

st2.name = "Jim Carrey";
st2.dob = new Date(1992, 0, 17);
st2.sid = "012345678";
st2.program = "CPD";
st2.gpa = 3.5;

st3.name = "Justin Bieber";
st3.dob = new Date(1994, 2, 1);
st3.sid = "0987654321";
st3.program = "CAN";
st3.gpa = 3;

st4.name = "Justin Trudeau";
st4.dob = new Date(1992, 0, 12);
st4.sid = "123456789";
st4.program = "CAN";
st4.gpa = 4;

var students = [];
students.push(st1,st2,st3,st4);

console.log("Student objects in the array (students):");
students.forEach(function(element) {
    console.log(students.indexOf(element) + ": " + element.toString());
});