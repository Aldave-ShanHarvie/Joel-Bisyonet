
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

// Three labelled console messages
console.log("Shop name:", shopName);
console.log("Current year:", currentYear);
console.log("Combined product price:", runningTotal);

