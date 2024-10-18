let openbtn = document.getElementById('open-btn');
let modalbox = document.getElementById('modalbox');
let closebtn = document.getElementById('close-btn');
let emailInput = document.getElementById('email-input');

// Email validation function
function isValidEmail(email) {
        // Regular expression for validating an email
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    openbtn.addEventListener('click', function () {
        // Validate email
        if (emailInput.value === '') {
            alert('Please enter your email address.');
        } else if (!isValidEmail(emailInput.value)) {
            alert('Please enter a valid email address.');
        } else {
            modalbox.style.display = 'block'; // Show the modal
        }
    });

    closebtn.addEventListener('click', function () {
        modalbox.style.display = 'none'; // Hide the modal
    });
     // Close modal when clicking outside of it
     modalbox.addEventListener('click', function(event) {
        if (event.target === modalbox) {
            modalbox.style.display = 'none'; // Hide modal if the background is clicked
        }
    });