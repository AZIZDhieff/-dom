// Sample items for the cart
const items = [
  { id: 1, name: "Item 1", price: 10, quantity: 1, liked: false },
  { id: 2, name: "Item 2", price: 15, quantity: 2, liked: false },
  { id: 3, name: "Item 3", price: 7, quantity: 1, liked: false },
];

const cartItemsElement = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");

// Function to render the cart
function renderCart() {
  cartItemsElement.innerHTML = "";
  let total = 0;

  items.forEach((item) => {
    total += item.price * item.quantity;

    const itemElement = document.createElement("li");
    itemElement.innerHTML = `
            <div class="item-info">
                <img src="placeholder.png" alt="${item.name}">
                <span>${item.name} - $${item.price}</span>
            </div>
            <div class="buttons">
                <button onclick="decreaseQuantity(${item.id})">-</button>
                <span>${item.quantity}</span>
                <button onclick="increaseQuantity(${item.id})">+</button>
                <button onclick="deleteItem(${item.id})">Delete</button>
                <span class="like ${
                  item.liked ? "liked" : ""
                }" onclick="toggleLike(${item.id})">❤</span>
            </div>
        `;
    cartItemsElement.appendChild(itemElement);
  });

  totalPriceElement.innerText = total.toFixed(2);
}

// Increase quantity
function increaseQuantity(id) {
  const item = items.find((item) => item.id === id);
  item.quantity++;
  renderCart();
}

// Decrease quantity
function decreaseQuantity(id) {
  const item = items.find((item) => item.id === id);
  if (item.quantity > 1) {
    item.quantity--;
  } else {
    deleteItem(id);
  }
  renderCart();
}

// Delete item
function deleteItem(id) {
  const index = items.findIndex((item) => item.id === id);
  if (index !== -1) {
    items.splice(index, 1);
  }
  renderCart();
}

// Toggle like
function toggleLike(id) {
  const item = items.find((item) => item.id === id);
  item.liked = !item.liked;
  renderCart();
}

// Initial render
renderCart();
