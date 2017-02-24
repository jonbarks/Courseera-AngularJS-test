( function(){

    angular.module("MyApp", [])
        .controller("MyController", MyController);

    MyController.$inject = ["$scope", "$filter"];

    function MyController( $scope, $filter) {

        $scope.inputText = "";
        $scope.textLength = 0;
        $scope.displayTextLength = function(){
            $scope.textLength = $scope.inputText.length;
        }
        $scope.uppercaseText = function(){
            var upCase = $filter('uppercase');
            $scope.inputText = upCase($scope.inputText);
        }

    }
})();