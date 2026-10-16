
const shopName = "Joel Bisyonet";
const currentYear = new Date().getFullYear();

let runningTotal = 0;

// Display the shop name
const shopNameElement = document.getElementById("shop-name");

if (shopNameElement) {
  shopNameElement.textContent = shopName;
}

// Update the copyright year
const copyrightElement = document.getElementById("copyright");

if (copyrightElement) {
  copyrightElement.textContent = `© ${currentYear} ${shopName}`;
}

// Count products and calculate their combined listed price
const products = document.querySelectorAll(".product-card");
const productCount = products.length;

products.forEach(function (product) {
  const price = Number(product.dataset.price);
  runningTotal += price;
});

// Display the computed product count
const countElement = document.getElementById("product-count");

if (countElement) {
  countElement.textContent = productCount;
}

// Display the computed total
const totalElement = document.getElementById("product-total");

if (totalElement) {
  totalElement.textContent = runningTotal.toLocaleString("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 2
  });
}

// Activity 8.1: Console messages
console.log("Shop name:", shopName);
console.log("Current year:", currentYear);
console.log("Combined product price:", runningTotal);

// Activity 8.2: Stock status
const stockCount = 8;
let stockMessage;

if (stockCount > 10) {
  stockMessage = "In stock";
} else if (stockCount > 0) {
  stockMessage = "Only a few left";
} else if (stockCount === 0) {
  stockMessage = "Sold out";
} else {
  stockMessage = "Invalid stock count";
}

const stockElement = document.getElementById("stock-status");

if (stockElement) {
  stockElement.textContent = stockMessage;
}

// Activity 8.2: Free delivery check
const orderTotal = 2500;
const isMember = true;

const qualifiesForFreeDelivery =
  orderTotal >= 2000 && isMember === true;

const deliveryFee = qualifiesForFreeDelivery ? 0 : 150;
const finalTotal = orderTotal + deliveryFee;

function formatPeso(amount) {
  return amount.toLocaleString("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2
  });
}

const orderElement = document.getElementById("order-total");
const deliveryElement = document.getElementById("delivery-fee");
const finalTotalElement = document.getElementById("final-total");

if (orderElement) {
  orderElement.textContent = formatPeso(orderTotal);
}

if (deliveryElement) {
  deliveryElement.textContent = formatPeso(deliveryFee);
}

if (finalTotalElement) {
  finalTotalElement.textContent = formatPeso(finalTotal);
}

// Activity 8.2: Shop open or closed
const isShopOpen = true;

const shopMessage = isShopOpen ? "Open today" : "Closed today";

const shopStatusElement = document.getElementById("shop-status");

if (shopStatusElement) {
  shopStatusElement.textContent = shopMessage;
}

// Activity 8.2: Console messages
console.log("Stock status:", stockMessage);
console.log("Free delivery:", qualifiesForFreeDelivery);
console.log("Final total:", finalTotal);
console.log("Shop status:", shopMessage);
