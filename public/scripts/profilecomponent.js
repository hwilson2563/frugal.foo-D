(function(){
    var profileComponent ={
    templateUrl: "profile.html",
    controller: function(BudgetService){
        var vm = this;
        vm.info = BudgetService.getInfo();
        console.log(vm.info);
    }
};
    angular
    .module("app")
    .component("profileComponent", profileComponent);
})();
