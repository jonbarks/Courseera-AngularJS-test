(function () {
    'use strict';

    angular.module('LunchCheckApp', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchMenuText = "";
        $scope.salutation = "";

        $scope.checkLunchMenu = function () {
            var arrayOfStrings = $scope.lunchMenuText.split(',');
            if( arrayOfStrings.length === 1 && arrayOfStrings[0] === "")
                 $scope.salutation = "Please enter data first";
            else if( arrayOfStrings.length > 3)
                $scope.salutation = "Too much!";
            else
                $scope.salutation = "Enjoy!";
        };
    }

})();
