// Business logic

// constructor for creating pizza order
function PizzaOrder(topping, size) {
  this.topping = topping;
  this.size = size;
}

// is this business -- it's getting values for topping and size, adjust to match pizzaSelection()
function handleSelection(event) {
  event.preventDefault();
  const toppingSelection = document.querySelector("input[name='topping']:checked").value;
  console.log("topping selection: ", toppingSelection);
  const sizeSelection = document.querySelector("input[name='size']:checked").value;
  console.log("size selection: ", sizeSelection);
  let pizzaOrder = new PizzaOrder(toppingSelection, sizeSelection);
  return pizzaOrder;
}

// Need to test buttons by using this somewhere: document.querySelector("div#show-price").innerText(pizzaOrder);


// testing selection of topping and size by manually declaring them, then creating new pizzOrder object
function pizzaSelection() {
  const toppingSelection = "none";
  console.log("topping selection: ", toppingSelection);
  const sizeSelection = "personal";
  console.log("size selection: ", sizeSelection);
  let pizzaOrder = new PizzaOrder(toppingSelection, sizeSelection)
  return pizzaOrder;
}

PizzaOrder.prototype.assignCost = function() {
  const pizzaOrder = pizzaSelection();
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


// prototype for figure out pizza toppings
// PizzaOrder.prototype.selectTopping = function() {
//   const toppingSelection = document.querySelector("input[name='topping']:checked");

//   if (toppingSelection.value = "none") {
//     this.topping = "none";
//   } else if (toppingSelection.value = "pepperoni") {
//     this.topping = "pepperoni";
//   }
// }

//try w/o radio buttons
// PizzaOrder.prototype.selectTopping = function() {
//   let toppingSelection = topping;
//   if (toppingSelection = "none") {
//     return toppingSelection;
//   } else if (toppingSelection = "pepperoni") {
//     return toppingSelection;
//   } 
// }

//not sure what to try next
// PizzaOrder.prototype.selectTopping = function() {
//   let toppingSelection = topping;
//   if (toppingSelection.value = "none") {
//     topping = "none";
//   } else if (toppingSelection.value = "pepperoni") {
//     topping = "pepperoni";
//   }
//   return topping;
// }



// User interface logic

window.addEventListener("load", function () {
  this.document.getElementById("order").addEventListener("submit", handleSelection);
})