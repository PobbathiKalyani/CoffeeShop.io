document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    submitOrder();
});

function submitOrder() {
    var coffeeType = document.getElementById('coffee-type').value;
    var size = document.querySelector('input[name="size"]:checked').value;
    var quantity = document.getElementById('quantity').value;

    // Here you could send the order details to the server for processing,
    // but for this example, let's just display a message.
    var message = `Order placed: ${quantity} ${size} ${coffeeType}(s)`;
    document.getElementById('order-message').innerText = message;
}

// contact///////



document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Here you would typically send the form data to a server for processing,
    // but for this example, let's just display a success message.
    displaySuccessMessage();
});

function displaySuccessMessage() {
    var successMessage = document.getElementById('success-message');
    successMessage.classList.remove('hidden');

    // Hide success message after 3 seconds
    setTimeout(function() {
        successMessage.classList.add('hidden');
    }, 3000);
}


