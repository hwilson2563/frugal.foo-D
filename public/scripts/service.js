(function(){
    function BudgetService(){
        var budget = 0;
    return {
        setBudget: setBudget,
        getBudget: getBudget
    };
    function setBudget(newBudget) {
        budget = newBudget;
        console.log(budget);
        
    }
    function getBudget(budget){
        return budget;
    }
    }
    angular 
    .module("app")
    .factory("BudgetService", BudgetService);
})();
