(function(){
    function BudgetService($location, $http){
      var budget = 0;
      var updateBudget = 0;
      var apiData ="";
      var locationInfo = {};
      var table = "";
      var cart = [];
      var picture = "";
      var tip = 0;
      
      return {
        setBudget: setBudget,
        getBudget: getBudget,
        saveTable: saveTable,
        getFoodList: getFoodList,
        getUpdateBudget: getUpdateBudget,
        submitInfo: submitInfo,
        getInfo: getInfo,
        addCart: addCart,
        getCart: getCart,
        deleteFood: deleteFood,
        getPhoto: getPhoto,
        removeCart: removeCart,
        saveTip: saveTip,
        getTip: getTip,
        cleanCart: cleanCart
      };
      function cleanCart(){
        cart = [];
        updateBudget= 0;
        budget=0;
        tip = 0;
        console.log("cartClean");
      }
      function getTip(){
        return tip;
      }
      function saveTip(amount){
        tip = amount;
      }
      function getPhoto(){
        return picture;
      }
      function deleteFood(index){
          updateBudget = updateBudget + index.price;
      }
      function getCart(){
        return cart;
      }
    function removeCart (item){
        updateBudget = updateBudget + item.price;
        cart.pop(item);
      }
      function addCart (item){
        updateBudget = updateBudget - item.price;
        cart.push(item);
        console.log(updateBudget)
        // return updateBudget;
      }
      function saveTable(menu, img){
        picture = img;
        table = menu;
        console.log(table, picture);
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
    
    }
    
    angular 
      .module("app")
      .factory("BudgetService", BudgetService);
  })();


