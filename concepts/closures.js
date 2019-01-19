// Function constructor

//var john = {
//    name: 'John',
//    yeatOfBirth: 1990,
//    job: 'teacher'
//};
//
//var Person = function(name, yearOfBirth, job) {
//    this.name = name;
//    this.yearOfBirth  = yearOfBirth;
//    this.job = job;    
//}
//
//Person.prototype.calculateAge = function() {
//        console.log(2016 - this.yearOfBirth);
//    }
//
//var john = new Person('John', 1990, 'teacher'); //when we use the new operator, a brand new empty object is created. then Person is called with the arguments that we specify.
//john.calculateAge();


//var years = [1990, 1965, 1937,2005, 1998];
//
//function arrayCalc(arr, fn) {
//    var arrRes = [];
//    for (var i = 0; i < arr.length; i++) {
//        arrRes.push(fn(arr[i]));
//    }
//    return arrRes;
//}
//
//function calculateAge(el) {
//    return 2016 - el;
//}
//
//var ages = arrayCalc(years, calculateAge);
//
//console.log(ages);
//
//
//
////IIFE
//
//CODING CHALLENGE

function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}

Question.prototype.displayQuestion = function() {
    console.log(this.question);
    
    for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ": " + this.answers[i]);
    }   
}

Question.prototype.checkAnswer = function(ans) {
    if(ans === this.correctAnswer) {
        console.log('Correct answer');
    } else {
        console.log('incorrect answer');
    }
    
}

var q1 = new Question('Is JS the coolest programming lang in the world?', ['yes', 'no'], 0);
var q2 = new Question('Is Java the coolest programming lang in the world?', ['yes', 'no'], 1);
var q3 = new Question('Is divya the tiniest person with a baby print jump suit ?', ['yes', 'no'], 0);

var qArr = [q1, q2, q3];

var n = Math.floor(Math.random() * qArr.length);

qArr[n].displayQuestion();

var answer = parseInt(prompt('Please select the correct answer'));

qArr[n].checkAnswer(answer);




