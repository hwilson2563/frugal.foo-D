(function(){
    var mapComponent ={
    templateUrl: "map.html",
    controller: function(BudgetService){
        var vm = this;
        vm.initialBudget= BudgetService.getBudget();
        vm.budget= BudgetService.getUpdateBudget();
        console.log(vm.budget);
        console.log(vm.initialBudget);
        BudgetService.getLocation().then(function(response){
            console.log(response);
        })

    }

    
};
    angular
    .module("app")
    .component("mapComponent", mapComponent);
})();
