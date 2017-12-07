(function(){
    var cartComponent ={
    templateUrl: "cart.html",
    controller: function(BudgetService){
        var vm = this;
    	vm.initialBudget= BudgetService.getBudget();
        vm.budget= BudgetService.getUpdateBudget(); 
        vm.info = BudgetService.getInfo();
        vm.tab = BudgetService.getCart();

        vm.remove= function(index, items){
            BudgetService.deleteFood(items);
            vm.tab.splice(index, 1);
            vm.budget = BudgetService.getUpdateBudget();
        }
    }
};
    angular
    .module("app")
    .component("cartComponent", cartComponent);
})();
