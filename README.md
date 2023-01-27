# _Pizza Parlor_

#### By _**Sarah Andyshak**_

#### _A website for ordering pizza._

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _VS Code_

## Description

_The user is able to choose the size and toppings they would like for their pizza and preview the final cost of their order._

## Setup/Installation Requirements

* _Clone the repository to your computer, open index.html in a browser, select your pizza preferences, and click the submit button._

## Known Bugs

* 

## License

_Enjoy the site! If you have questions or suggestions for fixing or improving the code, please contact me!_

MIT License
Copyright (c) _13 January 2023_ _Sarah Andyshak_
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Test-Driven Development
Describe: PizzaOrder()

Test 1: "It should set up the constructor to be used for pizza orders."
Code: let pizzaOrder = new PizzaOrder();
pizzaOrder;
Expected Outcome: empty pizzaOrder object: PizzaOrder {topping: undefined, size: undefined}
Test passes

Describe: PizzaOrder.prototype.selectTopping

Test 1: "It should assign a topping selection to the pizzaOrder object."
Code: let pizzaOrder = let pizzaOrder = new PizzaOrder("none");
Expected Outcome: PizzaOrder {topping: "none", size: undefined}
Actual outcome: works if you assign the value with the new PizzaOrder object, need a way to populate the value.