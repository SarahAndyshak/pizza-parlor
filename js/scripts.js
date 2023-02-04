// Business logic

// constructor for creating pizza order
function PizzaOrder(topping, size) {
  this.topping = topping;
  this.size = size;
  this.cost = 0; 
}

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
  this.cost = pizzaCost;
  return this.cost;
}

// User interface logic

function pizzaSelection(event) {
  event.preventDefault();
  const toppingSelection = document.querySelector("input[name='topping']:checked").value;
  const sizeSelection = document.querySelector("input[name='size']:checked").value;
  let pizzaOrder = new PizzaOrder(toppingSelection, sizeSelection);
  pizzaOrder.assignCost();
  document.querySelector("div#show-price").innerText = pizzaOrder.cost;
}

window.addEventListener("load", function () {
  this.document.getElementById("order").addEventListener("submit", pizzaSelection);
})