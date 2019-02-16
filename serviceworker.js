self.oninstall = function(event) {
    caches.open('sw-in-webpack')
    .then(function(cache) {
        cache.addAll([
            '/',
            './index.html'
        ])
        .catch(function(cacheErr) {
            console.log('err! ', cacheErr);
        })
    })
    .catch(function(err) {
      console.log('err ', err);  
    })
}

self.onactivate = function(event) {
    // this is where we'll do interesting stuff like get rid of old caches
}

self.onfetch = function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(cachedFiles) {
            if(cachedFiles) {
                return cachedFiles;
            } else {
                return fetch(event.request);
            }
        })
        .catch(function(err) {
            console.log('err in fetch! ', err);
        })
    );
}