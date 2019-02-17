window.addEventListener('online', function(e) {
    document.getElementById('online').innerHTML = 'online';
});

window.addEventListener('offline', function(e) {
    document.getElementById('online').innerHTML = 'offline';
});

if(navigator.serviceWorker) {
    navigator.serviceWorker.register('serviceworker.js');
}