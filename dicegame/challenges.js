var scores,roundScore, activePlayer, gamePlaying, winScore, prevDice;

init(); //calling the initalization function.

//dice = Math.floor(Math.random() * 6) + 1; // Math.random gives a random value betweem zero and one. we multiply it with 6 and then add one to get a number                                                 between one and 6. 
                                            //Math.floor function here makes a decimal number into a whole number.
//console.log(dice);

//Using document Object. we use querySelector Method of the document object to manipulate and change out content on the webpage.

//document.querySelector('#current-' + activePlayer).textContent = dice; //using .textContent.

//document.querySelector('#current-' + activePlayer).innerHTML = '<em> ' + dice + '</em>'; // using .innerHTML. with this you can use html inside the JS code.
                    
//var x = document.querySelector('#score-0').textContent;



//document.querySelector('.dice').style.display = 'none'; //here we access the style method and then the css
                                                        //property that i want to change(diplay, setting to none).


//document.querySelector('.btn-roll').addEventListener('click', btn); //to use the btn funvtion as function that is called with an event listener, we use it as btn(without the paranthesis), because we dont want to call right here, we want the event listener to call it for us. And hence, the btn function here is a call back function because its not a function called by us but, by another function.

//We can also write our function inside the addEventListner arguments and it will be an anonymous function which is a fumction which doesnt have a name,
// and we cannot use this function outside of this context.

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
    //1. RANDOM NUMBER
    
    var dice = Math.floor(Math.random() * 6) + 1; // we are declaring the variable in this scope
    var dice2 = Math.floor(Math.random() * 6) + 1;
    
    //2. Display the result
    var diceDOM = document.querySelector('.dice'); // here we are putting document.querySelector into a variable for ease of reuasablity.
    var diceDOM2 = document.querySelector('.dice2');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    diceDOM2.style.display = 'block';
    diceDOM2.src = 'dice-' + dice2 + '.png'; //accessing the img tag via the src, and changing the value of src using JS.
    
    
    //3. update the round score only if the roll number was not a 1.
    //here we use getelementbyid instead of querySelector. Apparently it is faster.
//    document.getElementById('score-0').textContent = '0';
//    document.getElementById('score-1').textContent = '0';
//    document.getElementById('current-0').textContent = '0';
//    document.getElementById('current-1').textContent = '0';
    
    if (dice !== 1 && dice2 !== 1 ) {
        //Add score
        roundScore += dice + dice2;
        document.querySelector('#current-' + activePlayer).textContent = roundScore; //using .textContent.
    } else {
         nextPlayer();
    }
    }

});
    //IMPLEMENTING THE HOLD FUNCTION
    
    document.querySelector('.btn-hold').addEventListener('click', function() {
        if(gamePlaying) {
         //1. add current score to player global score
        scores[activePlayer] += roundScore; //updating scores in the scores array.
        
        //2. update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]; 

        //3. check if player won the game, then add the winner class to player- -panel and remove the active player status(red dot)
        if (scores[activePlayer] >= winScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
            
        } else {
            nextPlayer();
        }
        }
    });


function nextPlayer() {
         //nextPlayer
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //using ternary operator instead of if else to change player status.
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        //Now we need to change the class of whatever players turn, to active (to show the red dot next to player and to show the player in BOLD. We use the .classList function and its various attributes to make changes to the class we select as shown below.
//        document.querySelector('.player-0-panel').classList.remove('active'); 
//        document.querySelector('.player-1-panel').classList.add('active'); 
        
        //Instead of using add and remove as shown above we are using the toggle. What toggle does is that it adds the class if it doesnt exist
        // and removes it, if it does exist.
        
        document.querySelector('.player-0-panel').classList.toggle('active'); 
        document.querySelector('.player-1-panel').classList.toggle('active'); 
        
        document.querySelector('.dice').style.display = 'none'; //here we are setting the display property of the dice image to none, if one is rolled.
    
        document.querySelector('.dice2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init); //event listener for the new-game button click.


function init() { // here we are creating a game initializer, everything will be set to the default state when this function is called.
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true; // adding a status variable, we need this so that the rest of buttons work only when a player is playing.
    
    
    document.getElementById('input').style.visibility = "visible";
    document.getElementById('input-btn').style.visibility = "visible";
    document.getElementById('lbl').style.visibility = "visible";
    document.querySelector('.dice').style.display = 'none'; 
    document.querySelector('.dice2').style.display = 'none'; 
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1'; 
    document.getElementById('name-1').textContent = 'Player 2'; 
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}

// *NOTE: do not use button tag in chrome for event listener triggers. //It reloads the page.

//Challenge part 2
document.querySelector('#input-btn').addEventListener('click', function() {
   var input = document.getElementById('input').value;
    winScore = input;
    document.getElementById('input').style.visibility = "hidden";
    document.getElementById('input-btn').style.visibility = "hidden";
    document.getElementById('lbl').style.visibility = "hidden";
    
});
