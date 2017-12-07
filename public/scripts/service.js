(function(){
    function BudgetService($location, $http){
      var budget = 0;
      var updateBudget = 0;
      var apiData ="";
      var locationInfo = {};
      var table = "";
      var cart = [];
      
      
      return {
        setBudget: setBudget,
        getBudget: getBudget,
        saveTable: saveTable,
        getFoodList: getFoodList,
        newBudget: newBudget,
        getUpdateBudget: getUpdateBudget,
        submitInfo: submitInfo,
        getInfo: getInfo,
        addCart: addCart,
        getCart: getCart,
        deleteFood: deleteFood
      };

      function deleteFood(index){
          updateBudget = updateBudget + index.price;
      }

      function getCart(){
        return cart;
      }

      function addCart (item){
        updateBudget = updateBudget - item.price;
        cart.push(item);
        console.log(updateBudget)
        // return updateBudget;
      }

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
