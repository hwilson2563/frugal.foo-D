(function(){
    var mapComponent ={
    templateUrl: "map.html",
    controller: function(BudgetService){
        var vm = this;
        vm.budget = 0;
        BudgetService.getBudget().then(function(response){
            vm.budget = reponse.data;
            console.log(vm.budget);
        });
    }
};
    angular
    .module("app")
    .component("mapComponent", mapComponent);
})();
