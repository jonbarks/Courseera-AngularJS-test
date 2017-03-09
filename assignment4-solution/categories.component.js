(function () {
    'use strict';

    angular.module('MenuApp')
        .component('menuCategories', {
            templateUrl: 'categories.template.html',
            bindings: {
                categories: '<'
            }
        });

})();
