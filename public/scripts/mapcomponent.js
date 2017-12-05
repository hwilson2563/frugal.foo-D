(function(){
    var mapComponent ={
    templateUrl: "map.html",
    controller: function(BudgetService){
        var vm = this;

        vm.labels = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N"];
        vm.locations = [
            {lat: 42.331598, long: -83.065734},
            {lat: 42.331675,long: -83.070876},
            {lat: 42.331597, long: -83.075984},
            {lat: 42.329803, long: -83.064864},
            {lat: 42.331145, long: -83.076160},
            {lat: 42.331603, long: -83.075377},
            {lat: 42.331684, long: -83.080834},
            {lat: 42.331589, long: -83.069892},
            {lat: 42.331154, long: -83.073921},
            {lat: 42.328422, long: -83.063397},
            {lat: 42.321868, long: -83.071471},
            {lat: 42.331148, long: -83.073919},
            {lat: 42.331713, long: -83.063237},
            {lat: 42.331595, long: -83.065400},
            {lat: 42.331616, long: -83.066820}
        ];
        
        vm.map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: {lat:42.331598, lng:-83.065734}
        });
        vm.labels = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N"];
        
        vm.initialBudget= BudgetService.getBudget();
        vm.budget= BudgetService.getUpdateBudget();
        console.log(vm.budget);
        console.log(vm.initialBudget);
       // BudgetService.getLocation(locations).then(function(response){
         //   console.log(response);
       // });

    }

    
};
    angular
    .module("app")
    .component("mapComponent", mapComponent);
})();
