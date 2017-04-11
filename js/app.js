var app = angular.module("app", ['ngRoute', 'ngStorage']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl:"../html/templates/home.html",
            controller:"mainController"
        })
        .when('/product',{
            templateUrl:"../html/templates/product/product-list.html",
            controller:"productListController"
        })

});
app.config(function ($locationProvider) {
    $locationProvider.hashPrefix('');
});