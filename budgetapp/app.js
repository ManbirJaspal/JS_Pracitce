var budgetController = (function() {
    
    var x = 23;
    
    var add = function(a) {
        return x + a;
    }
    
    return {
        publicTest: function(b) { //we do this so that we can use the add function(which is private) from outside the function.
            return (add(b));
        }
    }
    
})();

var UIController = (function() {
    
})();

var controller = (function(budgetCtrl, UICtrl) {
    
    var z = budgetCtrl.publicTest(5);
    return {
        anotherPublic: function() {
            console.log(z);
        }
    }
    
})(budgetController, UIController);