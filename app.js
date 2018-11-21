var scores,roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

dice = Math.floor(Math.random() * 6) + 1; // Math.random gives a random value betweem zero and one. we multiply it with 6 and then add one to get a number                                                 between one and 6. 
                                            //Math.floor function here makes a decimal number into a whole number.
console.log(dice);

//Using document Object. we use querySelector Method of the document object to manipulate and change out content on the webpage.

//document.querySelector('#current-' + activePlayer).textContent = dice; //using .textContent.

//document.querySelector('#current-' + activePlayer).innerHTML = '<em> ' + dice + '</em>'; // using .innerHTML. with this you can use html inside the JS code.
                                                                                        //just that the html content needs to be a string.



//var x = document.querySelector('#score-0').textContent;



document.querySelector('.dice').style.display = 'none'; //here we access the style method and then the css
                                                        //property that i want to change(diplay, setting to none).


//document.querySelector('.btn-roll').addEventListener('click', btn); //to use the btn funvtion as function that is called with an event listener, we use it as btn(without the paranthesis), because we dont want to call right here, we want the event listener to call it for us. And hence, the btn function here is a call back function because its not a function called by us but, by another function.

//We can also write our function inside the addEventListner arguments and it will be an anonymous function which is a fumction which doesnt have a name,
// and we cannot use this function outside of this context.

document.querySelector('.btn-roll').addEventListener('click', function() {
    //1. RANDOM NUMBER
    
    var dice = Math.floor(Math.random() * 6) + 1 // we are declaring the variable in this scope
    
    //2. Display the result
    var diceDOM = document.querySelector('.dice') // here we are putting document.querySelector into a variable for ease of reuasablity.
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png'; //accessing the img tag via the src, and changing the value of src using JS.
    
    
    //3. update the round score only if the roll number was not a 1.
    //here we use getelementbyid instead of querySelector. Apparently it is faster.
//    document.getElementById('score-0').textContent = '0';
//    document.getElementById('score-1').textContent = '0';
//    document.getElementById('current-0').textContent = '0';
//    document.getElementById('current-1').textContent = '0';
    
    if (dice !== 1) {
        //Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore; //using .textContent.
    } else {
         //nextPlayer
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //using ternary operator instead of if else to change player status.
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        //Now we need to change the class of whatever players turn it is to active (to show the red dot next to player and to show the player in BOLD. We use the .classList function and its various attributes to make changes to the class we select as shown below.
//        document.querySelector('.player-0-panel').classList.remove('active'); 
//        document.querySelector('.player-1-panel').classList.add('active'); 
        
        //Instead of using add and remove as shown above we are using the toggle. What toggle does is that it adds the class if it doesnt exist
        // and removes it, if it does exist.
        
        document.querySelector('.player-0-panel').classList.toggle('active'); 
        document.querySelector('.player-1-panel').classList.toggle('active'); 
        
        document.querySelector('.dice').style.display = 'none'; //here we are setting the display property of the dice image to none, if one is rolled.
        
        


        

    }

});



