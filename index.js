const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];

let updatedPrices = prices.map(item => item + 0.5)
console.log(updatedPrices)

coffees.forEach((element, index) => console.log(`теперь цена ${element}: ${updatedPrices[index]}`))