( function () {
'use strict';

    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // *** Set up UI states ***
        $stateProvider

        // Home page
            .state('home', {
                url: '/',
                template: '<a ui-sref="categoryList">Menu Categories</a>'
            })

            .state('categoryList', {
                url: '/categories',
                templateUrl: 'categoryList.template.html',
                controller: 'CategoriesController as categoryList',
                resolve: {
                    categories: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })

            .state('items', {
                url: '/items/{shortName}',
                templateUrl: 'itemsList.template.html',
                controller: 'ItemsController as itemsList',
                resolve: {
                    items: ['$stateParams', 'MenuDataService',
                        function ($stateParams, MenuDataService) {
                            return MenuDataService.getItemsForCategory( $stateParams.shortName)
                        }]
                }
            });
    }

})();