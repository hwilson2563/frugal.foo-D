(function(){
    var emailComponent ={
    templateUrl: "email.html",
    controller: function (BudgetService, $http){
        var vm = this;
    	vm.initialBudget= BudgetService.getBudget();
        vm.budget= BudgetService.getUpdateBudget(); 
        vm.info = BudgetService.getInfo();
        vm.tab = BudgetService.getCart();
        console.log($http);

       vm.sendEmail = function(data){
        $http.post("/email", data);
        
       }

    }

}
    
    angular
    .module("app")
    .component("emailComponent", emailComponent);
})();
