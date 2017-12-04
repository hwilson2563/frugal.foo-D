(function(){
	var homeComponent={
	templateUrl:"home.html",
	controller: function(BudgetService){
		var vm = this;
        vm.budget = 0;
        vm.submitBudget = function(budget){
          vm.budget = budget;
          console.log(vm.budget);
    	BudgetService.submitBudget(budget).then(function(response){vm.budget = response.data});
        };
      }
    }
      angular
      .module("app")
      .component("homeComponent", homeComponent)
})();
