(function(){
  var mapComponent ={
    templateUrl: "map.html",
    controller: function(BudgetService) {
      var vm = this;

      vm.initMap =(function() {
        var locations = [
          {name: "Ottava Via", lat: 42.331598, lng: -83.065734, id:"ChIJlz0bgE8tO4gRxtTRYHmb7S8"},
          {name: "Bobcat Bonnies", lat: 42.331675, lng: -83.070876, id:"ChIJc6rXgFotO4gR5W1F9AeEbFA"},
          {name: "Slows", lat: 42.331597, lng: -83.075984, id:"ChIJ4_MxxFktO4gROCopKZ2zD-o"},
          {name: "Mercury Bar", lat: 42.331145, lng: -83.076160, id:"ChIJw_wTylktO4gR--_q7dJIu2U"},
          {name: "Gold Cash Gold", lat: 42.331603, lng: -83.075377, id:"ChIJq_J5w1ktO4gRdEmC_VhgKlU"},
          {name: "Takoi", lat: 42.331684, lng: -83.080834, id:"ChIJ2QeajacyO4gRR3XtR0mA8rg"},
          {name: "Corktown Tavern", lat: 42.331589, lng: -83.069892, id:"ChIJ9Z4mmVotO4gRXxT20Rgis80"},
          {name: "Batch", lat: 42.328422, lng: -83.063397, id:"ChIJj4k6iE8tO4gRgL1jtCw72ns"},
          {name: "Green Dot", lat: 42.321868, lng: -83.071471, id:"ChIJsZibe2ctO4gRXxgCmv1swtk"},
          {name: "Pj's Lager House", lat: 42.331713, lng: -83.063237, id:"ChIJiYvaqkgtO4gR3FVQRUhdPic"},
          {name: "Brooklyn Street Local", lat: 42.3317, lng:-83.0636, id:"ChIJRd1EV08tO4gR-pZQF3y5uSU"},
          {name: "McShanes", lat: 42.331616, lng: -83.066820, id:"ChIJrdacYUUtO4gRLwQmzHdpp-k"}
        ];

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: {lat: 42.331598, lng:-83.065734}
        });

        var labels = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"]
        var infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            title: location.name,
            id: location.id,
            position: location,
            label: labels[i % labels.length]
          });
        });
        
        for (var i = 0; i < markers.length; i++) {
          markers[i].addListener("click", function() {
            BudgetService.getLocation(this.name);
            service.getDetails({ placeId: this.id}, function(place, status) {
              console.log(place, status);    
            });
          });
        }

       

        


        var markerCluster = new MarkerClusterer(map, markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      })();

      vm.initialBudget= BudgetService.getBudget();
      vm.budget= BudgetService.getUpdateBudget();
      console.log(vm.budget);
      console.log(vm.initialBudget);
    }
  };

  angular
    .module("app")
    .component("mapComponent", mapComponent);
})();
