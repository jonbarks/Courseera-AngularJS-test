( function () {

    angular.module( 'data')
        .service( 'MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];
    function MenuDataService( $http) {

        this.getAllCategories = function() {
            return $http( {
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/categories.json"
            }).then(function (result) {
                var categories = result.data;
                return categories;
            });
        }

        this.getItemsForCategory = function ( categoryShortName) {
            return $http( {
                method: "GET",
                url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName)
            }).then(function (result) {
                return result.data;
                //var items = result.data.menu_items;
                //return items;
            });
        }
    }

})();