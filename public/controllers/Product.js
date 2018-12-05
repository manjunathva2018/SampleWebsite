app.controller('productCtrl',['$scope','$injector',function(s,i){
    const h=i.get('$http'),t=i.get('$timeout'),w=i.get('$window'),st = i.get('$state'),r = i.get('$rootScope');
    r.homeState = false;
    r.productState = true;
    r.contactState = false; 
 }]);