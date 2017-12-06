(function(){
    var menuComponent ={
    templateUrl: "menu.html",
    controller: function(BudgetService){
        var vm = this;
        vm.menu={};
    	vm.initialBudget= BudgetService.getBudget();
        vm.budget= BudgetService.getUpdateBudget(); 
        vm.info = BudgetService.getInfo();
        vm.foodList = [];
        BudgetService.getFoodList().then(function(response){
            vm.menu = response.data;
        });
    }
};
    angular
    .module("app")
    .component("menuComponent", menuComponent);
})();
