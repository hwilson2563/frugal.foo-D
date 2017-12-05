(function(){
    var mapComponent ={
    templateUrl: "map.html",
    controller: function(BudgetService){
        var vm = this;
        var locations = [
            {name: "ottava via", lat: 42.331598, long: -83.065734},
            {name: "Bobcat bonnies", lat: 42.331675,long: -83.070876},
            {name: "slows", lat: 42.331597, long: -83.075984},
            {name: "Lady of the house", lat: 42.329803, long: -83.064864},
            {name: "Mercury Bar", lat: 42.331145, long: -83.076160},
            {name: "Gold Cash Gold", lat: 42.331603, long: -83.075377},
            {name: "Takoi", lat: 42.331684, long: -83.080834},
            {name: "Corktown Tavern", lat: 42.331589, long: -83.069892},
            {name: "Ima", lat: 42.331154, long: -83.073921},
            {name: "Batch", lat: 42.328422, long: -83.063397},
            {name: "Green Dot", lat: 42.321868, long: -83.071471},
            {name: "Rubbed", lat: 42.331148, long: -83.073919},
            {name: "PJ’s Lager House", lat: 42.331713, long: -83.063237},
            {name: "Nemo’s", lat: 42.331595, long: -83.065400},
            {name: "McShanes", lat: 42.331616, long: -83.066820}
        ];
        vm.initialBudget= BudgetService.getBudget();
        vm.budget= BudgetService.getUpdateBudget();
        console.log(vm.budget);
        console.log(vm.initialBudget);
        BudgetService.getLocation().then(function(response){
            console.log(response);
        })

    }

    
};
    angular
    .module("app")
    .component("mapComponent", mapComponent);
})();
