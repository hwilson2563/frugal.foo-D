(function(){
	var homeComponent={
	templateUrl:"index.html",
	controller: function(BudgetService){
		var vm = this;
        vm.budget = 0;
        vm.submitBudget = function(){
    	BudgetService.submitBudget(budget).then(function(response){vm.budget = response.data});
        };
	}
angular
      .module("app")
      .component("homeComponent", homeComponent);
}})();
