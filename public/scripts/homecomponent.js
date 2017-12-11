(function(){
	var homeComponent={
	templateUrl:"home.html",
	controller: function(BudgetService){
		var vm = this;
        vm.budget = 0;
        vm.tip = "";
        vm.initialbudget = 0;
        vm.submitBudget = function(budget){
          vm.initialbudget = budget;
          vm.budget = budget;
          console.log(vm.budget);
          document.getElementById("budgetchooser").className = "slideout";
          document.getElementById("choosetip").style.display = "flex";
          document.getElementById("choosetip").className = "slidein";
          BudgetService.setBudget(vm.initialbudget);
        };
        vm.tipOne =function(){
          document.getElementById("tipbar").style.display = "block";
           vm.tip = vm.initialbudget * .15;
           vm.tip = Math.round(vm.tip*100)/100;
           BudgetService.saveTip(vm.tip);
           vm.budget=vm.initialbudget - vm.tip;
         
            BudgetService.setBudget(vm.budget);
          };
        vm.tipTwo =function(){
            document.getElementById("tipbar").style.display = "block";
           vm.tip=( vm.initialbudget * .20);
           vm.tip = Math.round(vm.tip*100)/100;
           BudgetService.saveTip(vm.tip);
           vm.budget= vm.initialbudget - vm.tip;
          
            BudgetService.setBudget(vm.budget);
        };        
        vm.tipThree =function(){
            document.getElementById("tipbar").style.display = "block";
           vm.tip=( vm.initialbudget * .25);
           vm.tip = Math.round(vm.tip*100)/100;
           BudgetService.saveTip(vm.tip);
            vm.budget = vm.initialbudget - vm.tip;
    
            BudgetService.setBudget(vm.budget);
       };
        
          
          
          // .then(function(response){
          //   vm.budget = response.data
          //   console.log(vm.budget);
          // });  
      }
  }
      angular
      .module("app")
      .component("homeComponent", homeComponent)
})();
