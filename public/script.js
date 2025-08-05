// Sample products data
let products = [
  {
    id: 1,
    name: "Gold Necklace",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1542068829-1115aeb0b3fa?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Silver Ring",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1512499617640-c2f999010b72?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Diamond Earrings",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
  },
];

// Cart array to store product IDs
let cart = [];

// Function to render products on the page
function renderProducts() {
  const productsSection = document.getElementById("products");
  productsSection.innerHTML = ""; // clear existing

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productsSection.appendChild(productCard);
  });
}

// Function to add product to cart
function addToCart(productId) {
  cart.push(productId);
  updateCartCount();
}

// Update the cart count number in header
function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = cart.length;
}

// Initialize page
renderProducts();
updateCartCount();