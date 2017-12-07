(function(){
    var cartComponent ={
    templateUrl: "cart.html",
    controller: function(BudgetService){
        var vm = this;
    	vm.initialBudget= BudgetService.getBudget();
        vm.budget= BudgetService.getUpdateBudget(); 
        vm.info = BudgetService.getInfo();
        vm.tab = BudgetService.getCart();
        vm.tip = "";

        vm.remove= function(index, items){
            BudgetService.deleteFood(items);
            vm.tab.splice(index, 1);
            vm.budget = BudgetService.getUpdateBudget();
        }
        vm.tipOne =function(){
          document.getElementById("tipbar").style.display = "block";
          var total = vm.initialBudget-vm.budget ;
           vm.tip=( total * .15);
           BudgetService.saveTip(vm.tip);
        };
        vm.tipTwo =function(){
            document.getElementById("tipbar").style.display = "block";
            var total = vm.initialBudget-vm.budget ;
           vm.tip=( total * .20);
           BudgetService.saveTip(vm.tip);
        };        
        vm.tipThree =function(){
            document.getElementById("tipbar").style.display = "block";
             var total = vm.initialBudget-vm.budget ;
           vm.tip=( total * .25);
           BudgetService.saveTip(vm.tip);
        };
    }
};
    angular
    .module("app")
    .component("cartComponent", cartComponent);
})();
