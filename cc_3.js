// Task 1 - Product Price Management Scenario
let prices = [ 95, 100, 105, 110, 115 ]
prices.push(120)
// console.log(prices)
prices.splice(0,1)
console.log(prices)

// Task 2 - Modifying Customer Orders Scenario

let orders = [ 5, 10, 15, 20, 25 ]
orders[2] += 5
console.log(orders)
orderTotal = orders.reduce((total, num) => total + num, 0)
console.log(orderTotal)