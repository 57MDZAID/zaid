document.getElementById('pickupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Simulate scheduling a pickup
    document.getElementById('pickupResult').textContent = "Pickup scheduled successfully!";
});