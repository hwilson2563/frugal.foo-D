(function(){
    var menuComponent ={
    templateUrl: "menu.html",
    controller: function(BudgetService){
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
                    elements[i].style.display = "flex";
                }
            }
        BudgetService.getFoodList().then(function(response) {
            vm.menu = response.data;
            vm.menu.forEach(function(item){
                if(item.price > vm.initialBudget){
                    console.log(item);
                    vm.overBudgetItems.push(item);
                    item.over = "over";
                    console.log(item);
                }

            })
        
        });

        vm.add = function(addItem) {
            console.log(addItem);
            BudgetService.addCart(addItem);
            vm.budget= BudgetService.getUpdateBudget();
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
                
            }
        };


    }
};
    angular
    .module("app")
    .component("menuComponent", menuComponent);
})();

