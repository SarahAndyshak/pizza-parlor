// Business logic

// constructor for creating pizza order
function PizzaOrder(topping, size) {
  this.topping = topping;
  this.size = size;
}

// is this business -- it's getting values for topping and size
function handleSelection(event) {
  event.preventDefault();
  const toppingSelection = document.querySelector("input[name='topping']:checked").value;
  const sizeSelection = document.querySelector("input[name='size']:checked").value;
  let pizzaOrder = new PizzaOrder(toppingSelection, sizeSelection);
  console.log(pizzaOrder);
}

// testing selection manually
function pizzaSelection() {
  const toppingSelection = "pepperoni";
  console.log("topping selection: ", toppingSelection);
  const sizeSelection = "personal";
  console.log("size selection: ", sizeSelection);
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

// //prototype for figureing out size
// PizzaOrder.prototype.selectSize = function() {
//   if sizeSelection = "personal" {
//     this.size = "personal";
//   } else if sizeSelection = "family" {
//     this.size = "family";
//   }
// }


// // prototype for assigning cost
// PizzaOrder.prototype.assignCost = function() {

// }





// User interface logic

window.addEventListener("load", function () {
  this.document.getElementById("order").addEventListener("submit", handleSelection);
})