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
        getTip: getTip
      };
      function getTip(){
        return tip;
      }
      function saveTip(amount){
        tip = amount;
      }
      function getPhoto(){
        return picture;
      }
      //this is being ran when user deletes from cart to update budget.
      function deleteFood(index){
          updateBudget = updateBudget + index.price;
      }
      //runs when cart page is open
      function getCart(){
        return cart;
      }
    //runs in the menu when someone adds an item over the budget.
    function removeCart (item){
        updateBudget = updateBudget + item.price;
        cart.pop(item);
        console.log(updateBudget)
        // return updateBudget;
      }
      //updates budget when someone adds an item, and adds item to cart.
      function addCart (item){
        updateBudget = updateBudget - item.price;
        cart.push(item);
        console.log(updateBudget)
        // return updateBudget;
      }
      //this runs on the map page and logs the clicked on markers. brings up data on restaurant.
      function saveTable(menu, img){
        picture = img;
        table = menu;
        console.log(table, picture);
      }
      //pulls restaurant info from saved variable/object called "location info" for profile page.
      function getInfo(){
          return locationInfo;
      }
      //setting the clicked on markers info and takes you to the profile page. 
      function submitInfo(info){
          locationInfo = info;
          console.log(locationInfo);
          $location.path("/profile");
      }
    //ran when user selects menu item to update budget. also ran when user opens a page. 
      function getUpdateBudget() {
        return updateBudget;     
      }
    //this is ran when the user selects initial budget and max budget.
      function setBudget(newBudget) {
        budget = newBudget;
        updateBudget = newBudget;
        console.log(budget); 
      }
    //returning max budget
      function getBudget(){
        return budget;
      } 
      //http request to database to get menu items 
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


