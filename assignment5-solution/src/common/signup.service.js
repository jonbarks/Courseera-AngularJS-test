(function () {
"use strict";

angular.module('common')
.service('SignupService', SignupService);


SignupService.$inject = ['$http', 'ApiPath'];
function SignupService($http, ApiPath) {
  var service = this;

    service.getMenuItem = function (itemName) {

        var promise = $http.get(ApiPath + '/menu_items/' + itemName + '.json');
        return promise;

    //
        // return $http.get(ApiPath + '/menu_items/' + itemName + '.json')
    //    .then( function successCallback(response) {
    //  return response.data;
    //}
    //);
  };

    service.saveUser = function( user){
        service.user = user;
    }
    service.getUser = function( ){
        return service.user;
    }

}



})();
