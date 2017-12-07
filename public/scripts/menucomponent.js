(function(){
    var menuComponent ={
    templateUrl: "menu.html",
    controller: function(BudgetService){
        var vm = this;
        vm.menu=[];
    	vm.initialBudget= BudgetService.getBudget();
        vm.budget= BudgetService.getUpdateBudget(); 
        vm.info = BudgetService.getInfo();
     

        BudgetService.getFoodList().then(function(response){
            vm.menu = response.data;
            console.log(vm.menu);
        });

        vm.add = function(addItem) {
            console.log(addItem);
            BudgetService.addCart(addItem);
            vm.budget= BudgetService.getUpdateBudget();
            if(vm.budget <= 0){
                document.getElementById("overbudget").style.display = "block";
                BudgetService.removeCart(addItem);
                vm.budget= BudgetService.getUpdateBudget();
            }
        };


    }
};
    angular
    .module("app")
    .component("menuComponent", menuComponent);
})();
