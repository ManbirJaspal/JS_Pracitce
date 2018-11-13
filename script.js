//var firstName = 'John';
//console.log(firstName);
//
//var lastName = 'SMith';
//console.log(lastName);
//
//var age = 28;
//
//var fullAge = true;
//console.log(fullAge);
//
//var job;
//console.log(job); //outputs undefined.
//
////Variable mutation
//
//age = 'twenty eight';  
//alert("the age of john is:" + age);
//
//var name = prompt('WHat is your name?');
//alert(name);
//
//console.log(typeof name); // output string
//


//var markHeight = prompt("Mark please enter height in meters");
//var markaMass = prompt("Mark please enter mass in kgs");
//var markBMI = markaMass / (markHeight * markHeight);
//console.log(markBMI);
//var johnHeight = prompt("John please enter height in meters");
//var johnMass = prompt("John please enter mass in kgs");
//var johnBMI = johnMass / (johnHeight * johnHeight);
//console.log(johnBMI);
//
//var BMIcomp = markBMI > johnBMI;
//
//console.log("Is Marks BMI is higher than Johns? " + BMIcomp); 


//if else statements

//var firstName = 'John';
//var civilStatus = 'married';
//
//if(civilStatus == 'married') {
//    console.log(firstName + ' is married!');
//}

//CHALLENGE 2

//var john1 = 110;
//var john2 = 120;
//var john3 = 103;
//
//var mike1 = 116;
//var mike2 = 94;
//var mike3 = 123;
//
//var avgJohn = (john1 + john2 + john3) / 3;
//var avgMike = (mike1 + mike2 + mike3) / 3;
//
//if (avgJohn > avgMike){
//    console.log("John is the winner with a score of " +avgJohn);
//} else if(avgJohn < avgMike) {
//        console.log("Mike is the winner with a score of " +avgMike);
//} else {
//    console.log("DRAW!!")
//
//}

// FUNCTIONS

//ARRAYS

var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990,1969,1949);

console.log(names[0]);
console.log(names.length);

names[1] = 'men';
names[names.length] = 'Mary';
console.log(names);


 //Different Data types

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue'); //adds an element at the end of the array.
john.unshift('Man'); // adds to the beginning of the array.
john.pop(); // This removes the element from the end.
john.shift(); // This removes the first element of the array.
john.indexOf(1990); // This retrieves the position of the entered element.














