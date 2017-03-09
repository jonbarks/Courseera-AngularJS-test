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
                template: 'Home <br/><a ui-sref="categoryList">categories</a>'
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

            ;
            //.state('items', {
            //    url: '/items/{shortName}',
            //    templateUrl: 'item-detail.template.html',
            //    controller: 'ItemDetailController as itemDetail',
            //    resolve: {
            //        items: ['$stateParams', 'MenuDataService',
            //            function ($stateParams, MenuDataService) {
            //                return MenuDataService.getItemsForCategory()
            //                    .then(function (items) {
            //                        return items[$stateParams.shortName];
            //                    });
            //            }]
            //    }
            //});
    }

})();