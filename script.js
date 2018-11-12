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


var markHeight = prompt("Mark please enter height in meters");
var markaMass = prompt("Mark please enter mass in kgs");
var markBMI = markaMass / (markHeight * markHeight);
console.log(markBMI);
var johnHeight = prompt("John please enter height in meters");
var johnMass = prompt("John please enter mass in kgs");
var johnBMI = johnMass / (johnHeight * johnHeight);
console.log(johnBMI);

var BMIcomp = markBMI > johnBMI;

console.log("Is Marks BMI is higher than Johns? " + BMIcomp); 
