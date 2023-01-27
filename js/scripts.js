// Business logic

// constructor for creating pizza order
function PizzaOrder(topping, size) {
  this.topping = topping;
  this.size = size;
}

// prototype for figure out pizza toppings
// PizzaOrder.prototype.selectTopping = function() {
//   const toppingSelection = document.querySelector("input[name='topping']:checked").value;

//   if (toppingSelection.value = "none") {
//     this.topping = "none";
//   } else if (toppingSelection.value = "pepperoni") {
//     this.topping = "pepperoni";
//   }
// }

//try w/o radio buttons
PizzaOrder.prototype.selectTopping = function() {
  if (toppingSelection = "none") {
    this.topping = "none";
  } else if (toppingSelection = "pepperoni") {
    this.topping = "pepperoni";
  }
}

//prototype for figureing out size


// prototype for assigning cost
PizzaOrder.prototype.assignCost = function() {

}



// // is this business or UI logic? --- may not need this?
function handleRadio(event) {
  event.preventDefault();
  const toppingSelection = document.querySelector("input[name='topping']:checked").value;
  const sizeSelection = document.querySelector("input[name='size']:checked").value;
}

// User interface logic


// window.addEventListener("load", function () {
//   this.document.getElementById("radio-topping").addEventListener("submit", handleRadio); //-- update handleRadio??
//   this.document.getElementById("radio-size").addEventListener("submit", handleRadio);
// })