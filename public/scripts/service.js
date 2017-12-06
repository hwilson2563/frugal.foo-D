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
    function getLocation(lat, lng){
//        return $http({
//             url: "https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&key=AIzaSyClnD3HQ6uqUslLP8aorLZ53am9ggg8bHc",
//             method: "GET"
//         }).then(function(response){
//             console.log(response.data);
//        })
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
