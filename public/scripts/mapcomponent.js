(function(){
    var mapComponent ={
    templateUrl: "map.html",
    controller: function(BudgetService){
        var vm = this;
        vm.budget=BudgetService.getBudget();
        console.log(vm.budget);
        BudgetService.getLocation().then(function(response){
            console.log(response);
        })

    }

    
};
    angular
    .module("app")
    .component("mapComponent", mapComponent);
})();
