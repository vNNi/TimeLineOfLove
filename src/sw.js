var appFiles = [
    './index.html',
    '/song/*',
    './404.html',
    '/icons/icon-128x128.png',
    '/icons/icon-144x144.png',
    '/icons/icon-152x152.png',
    '/icons/icon-192x192.png',
    '/icons/icon-256x256.png',
    '/icons/icon-512x512.png',
    '/icons/touch-icon-iphone.png'
]
appFiles.concat(self.__precacheManifest)

self.addEventListener('install', function(e){
    e.waitUntil(
        caches.open('TLLOve').then(function(cache){
            return cache.addAll(appFiles)
        }).catch(function(e){
            console.log('error in install app', e);
        })
    )
});
self.addEventListener('fetch', function(event) {
    event.respondWith(
    caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );

});