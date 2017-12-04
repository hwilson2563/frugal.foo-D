(function(){
	var homeComponent={
	templateUrl:"home.html",
	controller: function(BudgetService){
		var vm = this;
        vm.budget = 0;
        vm.submitBudget = function(budget){
          vm.budget = budget;
          console.log(vm.budget);
          BudgetService.setBudget(budget)
          // .then(function(response){
          //   vm.budget = response.data
          //   console.log(vm.budget);
          // });  
        };
      }
  }
      angular
      .module("app")
      .component("homeComponent", homeComponent)
})();
