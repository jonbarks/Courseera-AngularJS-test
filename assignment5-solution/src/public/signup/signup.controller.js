(function () {
"use strict";

angular.module('common')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignupService', 'ApiPath'];
function SignupController(SignupService, ApiPath) {
    var ctrl = this;
    ctrl.user = {};
    ctrl.signupAttempted = false;

    ctrl.isUserSignedUp = function(){
        return SignupService.isUserSignedUp();
    }


    ctrl.signup = function()  {
        ctrl.signupAttempted = true;
        var promise = SignupService.getMenuItem( ctrl.user.menuitem);
        promise.then( function(response){
            ctrl.user.menuitemdata = response.data;
            SignupService.saveUser( ctrl.user);
        })
        .catch( function( error) {
            SignupService.setUserIsSignedUp( false);
        })
    }
    ctrl.getUser = function(){
        return SignupService.getUser();
    }

    ctrl.getMenuItemImageUrl = function() {
        var user = ctrl.getUser();
        var url = ApiPath + '/images/' + user.menuitem + '.jpg';
        return url;

    }
}

})();
