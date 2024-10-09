
function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItemsContainer = document.getElementById("cart-items");
    let cartTotalContainer = document.getElementById("cart-total");
    

    cartItemsContainer.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<tr><td colspan='5'>Your cart is empty.</td></tr>";
    } else {
        cart.forEach(item => {
            let itemTotal = item.price * item.quantity;
            total += itemTotal;

            cartItemsContainer.innerHTML += `
                <tr>
                    <td>${item.name}</td>
                    <td>$${item.price}</td>
                    <td>${item.quantity}</td>
                    <td>$${itemTotal.toFixed(2)}</td>
                    <td><button onclick="removeFromCart('${item.name}')">Remove</button></td>
                </tr>
            `;
        });
    }

    cartTotalContainer.textContent = total.toFixed(2); 
}


function removeFromCart(name) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.name !== name); 
    localStorage.setItem("cart", JSON.stringify(cart)); 
    displayCart();
}
function clearCart() {
    localStorage.removeItem("cart"); 
    displayCart(); 
}

window.onload = displayCart;

document.getElementById("clear-cart").addEventListener("click", clearCart);

function proceedToPayment() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    localStorage.setItem("totalAmount", totalAmount);


    window.location.href = "payment.html";
}
