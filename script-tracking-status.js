document.getElementById('trackingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Simulate fetching tracking status
    document.getElementById('trackingResult').textContent = "Your parcel is in transit.";
});