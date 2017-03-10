(function () {
    'use strict';

    angular.module('MenuApp')
        .component('menuItems', {
            templateUrl: 'items.template.html',
            bindings: {
                items: '<'
            }
        });

})();
