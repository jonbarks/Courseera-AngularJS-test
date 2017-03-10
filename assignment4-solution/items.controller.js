( function() {
    'use strict';

    angular.module('MenuApp')
        .controller( 'ItemsController', ItemsController);

    ItemsController.$inject = ['items'];
    function ItemsController( items) {
        var self  = this;
        self.items = items.menu_items;
        self.category = items.category;

    }

})();