(function () {
"use strict";

angular.module('common')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignupService'];
function SignupController(SignupService) {
    var ctrl = this;
    ctrl.user = {};
    ctrl.userSignedUp = false;
    ctrl.signupAttempted = false;

    ctrl.signup = function()  {
        ctrl.signupAttempted = true;
        var promise = SignupService.getMenuItem( ctrl.user.menuitem);
        promise.then( function(response){
            ctrl.user.menuitemdata = response.data;
            SignupService.saveUser( ctrl.user);
            ctrl.userSignedUp = true;
        })
        .catch( function( error) {
            ctrl.userSignedUp = false;
        })
    }
}

})();
