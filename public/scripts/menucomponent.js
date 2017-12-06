(function(){
    var menuComponent ={
    templateUrl: "menu.html",
    controller: function(BudgetService){
    	var vm = this;
    	  vm.initialBudget= BudgetService.getBudget();
        vm.budget= BudgetService.getUpdateBudget(); 
        vm.info = BudgetService.getInfo();
        vm.foodList = [];
        BudgetService.getFoodList()
    }
};
    angular
    .module("app")
    .component("menuComponent", menuComponent);
})();
