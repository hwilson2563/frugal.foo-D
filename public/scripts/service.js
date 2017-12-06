(function(){
    function BudgetService($location, $http){
      var budget = 0;
      var updateBudget = 0;
      var apiData ="";
      var locationInfo = {};
      var table = "";
      
      return {
        setBudget: setBudget,
        getBudget: getBudget,
        saveTable: saveTable,
        getFoodList: getFoodList,
        newBudget: newBudget,
        getUpdateBudget: getUpdateBudget,
        submitInfo: submitInfo,
        getInfo: getInfo
      };
      function saveTable(menu){
        table = menu;
        console.log(table);
      }
      function getInfo(){
          return locationInfo;
      }

      function submitInfo(info){
          locationInfo = info;
          console.log(locationInfo);
          $location.path("/profile");
      }
    
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
      function getFoodList(){
        console.log(table);
        return $http({
          url:"/menus/" + table,
          method:"GET"
        }).then(function(response){
          console.log(response);
          return response;
        })
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
