// Business logic

// constructor for creating pizza order
function PizzaOrder(topping, size) {
  this.topping = topping;
  this.size = size;
}

// prototype for selecting topping
PizzaOrder.prototype.chooseTopping = function() {

}

// prototype for selecting size

// protype for assigning price


// is this business or UI logic?
function handleRadio(event) {
  event.preventDefault();
  const toppingSelection = document.querySelector("input[name='topping']:checked").value;
  const sizeSelection = document.querySelector("input[name='size']:checked").value;
}

// User interface logic


window.addEventListener("load", function () {
  this.document.getElementById("radio-topping").addEventListener("submit", handleRadio);
  this.document.getElementById("radio-size").addEventListener("submit", handleRadio);
})