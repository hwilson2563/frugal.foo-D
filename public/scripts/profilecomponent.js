(function(){
    var profileComponent ={
    templateUrl: "profile.html",
    controller: function(BudgetService){
        var vm = this;
        vm.info = BudgetService.getInfo();
        console.log(vm.info);
        vm.initialBudget= BudgetService.getBudget();
        vm.budget= BudgetService.getUpdateBudget();
        vm.img = BudgetService.getPhoto();
    }
};
    angular
    .module("app")
    .component("profileComponent", profileComponent);
})();
