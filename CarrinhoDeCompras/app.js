var app = angular.module("myApp", []);

app.factory("CarrinhoDeCompras", function () {
  var CarrinhoDeCompras = (function () {
    return {
      items: [],
      addItem: function (description, price, quantity) {
        if (this.items.indexOf(description) != -1) {
          var _index = this.items.indexOf(description);
          this.items[_index].quantity += quantity;

          return;
        }

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
  this.description = "";
  this.price = "";
  this.quantity = "";

  this.erase = function(list) {
    list.forEach(function (variable) {
      eval(variable + " = ''; ");
    });
  }

  this.adicionarItem = function () {
    this.CarrinhoDeCompras.addItem(this.description, this.price, this.quantity);
    this.erase(["description", "price", "quantity"]);
  }
}]);

app.controller("CheckoutController", ["CarrinhoDeCompras", function (CarrinhoDeCompras) {
  this.CarrinhoDeCompras = CarrinhoDeCompras;
}]);
