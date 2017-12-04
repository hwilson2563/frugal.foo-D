(function(){
    angular
        .module("app")
        .config(function($routeProvider) {
            $routeProvider
            .when("/home", {
                template: "<homeComponent></homeComponent>"
            })
            .when("/cart", {
                template:"<cartComponent></cartComponent>"
            })
            .when("/map", {
                template:"<mapComponent></mapComponent>"
            })
            .otherwise({ redirectTo: "/home" });
        });
})();
