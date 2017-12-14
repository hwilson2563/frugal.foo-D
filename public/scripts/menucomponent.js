(function(){
    var menuComponent ={
    templateUrl: "menu.html",
    controller: function(BudgetService, $timeout){
        var vm = this;
        document.getElementById("overbudget").style.display = "none";
        vm.menu=[];
    	vm.initialBudget= BudgetService.getBudget();
        vm.budget= BudgetService.getUpdateBudget(); 
        vm.info = BudgetService.getInfo();
        vm.overBudgetItems = [];
        vm.overbudgetRemove = function() {
            document.getElementById("overbudget").style.display = "none";
             var elements = document.getElementsByClassName("typeFood");
             console.log(elements);
                for (var i=0; i < elements.length; ++i){
                     elements[i].style.display = "block";
             }
            }
        BudgetService.getFoodList().then(function(response) {
            vm.menu = response.data;
            vm.menu.forEach(function(item){
                if(item.price > vm.budget){
                    vm.overBudgetItems.push(item);
                    item.over = "over";
                }

            })
        
        });

        vm.add = function(addItem) {
            
           addItem.restaurant = vm.info.name;
            BudgetService.addCart(addItem);
            vm.budget= BudgetService.getUpdateBudget();
                      
            BudgetService.getFoodList().then(function(response) {
            vm.menu = response.data;
            vm.menu.forEach(function(item){
                if(item.price > vm.budget){
                    vm.overBudgetItems.push(item);
                    item.over = "over";
                }
               

            })
        
        });
            if(vm.budget < 0){
                document.getElementById("overbudget").style.display = "block";
                BudgetService.removeCart(addItem);
                vm.budget= BudgetService.getUpdateBudget();
                var elements = document.getElementsByClassName("typeFood");
                for (var i=0; i < elements.length; ++i){
                    elements[i].style.display = "none";
                }
                return;
                }
                else {
                document.getElementById("overbudget").style.display = "none";
                document.getElementById("itemAdded").className = "slideDown";
                $timeout(function() {
                    document.getElementById("itemAdded").classList.remove("slideDown");
                }, 1500);
                }
        };


    }
};
    angular
    .module("app")
    .component("menuComponent", menuComponent);
})();
