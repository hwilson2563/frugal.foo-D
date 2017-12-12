(function(){
    var emailComponent ={
    templateUrl: "email.html",
    controller: function (BudgetService, $http){
        var vm = this;
    	vm.initialBudget= BudgetService.getBudget();
        vm.budget= BudgetService.getUpdateBudget(); 
        vm.info = BudgetService.getInfo();
        vm.tab = BudgetService.getCart();
        vm.tip = BudgetService.getTip();
        vm.info = BudgetService.getInfo();
        vm.total =(vm.initialBudget - vm.budget);
        vm.emailInfo = {};
        vm.newtip = vm.total*(vm.tip/(vm.initialBudget + vm.tip));
        vm.newtip = Math.round(vm.newtip*100)/100;
        console.log(vm.newtip);
        console.log($http);
       vm.sendEmail = function(email, comment, total, budget, food, data){
        vm.emailInfo.emailAddress = email;
        vm.emailInfo.comment = comment;
        vm.emailInfo.total = total;
        vm.emailInfo.budget = budget;
        vm.emailInfo.order = food;
        console.log(vm.emailInfo);
        $http({
            method: "POST",
            url: "/email",
            data: vm.emailInfo
        }).then(function(response) {
            console.log(response);
        });
        
       }

    }

}
    
    angular
    .module("app")
    .component("emailComponent", emailComponent);
})();
