( function() {
    'use strict';

    var app = angular.module('NarrowItDownApp', []);
    app.controller( 'NarrowItDownController', NarrowItDownController);
    app.service('MenuSearchService', MenuSearchService);
    //app.directive('foundItems', FoundItemsDirective);
    app.constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com');

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController( MenuSearchService){
        var self = this;
        self.searchTerm;
        self.narrowItDown = function(){
            var promise = MenuSearchService.getMatchedMenuItems( self.searchTerm);
            promise.then(function (response) {
                self.found = response;
            })
            .catch(function (error) {
                console.log("Something went terribly wrong.");
            });
    }

    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService( $http, ApiBasePath){
        var self = this;

        self.getMatchedMenuItems = function(searchTerm){
            return $http( {
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            }).then(function (result) {
                var allMenuItems = result.data.menu_items;
                var foundItems = [];

                allMenuItems.forEach( function( item) {
                    if( item.description.indexOf( searchTerm) !== -1)
                        foundItems.push(item);
                });
                return foundItems; // return all while checking http

            });
        }
    }




    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'shoppingList.html',
            scope: {
                items: '<',
                myTitle: '@title',
                badRemove: '=',
                onRemove: '&'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'list',
            bindToController: true
        };

        return ddo;
    }


    function FoundItemsDirectiveController() {
        var list = this;

        list.cookiesInList = function () {
            for (var i = 0; i < list.items.length; i++) {
                var name = list.items[i].name;
                if (name.toLowerCase().indexOf("cookie") !== -1) {
                    return true;
                }
            }

            return false;
        };
    }


})();