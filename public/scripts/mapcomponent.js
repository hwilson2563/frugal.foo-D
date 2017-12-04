(function(){
    var mapComponent ={
    templateUrl: "map.html",
    controller: function(BudgetService){
        var vm = this;
        vm.budget=BudgetService.getBudget();
        console.log(vm.budget);
    }
};
    angular
    .module("app")
    .component("mapComponent", mapComponent);
})();
