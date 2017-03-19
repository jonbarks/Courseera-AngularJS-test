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
    };

    service.userSignedUp = false;

    service.setUserIsSignedUp = function( signedUp){
        service.userSignedUp = signedUp;
    }

    service.isUserSignedUp = function( ){
        return service.userSignedUp;
    }

    service.saveUser = function( user){
        service.user = user;
        service.setUserIsSignedUp( true);
    }
    service.getUser = function( ){
        return service.user;
    }

}



})();
