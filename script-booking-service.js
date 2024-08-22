document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Simulate booking and redirect to payment page
    window.location.href = "paybill.html";
});

script-delivery-update.js 

document.getElementById('deliveryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Simulate updating delivery status
    document.getElementById('deliveryResult').textContent = "Delivery status updated successfully!";
});