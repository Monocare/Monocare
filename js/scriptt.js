// Load saved cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];


// Add item to cart
function addToCart(name, price, image) {

    let existingProduct = cart.find(item => item.name === name);

    if (existingProduct) {

        existingProduct.qty += 1;

    } else {

        cart.push({
            name: name,
            price: price,
            image: image,
            qty: 1
        });

    }

    saveCart();
    updateCartCount();

    alert(name + " added to cart!");
}


// Add product with selected quantity
function addProduct(name, price, image, qtyId) {

    let quantity = parseInt(document.getElementById(qtyId).value) || 1;

    let existingProduct = cart.find(item => item.name === name);

    if (existingProduct) {

        existingProduct.qty += quantity;

    } else {

        cart.push({
            name: name,
            price: price,
            image: image,
            qty: quantity
        });

    }

    saveCart();
    updateCartCount();

    alert(quantity + " x " + name + " added to cart!");
}


// Save cart
function saveCart() {

    localStorage.setItem("cart", JSON.stringify(cart));

}


// Update navbar cart number
function updateCartCount() {

    let counter = document.getElementById("cart-count");

    if (counter) {

        let totalItems = 0;

        cart.forEach(item => {
            totalItems += item.qty;
        });

        counter.innerHTML = totalItems;

    }

}


// Remove item (for cart page)
function removeItem(index) {

    cart.splice(index, 1);

    saveCart();

    location.reload();

}


// Change quantity (cart page)
function changeQty(index, amount) {

    cart[index].qty += amount;

    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }

    saveCart();

    location.reload();

}


// Run when page loads
updateCartCount();