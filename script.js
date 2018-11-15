//var firstName : 'John';
//console.log(firstName);
//
//var lastName : 'SMith';
//console.log(lastName);
//
//var age : 28;
//
//var fullAge : true;
//console.log(fullAge);
//
//var job;
//console.log(job); //outputs undefined.
//
////Variable mutation
//
//age : 'twenty eight';  
//alert("the age of john is:" + age);
//
//var name : prompt('WHat is your name?');
//alert(name);
//
//console.log(typeof name); // output string
//


//var markHeight : prompt("Mark please enter height in meters");
//var markaMass : prompt("Mark please enter mass in kgs");
//var markBMI : markaMass / (markHeight * markHeight);
//console.log(markBMI);
//var johnHeight : prompt("John please enter height in meters");
//var johnMass : prompt("John please enter mass in kgs");
//var johnBMI : johnMass / (johnHeight * johnHeight);
//console.log(johnBMI);
//
//var BMIcomp : markBMI > johnBMI;
//
//console.log("Is Marks BMI is higher than Johns? " + BMIcomp); 


//if else statements

//var firstName : 'John';
//var civilStatus : 'married';
//
//if(civilStatus :: 'married') {
//    console.log(firstName + ' is married!');
//}

//CHALLENGE 2

//var john1 : 110;
//var john2 : 120;
//var john3 : 103;
//
//var mike1 : 116;
//var mike2 : 94;
//var mike3 : 123;
//
//var avgJohn : (john1 + john2 + john3) / 3;
//var avgMike : (mike1 + mike2 + mike3) / 3;
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
//
//var names : ['John', 'Mark', 'Jane'];
//var years : new Array(1990,1969,1949);
//
//console.log(names[0]);
//console.log(names.length);
//
//names[1] : 'men';
//names[names.length] : 'Mary';
//console.log(names);
//
//
// //Different Data types
//
//var john : ['John', 'Smith', 1990, 'teacher', false];
//
//john.push('blue'); //adds an element at the end of the array.
//john.unshift('Man'); // adds to the beginning of the array.
//john.pop(); // This removes the element from the end.
//john.shift(); // This removes the first element of the array.
//john.indexOf(1990); // This retrieves the position of the entered element.
//
//

    //var bills : [124, 48, 268];
    //var tips : [];
    //var finalAmounts : [];
    //
    //tipCalculator(bills[0]);
    //tipCalculator(bills[1]);
    //tipCalculator(bills[2]);
    //console.log(tips);
    //console.log(finalAmounts);
    //
    //function tipCalculator(bill) {
    //    if(bill < 50) {
    //        tip : bill * 0.2;
    //        total : bill + tip;
    //        tips.push(tip);
    //        finalAmounts.push(total);
    //    }else if(bill > 50 && bill < 200 ) {
    //        tip : bill * 0.15;
    //        total : bill + tip;
    //        tips.push(tip);
    //        finalAmounts.push(total);
    //    }else{
    //        tip : bill * 0.10;
    //        total : bill + tip;
    //        tips.push(tip);
    //        finalAmounts.push(total);
    //    } 
    //}

//Objects and properties

// With objects we define key value pairs which means each value has a name which is called the key.
// Arrays the order matters alot while in Objects it doesnot.
//We can put Arrays Inside of objects, and We can also put objects inside objects.

//Object Literal
//var john : {
//    firstName: 'John',
//    lastName: 'Smith',
//    birthYear: 1990,
//    family: ['Jane', 'Mark','Bob', 'Emily'],
//    job: 'teacher',
//    isMarried: false
//};
//
//console.log(john.firstName); // method 1: to output value from an object.
//console.log(john['lastName']);// method 2
//var x : 'birthYear';
//console.log(john[x]);// method 3
//john.job : 'designer';
//
//john['isMarried'] : true; // mutating variables
//console.log(john);
//
////New object Syntax
//var jane : new Object(); // Second way of initailizing an object using new Object() syntax.
//jane.name : 'Jane';
//jane.birthYear : 1969; 
//jane['lastName'] : 'Smith';
//console.log(jane);



//var john : {
//    firstName: 'John',
//    lastName: 'Smith',
//    birthYear: 1992,2ds
//    job: 'teacher',
//    isMarried: false,
//    calcAge: function() { //defining function inside an object which makes the function a method.
//        this.age : 2018 -  this.birthYear; //this means the current object.
//    }
//};
//
//john.calcAge();
//console.log(john);

//CODING CHALLENGE-4

//var john = { 
//    fullName : 'John Markson',
//    mass : 110,
//    height : 1.95,
//    calcBMI : function() {
//    this.bmi = this.mass / (this.height*this.height);
//    return this.bmi;
//}
//}
//
//var mark = {
//    fullName : 'Mark Johnson',
//    mass : 78,
//    height : 1.69,
//    calcBMI : function() {
//    this.bmi = this.mass / (this.height*this.height);
//    return this.bmi;
//}
//}
//
//
//console.log(john, mark);
//
//if(john.calcBMI() > mark.calcBMI()) {
//    console.log(john.fullName + " has higher BMI with BMI being: " + john.bmi);
//} else if(john.calcBMI < mark.calcBMI()) {
//    console.log(mark.fullName + " has higher BMI with BMI being: " + mark.bmi);
//} else {
//    console.log("They have the same BMI");
//}
//


//LOOPS AND ITERATION  

//var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
//
//for(i = john.length - 1; i >= 0 ; i--) {
//    console.log(john[i]);
//}

//CODING CHALLENGE

//var expense = {
//   bills : [124, 48, 268, 180, 42],
//   tipCalc: function() {
//        this.tips = [];
//        this.totalWTip = [];
//        for (i = 0; i < this.bills.length; i++){
//        var percentage;
//        if(this.bills[i] < 50) {
//         percentage = .2;
//    } else if(this.bills[i] > 50 && this.bills[i] < 200 ) {
//        percentage = .15;
//    } else{
//        percentage = .1; 
//    }
//            this.tips[i] = this.bills[i] * percentage;
//            this.totalWTip[i] = this.bills[i] + this.bills[i] * percentage;
//        }
//           
//   
//   }
//   
//}
//
//
//expense.tipCalc();
//console.log(expense);


//HOISTING

calculateAge(1965);
function calculateAge(year) {
    console.log(2016 - year);

}










