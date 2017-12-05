(function(){
    var mapComponent ={
    templateUrl: "map.html",
    controller: function(BudgetService){
        var vm = this;

        vm.initMap =(function() {
     var locations = [
                        {name: "Ottava Via", lat: 42.331598, lng: -83.065734},
                        {name: "Bobcat Bonnies", lat: 42.331675, lng: -83.070876},
                        {name: "Slows", lat: 42.331597, lng: -83.075984},
                        {name: "Lady of the house", lat: 42.329803, lng: -83.064864},
                        {name: "Mercury Bar", lat: 42.331145, lng: -83.076160},
                        {name: "Gold Cash Gold", lat: 42.331603, lng: -83.075377},
                        {name: "Takoi", lat: 42.331684, lng: -83.080834},
                        {name: "Corktown Tavern", lat: 42.331589, lng: -83.069892},
                        {name: "Ima",lat: 42.331154, lng: -83.073921},
                        {name: "Batch", lat: 42.328422, lng: -83.063397},
                        {name: "Green Dot", lat: 42.321868, lng: -83.071471},
                        {name: "Rubbed", lat: 42.331148, lng: -83.073919},
                        {name: "Pj's Lager House", lat: 42.331713, lng: -83.063237},
                        {name: "Nemo's", lat: 42.331595, lng: -83.065400},
                        {name: "McShanes", lat: 42.331616, lng: -83.066820}
                  ];
            
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: {lat: 42.331598, lng:-83.065734}
            });
            
            var labels = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"]
            

            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
                });
            });
            
        
            var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
        })();


        vm.initialBudget= BudgetService.getBudget();
        vm.budget= BudgetService.getUpdateBudget();
        console.log(vm.budget);
        console.log(vm.initialBudget);
          
        // BudgetService.getLocation().then(function(response){
        //     console.log(response);

    }

    
};
    angular
    .module("app")
    .component("mapComponent", mapComponent);
})();
