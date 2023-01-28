// Business logic

// constructor for creating pizza order
function PizzaOrder(topping, size) {
  this.topping = topping;
  this.size = size;
}

// unclear if this is business of UI logic -- it's getting values for topping and size; adjust to match pizzaSelection()
function pizzaSelection(event) {
  event.preventDefault();
  const toppingSelection = document.querySelector("input[name='topping']:checked").value;
  // console.log("topping selection: ", toppingSelection);
  const sizeSelection = document.querySelector("input[name='size']:checked").value;
  // console.log("size selection: ", sizeSelection);
  let pizzaOrder = new PizzaOrder(toppingSelection, sizeSelection);
  // console.log(pizzaOrder);
  pizzaOrder.assignCost();
}

// This should be the version of the prototype to use, but first must get pizzaSelection() or handleSelection() to talk with constructor.
PizzaOrder.prototype.assignCost = function() {
  if (this.topping === "none" && this.size === "personal") {
    pizzaCost = "$5";
  } else if (this.topping === "none" && this.size === "family") {
    pizzaCost = "$10";
  } else if (this.topping === "pepperoni" && this.size === "personal") {
    pizzaCost = "$7";
  } else if (this.topping === "pepperoni" && this.size === "family") {
    pizzaCost = "$12";
  }
  document.querySelector("div#show-price").innerText = pizzaCost;
}

// User interface logic

window.addEventListener("load", function () {
  this.document.getElementById("order").addEventListener("submit", pizzaSelection);
})