(function(){
	var homeComponent={
	templateUrl:"home.html",
	controller: function(BudgetService){
		var vm = this;
        vm.budget = 0;
        vm.tip = "";
        vm.submitBudget = function(budget){
          vm.budget = budget;
          console.log(vm.budget);
          document.getElementById("choosetip").style.display = "block";
          document.getElementById("budgetchooser").style.display = "none";
        };
        vm.tipOne =function(){
          document.getElementById("tipbar").style.display = "block";
           vm.tip = vm.budget * .15;
           vm.tip = Math.round(vm.tip*100)/100;
           BudgetService.saveTip(vm.tip);
           budget=vm.budget - vm.tip;
            console.log(budget);
            BudgetService.setBudget(vm.budget);
          };
        vm.tipTwo =function(){
            document.getElementById("tipbar").style.display = "block";
           vm.tip=( vm.budget * .20);
           vm.tip = Math.round(vm.tip*100)/100;
           BudgetService.saveTip(vm.tip);
           budget=vm.budget - vm.tip;
            console.log(budget);
            BudgetService.setBudget(vm.budget);
        };        
        vm.tipThree =function(){
            document.getElementById("tipbar").style.display = "block";
           vm.tip=( vm.budget * .25);
           vm.tip = Math.round(vm.tip*100)/100;
           BudgetService.saveTip(vm.tip);
            vm.budget = vm.budget - vm.tip;
            console.log(vm.budget);
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
