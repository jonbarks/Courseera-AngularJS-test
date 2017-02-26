( function () {
    'use strict';

    angular.module( 'ShoppingListCheckOff', [])
        .controller( 'ToBuyController', ToBuyController)
        .controller( 'AlreadyBoughtController', AlreadyBoughtController)
        .service( 'ShoppingListCheckOffService', ShoppingListCheckOffService);



    ToBuyController.$inject = ['ShoppingListCheckOffService']

    function ToBuyController( ShoppingListCheckOffService) {
        var self = this;
        self.toBuyList = ShoppingListCheckOffService.getToBuyItems();
        self.buyItem = function ( $index) {
            //ShoppingListCheckOffService.addItemToBuy( "food", $index);
            ShoppingListCheckOffService.buyItem( $index);
        }

    }


    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']

    function AlreadyBoughtController( ShoppingListCheckOffService) {
        var self = this;
        self.boughtList = ShoppingListCheckOffService.getBoughtItems();

    }


    function ShoppingListCheckOffService( ) {
        var self = this;

        var bought = [];
        var toBuy = [
            { name: "carrots", quantity: 1},
            { name: "apples", quantity: 2},
            { name: "bananas", quantity: 3},
            { name: "plums", quantity: 4},
            { name: "grapefruit", quantity: 5},
            { name: "carrots", quantity: 6},
            { name: "potatoes", quantity: 7}
            ];


        self.getToBuyItems = function() {
            return toBuy;
        }

        self.getBoughtItems = function () {
            return bought;
        }

        self.addItemToBuy = function( itemName, itemQuantity){
            var item = {
                name: itemName,
                quantity: itemQuantity
            };
            toBuy.push( item)
        }

        self.buyItem = function( $index){
            bought.push( toBuy[$index]);
            toBuy.splice( $index, 1);
        }
    }


})();
