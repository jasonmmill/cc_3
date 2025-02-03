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

// Task 3 - Employee Performance Tracking Scenario

let employee = {
    name: "Jason Miller",
    role: "Supply Chain Manager",
    performanceScore: 80,
    isActive: true
}
employee.performanceScore = 85
employee.promotionEligible = false
console.log(employee)

// Task 4 - Customer Feedback Records Scenario

let feedback = [
    {employeeName: "Eric Torres", feedbackText: "Valued Customer", rating: 85},
    {employeeName: "Chad Kennedy", feedbackText: "Unvalued Customer", rating: 40},
    {employeeName: "Joshua Alderman", feedbackText: "Valued Customer", rating: 70}
]
feedback.push({employeeName: "Juliana Joseph", feedbackText: "Unvalued Customer", rating: 35})
console.log(feedback)