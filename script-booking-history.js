let currentPage = 1;

function loadBookingHistory(page) {
    // Simulate fetching booking history data
    const tableBody = document.querySelector("#bookingHistoryTable tbody");
    tableBody.innerHTML = `
        <tr>
            <td>CUST12345</td>
            <td>BOOK67890</td>
            <td>2024-08-01</td>
            <td>John Doe</td>
            <td>123 Main St, City, ZIP 12345</td>
            <td>$100</td>
            <td>Delivered</td>
        </tr>
    `;
}

function loadPrevious() {
    if (currentPage > 1) {
        currentPage--;
        loadBookingHistory(currentPage);
    }
}

function loadNext() {
    currentPage++;
    loadBookingHistory(currentPage);
}

// Initial load
loadBookingHistory(currentPage);

script-booking-service.js 

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

script-pickup-scheduling.js 

document.getElementById('pickupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Simulate scheduling a pickup
    document.getElementById('pickupResult').textContent = "Pickup scheduled successfully!";
});

script-tracking-status.js 

document.getElementById('trackingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Simulate fetching tracking status
    document.getElementById('trackingResult').textContent = "Your parcel is in transit.";
});