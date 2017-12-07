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

        vm.add = function(addItem) {
            console.log(addItem);
            BudgetService.addCart(addItem);
            vm.budget= BudgetService.getUpdateBudget();

            if(vm.budget <= 0){
                console.log("over budget");
                
            }
        };


    }
};
    angular
    .module("app")
    .component("menuComponent", menuComponent);
})();
