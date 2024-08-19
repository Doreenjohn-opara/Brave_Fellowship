// An array of items, each with a name, price, and quantity.
const items = [
  { name: "Rice", price: 5000, quantity: 2 },
  { name: "Garri", price: 3000, quantity: 1 },
  { name: "Beans", price: 4000, quantity: 1 },
];

// Calculate the subtotal of an array of items.
function calculateSubtotal(items) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

// Second way of calculating subtotal using for loop.

function calculateSubtotalForLoop(items) {
  let subtotal1 = 0;
  for (let i = 0; i < items.length; i++) {
    subtotal1 += items[i].price * items[i].quantity;
  }
  return subtotal1;
}

// const subtotal = calculateSubtotal(items);
// console.log(subtotal);

// Applying a discount to subtotal
function applyDiscount(subtotal, discountPercentage) {
  const discountAmount = subtotal * (discountPercentage / 100);
  return subtotal - discountAmount;
}

// Another way of applying discount to subtotal
function applyDiscount(subtotal, discountPercentage) {
  const discountAmount = subtotal * (discountPercentage / 100);
  const discountedTotal = subtotal - discountAmount;
  return discountedTotal;
  }

// const subtotal = 17000;
// const discountPercentage = 15;
// const discountedTotal = applyDiscount(subtotal, discountPercentage);
// console.log(discountedtTotal);

// Calculating the total amount with tax.
function calculateTax(discountedTotal, taxRate) {
  return discountedTotal * (1 + taxRate / 100);
}

// Another way of calculating total amount with tax using const
function calculateTax(discountedTotal, taxRate) {
  const tax = 1 + taxRate / 100
  const discountedAmount = discountedTotal * tax
  return discountedAmount;
}

// const discountedTotal = 14450;
// const taxRate = 8;
// const totalWithTax = calculateTax(discountedTotal, taxRate);
// console.log(totalWithTax.toFixed(2));

// Calculate the total amount with Subtotal, discount, and tax. 
function calculateTotal(items, discountPercentage, taxRate) {
    const subtotal = calculateSubtotal(items);
    const discountedTotal = applyDiscount(subtotal, discountPercentage);
    const totalWithTax = calculateTax(discountedTotal, taxRate);
    return totalWithTax;
  }


// Testing the functionality
const discountPercentage = 10;
const taxRate = 8;

const subtotal = calculateSubtotal(items);
const discountedTotal = applyDiscount(subtotal, discountPercentage);
const totalWithTax = calculateTotal(items, discountPercentage, taxRate);

console.log(`Subtotal: ₦${subtotal.toFixed(2)}`);
console.log(`Discounted Total: ₦${discountedTotal.toFixed(2)}`);
console.log(`Total with Tax: ₦${totalWithTax.toFixed(2)}`);
  