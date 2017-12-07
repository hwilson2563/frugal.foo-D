(function(){
    var menuComponent ={
    templateUrl: "menu.html",
    controller: function(BudgetService){
        var vm = this;
        document.getElementById("overbudget").style.display = "none";
        vm.menu=[];
    	vm.initialBudget= BudgetService.getBudget();
        vm.budget= BudgetService.getUpdateBudget(); 
        vm.info = BudgetService.getInfo();
        vm.overbudgetRemove = function() {
            document.getElementById("overbudget").style.display = "none";
        }

        BudgetService.getFoodList().then(function(response){
            vm.menu = response.data;
            console.log(vm.menu);
        });

        vm.add = function(addItem) {
            console.log(addItem);
            BudgetService.addCart(addItem);
            vm.budget= BudgetService.getUpdateBudget();
            if(vm.budget < 0){
                document.getElementById("overbudget").style.display = "block";
                BudgetService.removeCart(addItem);
                vm.budget= BudgetService.getUpdateBudget();
                return;
            }
            else {
                document.getElementById("overbudget").style.display = "none";
            }
        };


    }
};
    angular
    .module("app")
    .component("menuComponent", menuComponent);
})();
