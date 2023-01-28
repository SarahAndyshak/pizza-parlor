// Business logic

// constructor for creating pizza order
function PizzaOrder(topping, size) {
  this.topping = topping;
  this.size = size;
}

// unclear if this is business of UI logic -- it's getting values for topping and size; adjust to match pizzaSelection()
function handleSelection(event) {
  event.preventDefault();
  const toppingSelection = document.querySelector("input[name='topping']:checked").value;
  console.log("topping selection: ", toppingSelection);
  const sizeSelection = document.querySelector("input[name='size']:checked").value;
  console.log("size selection: ", sizeSelection);
  let pizzaOrder = new PizzaOrder(toppingSelection, sizeSelection);
  return pizzaOrder;
  // document.querySelector("div#show-price").append("cost"); // this isn't working, buttons don't seem to be functioning
}

// testing selection of topping and size by manually declaring them, then creating new pizzOrder object
function pizzaSelection() {
  const toppingSelection = "none";
  console.log("topping selection: ", toppingSelection);
  const sizeSelection = "personal";
  console.log("size selection: ", sizeSelection);
  let pizzaOrder = new PizzaOrder(toppingSelection, sizeSelection)
  return pizzaOrder;
}

// This should be the version of the prototype to use, but first must get pizzaSelection() or handleSelection() to talk with constructor.
PizzaOrder.prototype.assignCost = function() {
  // const pizzaOrder = pizzaSelection(); // This line may not be needed based on tests
  if (pizzaOrder.toppingSelection === "none" && pizzaOrder.sizeSelection === "personal") {
    pizzaCost = "$5";
  } else if (pizzaOrder.toppingSelection === "none" && pizzaOrder.sizeSelection === "family") {
    pizzaCost = "$10";
  } else if (pizzaOrder.toppingSelection === "pepperoni" && pizzaOrder.sizeSelection === "personal") {
    pizzaCost = "$7";
  } else if (pizzaOrder.toppingSelection === "pepperoni" && pizzaOrder.sizeSelection === "family") {
    pizzaCost = "$12";
  }
  return pizzaCost;
}

// test a version of assignCost prototype if variables are assigned -- pizzaOrder returns keys topping and size, change pizzaOrder.toppingSelection & pizzaOrder.sizeSelection to pizzaOrder.topping and pizzaOrder.size for test.
PizzaOrder.prototype.assignCost = function() {
  // let pizzaOrder = new PizzaOrder ("none", "personal"); -- this line seems to cause bug
  if (pizzaOrder.topping === "none" && pizzaOrder.size === "personal") {
    pizzaCost = "$5";
  } else if (pizzaOrder.topping === "none" && pizzaOrder.size === "family") {
    pizzaCost = "$10";
  } else if (pizzaOrder.topping === "pepperoni" && pizzaOrder.size === "personal") {
    pizzaCost = "$7";
  } else if (pizzaOrder.topping === "pepperoni" && pizzaOrder.size === "family") {
    pizzaCost = "$12";
  }
  return pizzaCost;
}



// User interface logic

window.addEventListener("load", function () {
  this.document.getElementById("order").addEventListener("submit", handleSelection);
  // does cost display go here, or in handleSelection?
})

// Need to test buttons by using this somewhere: document.querySelector("div#show-price").innerText(pizzaOrder); -- maybe should be document.querySelector("div#show-price").append(pizzaOrder).innerText; ??