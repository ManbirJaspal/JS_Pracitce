var scores,roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

dice = Math.floor(Math.random() * 6) + 1; // Math.random gives a random value betweem zero and one. we multiply it with 6 and then add one to get a number                                                 between one and 6. 
                                            //Math.floor function here makes a decimal number into a whole number.
console.log(dice);

//Using document Object. we use querySelector Method of the document object to manipulate and change out content on the webpage.

document.querySelector('#current-' + activePlayer).textContent = dice; //using .textContent.

//document.querySelector('#current-' + activePlayer).innerHTML = '<em> ' + dice + '</em>'; // using .innerHTML. with this you can use html inside the JS code.
                                                                                        //just that the html content needs to be a string.



var x = document.querySelector('#score-0').textContent;

console.log(x);

document.querySelector('.dice').style.display = 'none'; //here we access the style method and then the css
                                                        //property that i want to change(diplay, setting to none).