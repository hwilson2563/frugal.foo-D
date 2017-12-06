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
            .when("/profile", {
                template:"<profile-component></profile-component>"
            })
            .when("/menu", {
                template:"<menu-component></menu-component>"
            })
            .when("/cart", {
                template:"<cart-component></cart-component>"
            })
            .when("/email", {
                template:"<email-component></email-component>"
            })
            .otherwise({ redirectTo: "/home" });
        });
})();
