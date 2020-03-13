Factory method giai quyet van de tao mot doi tuong ma khong can chi ra mot cach chinh xac lop nao se tao.
Bang cach la dinh nghia mot phuong thuc  cho viec tao doi tuong
va cac lop con thua ke co the override de chi ro doi doi tuong nao duoc tao.

Định nghĩa một giao diện (interface) cho việc tạo một đối tượng, nhưng để các lớp con quyết định lớp nào sẽ được tạo. "Factory method" giao việc khởi tạo một đối tượng cụ thể cho lớp con

```
  // our pizzas
  function HamAndMushroomPizza() {
    var price = 8.5;
    this.getPrice = function() {
      return price;
    }
  }

  function DeluxePizza() {
    var price = 10.50;
    this.getPrice = function() {
      return price;
    }
  }

  function SeadfoodPizza() {
    var price = 11.50;
    this.getPrice = function() {
      return price;
    }
  }
  function PizzaFactory() {
    this.createPizza = function(type) {
      switch(type) {
        case "Ham and Mushroom":
          return new HamAndMushroomPizza();
        case "Deluxe Pizza":
          return new DeluxePizza();
        case "Seafood Pizza":
          return new SeadfoodPizza();
      }
    }
  }

  var pizzaPrice = new PizzaFactory().createPizza("Ham and Mushroom").getPrice();
```