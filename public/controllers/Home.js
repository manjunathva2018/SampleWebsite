app.controller('homeCtrl',['$scope','$injector',function(s,i){
    const h=i.get('$http'),t=i.get('$timeout'),w=i.get('$window'),st = i.get('$state'),r = i.get('$rootScope');
    r.homeState = true;
    r.productState = false;
    r.contactState = false; 
 }]);