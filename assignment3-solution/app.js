( function() {
    'use strict';

    var app = angular.module('NarrowItDownApp', []);
    app.controller( 'NarrowItDownController', NarrowItDownController);
    app.service('MenuSearchService', MenuSearchService);
    app.directive('foundItems', FoundItemsDirective);
    app.constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com');

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController( MenuSearchService){
        var self = this;
        self.searchTerm;
        self.found = [];
        self.narrowItDown = function(){
            var promise = MenuSearchService.getMatchedMenuItems( self.searchTerm);
            promise.then(function (response) {
                self.found = response;
                self.setShowNotFoundMessage();
            })
            .catch(function (error) {
                console.log("Something went terribly wrong.");
            });
        }
        self.removeItem = function (index){
            self.found.splice(index, 1);
            self.setShowNotFoundMessage();
        }
        self.setShowNotFoundMessage = function(){
            self.showNotFoundMessage = self.found.length == 0 ? true : false;
        }
        self.showNotFoundMessage = false;
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
                if( searchTerm == undefined || searchTerm.length == 0)
                    return foundItems;

                allMenuItems.forEach( function( item) {
                    if( item.description.toLowerCase().includes( searchTerm.toLowerCase()))
                        foundItems.push(item);
                });
                return foundItems;

            });
        }
    }


    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                items: '<',
                onRemove: '&'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'foundDirectiveCtrl',
            bindToController: true
        };

        return ddo;
    }


    function FoundItemsDirectiveController() {
    }


})();