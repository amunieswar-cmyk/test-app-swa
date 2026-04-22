// Populate environment information
document.addEventListener('DOMContentLoaded', function() {
    // Timestamp
    const now = new Date();
    document.getElementById('timestamp').textContent = now.toLocaleString();

    // User Agent
    document.getElementById('userAgent').textContent = navigator.userAgent;

    // Current URL
    document.getElementById('currentUrl').textContent = window.location.href;

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
});

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Show alert
function showAlert() {
    alert('🎉 Test app is working perfectly!\n\nYour Azure Static Web Apps deployment is live and functional.');
}

// Update timestamp every second
setInterval(function() {
    const now = new Date();
    document.getElementById('timestamp').textContent = now.toLocaleString();
}, 1000);
