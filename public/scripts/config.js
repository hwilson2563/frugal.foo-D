(function(){
    angular
        .module("app")
        .config(function($routeProvider) {
            $routeProvider
            .when("/home", {
                template: "<home-component></home-component>"
            })
            .when("/cart", {
                template:"<cart-component></cart-component>"
            })
            .when("/map", {
                template:"<map-component></map-component>"
            })
            .otherwise({ redirectTo: "/home" });
        });
})();
