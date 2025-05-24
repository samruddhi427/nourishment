
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const count = cart.length;
    document.getElementById("cart-count").innerText = count;
}

function loadCartPage() {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    let container = document.getElementById("cart-items");
    let total = 0;
    cartItems.forEach(item => {
        let div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `<h3>${item.name}</h3><p>₹${item.price}</p>`;
        total += item.price;
        container.appendChild(div);
    });
    document.getElementById("total").innerText = "Total: ₹" + total;
}

document.addEventListener("DOMContentLoaded", updateCartCount);
