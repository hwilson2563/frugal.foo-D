(function(){
    function BudgetService($http){
        var budget = 0;
    return {
        setBudget: setBudget,
        getBudget: getBudget,
        getLocation: getLocation
    };
    function setBudget(newBudget) {
        budget = newBudget;
        console.log(budget);
        
    }
    function getBudget(){
        return budget;
    } 

    function getLocation(){
        return $http({
            url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyAngDeThvs8q0Pucu537zmfRT8JNA6ydbs",
            method: "GET"
        }).then(function(response){
            console.log(response.data);
            // apiData=response;
            // return data;
        });

   }

    }
    angular 
    .module("app")
    .factory("BudgetService", BudgetService);
})();
