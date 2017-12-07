(function(){
    var mapComponent ={
      templateUrl: "map.html",
      controller: function(BudgetService, $location, $scope) {
        var vm = this;
  
        vm.initMap =(function() {
          var locations = [
            {name: "Ottava Via", lat: 42.331598, lng: -83.065734, id:"ChIJlz0bgE8tO4gRxtTRYHmb7S8", menuTable: "ottavavia", img:"images/ottava-via.jpg"},
            {name: "Bobcat Bonnies", lat: 42.331675, lng: -83.070876, id:"ChIJc6rXgFotO4gR5W1F9AeEbFA",menuTable: "bobcatbonnies", img:"images/BobcatBonnies.jpg"},
            {name: "Slows", lat: 42.331597, lng: -83.075984, id:"ChIJ4_MxxFktO4gROCopKZ2zD-o", menuTable: "slows", img:"images/slows.jpg"},
            {name: "Mercury Bar", lat: 42.331145, lng: -83.076160, id:"ChIJw_wTylktO4gR--_q7dJIu2U", menuTable: "mercurybar", img:"images/mercurybar.jpg"},
            {name: "Gold Cash Gold", lat: 42.331603, lng: -83.075377, id:"ChIJq_J5w1ktO4gRdEmC_VhgKlU", menuTable: "goldcashgold", img:"images/GoldCashGold.jpg"},
            {name: "Takoi", lat: 42.331684, lng: -83.080834, id:"ChIJ2QeajacyO4gRR3XtR0mA8rg", menuTable: "takoi", img:"images/takoi.jpg"},
            {name: "Corktown Tavern", lat: 42.331589, lng: -83.069892, id:"ChIJ9Z4mmVotO4gRXxT20Rgis80", menuTable: "corktowntavern", img:"images/corktowntavern.jpg"},
            {name: "Green Dot", lat: 42.321868, lng: -83.071471, id:"ChIJsZibe2ctO4gRXxgCmv1swtk", menuTable: "greendot", img:"images/GreenDot.jpg"},
            {name: "Pj's Lager House", lat: 42.331713, lng: -83.063237, id:"ChIJiYvaqkgtO4gR3FVQRUhdPic", menuTable: "lagerhouse", img:"images/lagerhouse.jpeg"},
            {name: "Brooklyn Street Local", lat: 42.3317, lng:-83.0636, id:"ChIJRd1EV08tO4gR-pZQF3y5uSU", menuTable: "brooklynstreetlocal", img:"images/Brooklyn_Street_Local.jpg"},
            {name: "McShanes", lat: 42.331616, lng: -83.066820, id:"ChIJrdacYUUtO4gRLwQmzHdpp-k", menuTable: "mcshanes", img:"images/McShanes.jpg"}
          ];
  
          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: {lat: 42.331598, lng:-83.065734}
          });
  
          var labels = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"]
          var infowindow = new google.maps.InfoWindow();
          var service = new google.maps.places.PlacesService(map);
          var markers = locations.map(function(location, i) {
            return new google.maps.Marker({
              title: location.name,
              id: location.id,
              position: location,
              table: location.menuTable,
              img: location.img,
              label: labels[i % labels.length]
            });
          });
          
          for (var i = 0; i < markers.length; i++) {
            markers[i].addListener("click", function() {
              BudgetService.saveTable(this.table, this.img);
              service.getDetails({ placeId: this.id}, function(place, status) {
                console.log(place);    
                var restaurant=place;
                BudgetService.submitInfo(restaurant);
                $scope.$apply(function(){
                    $location.path("/profile");
                })
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
