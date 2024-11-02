let cart = [];
let totalPrice = 0;

function addToCart(id, name, price) {
    let product = { id, name, price };
    cart.push(product);
    updateCartCount();
    updateCartItems();
    alert(`${name} has been added to the cart!`);
}

function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

function updateCartItems() {
    let cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = ''; // ล้างรายการสินค้าเก่า
    totalPrice = 0;

    cart.forEach((item, index) => {
        let itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            ${item.name} - $${item.price}
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsDiv.appendChild(itemDiv);

        totalPrice += item.price;
    });

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

function removeFromCart(index) {
    cart.splice(index, 1); // ลบสินค้าจากตะกร้า
    updateCartCount();
    updateCartItems();
}

function toggleCartPopup() {
    let popup = document.getElementById('cart-popup');
    popup.style.display = (popup.style.display === 'flex') ? 'none' : 'flex';
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    alert(`Total: $${totalPrice.toFixed(2)}. Proceeding to checkout...`);
    cart = [];
    updateCartCount();
    updateCartItems();
    toggleCartPopup(); // ปิดหน้าต่างป๊อปอัพหลังจาก checkout
}
