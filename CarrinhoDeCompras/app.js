var app = angular.module("myApp", []);

app.factory("CarrinhoDeCompras", function () {
  var CarrinhoDeCompras = (function () {
    return {
      items: [],
      addItem: function (description, price, quantity) {

        var $this  = this;
        var _block = false;

        this.items.forEach(function (item, index) {
          if (item.description.search(description) != -1) {
            var _index = index;
            $this.items[_index].quantity += quantity;

            _block = true;
            return;
          }
        });

        if (_block)
          return;

        this.items.push({
          "description": description,
          "price": price,
          "quantity": quantity
        });
      },
      removeItem: function (index) {
        this.items.splice(index, 1);
      }
    }
  })();

  return CarrinhoDeCompras;
});

app.controller("ComprasController", ["CarrinhoDeCompras", function (CarrinhoDeCompras) {
  this.CarrinhoDeCompras = CarrinhoDeCompras;
  this.description = "Notebook";
  this.price = "1750.0";
  this.quantity = "2";

  this.erase = function(list) {
    var $this = this;

    list.forEach(function (variable) {
      eval("$this." + variable + " = \"\"; ");
    });
  };

  this.adicionarItem = function () {
    this.CarrinhoDeCompras.addItem(this.description, parseInt(this.price), parseInt(this.quantity));
    this.erase(["description", "price", "quantity"]);
  };
}]);

app.controller("CheckoutController", ["CarrinhoDeCompras", function (CarrinhoDeCompras) {
  this.CarrinhoDeCompras = CarrinhoDeCompras;
}]);
