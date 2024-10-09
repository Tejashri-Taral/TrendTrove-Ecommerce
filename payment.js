document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const cardNumber = document.getElementById("card-number").value;
    const expiryDate = document.getElementById("expiry-date").value;
    const cvv = document.getElementById("cvv").value;

    // Validate the inputs (basic validation)
    if (cardNumber === "" || expiryDate === "" || cvv === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Simulate payment processing
    alert("Payment successful! Thank you for your purchase.");
    
    // Clear the cart after successful payment
    localStorage.removeItem("cart");
    localStorage.removeItem("totalAmount");

    // Redirect to a success or home page (optional)
    window.location.href = "index.html"; // Change this to your desired page
});
