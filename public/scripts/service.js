(function(){
    function BudgetService($http){
        var budget = 0;
        var updateBudget = 0;
        var apiData ="";
    return {
        setBudget: setBudget,
        getBudget: getBudget,
        getLocation: getLocation,
        newBudget: newBudget,
        getUpdateBudget: getUpdateBudget
    };
    function getUpdateBudget() {
    return updateBudget;     
    }
    function setBudget(newBudget) {
        budget = newBudget;
        updateBudget = newBudget;
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
            apiData=response;
            return apiData;
        });

   }
   function newBudget(objPrice){
        updateBudget = updateBudget - objPrice;
        return updateBudget;
   }
    


    }
    angular 
    .module("app")
    .factory("BudgetService", BudgetService);
})();
