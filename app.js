function searchFlights() {
    window.open('https://www.google.com/flights', '_blank');
}

// Register the service worker for PWA functionality
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(() => {
        console.log('Service Worker Registered');
    });
}
