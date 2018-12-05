var app=angular.module('index',['ui.router','ngRoute']);

app.config(function($stateProvider,$urlRouterProvider,$locationProvider){
   var homeState={
       name:'home',
       url:'/home',
       templateUrl:'./views/Home.html',
       controller:'homeCtrl'
   };
    var productState={
        name:'product',
        url:'/product',
        templateUrl:'./views/product.html',
        controller:'productCtrl'
    };
    var contactState={
        name:'contact',
        url:'/contact',
        templateUrl:'./views/Contact.html',
        controller:'contactCtrl'
    };
    $urlRouterProvider.otherwise('/home');
    $stateProvider.state(homeState);
    $stateProvider.state(productState);
    $stateProvider.state(contactState);
    $locationProvider.hashPrefix('!');
});
/*
app.config(function($routeProvider) {
    $routeProvider
    .when("/dashboard", {
        templateUrl : "./views/Dashboard.html",
        controller:'dashboardCtrl'
    })
    .when("/about", {
        templateUrl:'./views/About.html',
        controller:'aboutCtrl'
    })
    .when("/contact", {
        templateUrl:'./views/Contact.html',
        controller:'contactCtrl'
    })
    .otherwise({
        template : "<h1>None</h1><p>Nothing has been selected</p>"
    });
});*/

app.controller('indexCtrl',['$scope','$injector',function(s,i){
    const h=i.get('$http'),t=i.get('$timeout'),w=i.get('$window'),st = i.get('$state'),r = i.get('$rootScope');
    s.activateState = function(state){
        if(state=='home'){
            r.homeState = true;
            r.productState = false;
            r.contactState = false;
            console.log("homeState",r.homeState);
        }
        else if(state=='product'){
            r.homeState = false;
            r.productState = true;
            r.contactState = false;
            console.log("productState",r.productState);
        }
        else if(state=='contact'){
            r.homeState = false;
            r.productState = false;
            r.contactState = true;
            console.log("contactState",r.contactState);
        }
    }
   
 }]);