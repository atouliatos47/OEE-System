// A unique name for our app's cache
const CACHE_NAME = 'oee-app-cache-v1';

// All the files and resources we want to cache for offline use
const URLS_TO_CACHE = [
    './', // This caches the index.html file
    'index.html',
    'manifest.json',
    'https://cdn.tailwindcss.com',
    'https://unpkg.com/react@18/umd/react.development.js',
    'https://unpkg.com/react-dom@18/umd/react-dom.development.js',
    'https://unpkg.com/@babel/standalone/babel.min.js',
    'https://placehold.co/192x192/3b82f6/ffffff?text=OEE&font=sans',
    'https://placehold.co/512x512/3b82f6/ffffff?text=OEE&font=sans'
];

// -- INSTALL Event --
// This runs when the service worker is first installed.
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installing...');
    // We wait until the cache is pre-filled with our app shell
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Service Worker: Caching app shell...');
                return cache.addAll(URLS_TO_CACHE);
            })
            .then(() => {
                console.log('Service Worker: All files cached.');
                return self.skipWaiting(); // Activate the new service worker immediately
            })
            .catch((error) => {
                console.error('Service Worker: Failed to cache files:', error);
            })
    );
});

// -- ACTIVATE Event --
// This runs when the service worker is activated (e.g., after a new version is installed)
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activating...');
    event.waitUntil(
        // Clean up old caches that are no longer needed
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Service Worker: Clearing old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim()) // Take control of all open pages
    );
});

// -- FETCH Event --
// This runs every time the app makes a network request (e.g., for a script, style, or image)
self.addEventListener('fetch', (event) => {
    // We only want to handle GET requests
    if (event.request.method !== 'GET') {
        return;
    }

    console.log('Service Worker: Fetching', event.request.url);

    // Cache-First Strategy:
    // 1. Try to get the file from the cache.
    // 2. If it's not in the cache, fetch it from the network.
    // 3. (Optional) Put the new network file into the cache for next time.
    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                // If we found it in the cache, return it
                if (cachedResponse) {
                    console.log('Service Worker: Found in cache', event.request.url);
                    return cachedResponse;
                }

                // If not in cache, fetch from the network
                console.log('Service Worker: Not in cache, fetching from network', event.request.url);
                return fetch(event.request)
                    .then((networkResponse) => {
                        // Check if we received a valid response
                        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                            return networkResponse;
                        }

                        // IMPORTANT: We need to clone the response.
                        // A response is a stream and can only be consumed once.
                        // We need one copy for the browser to use, and one to put in the cache.
                        const responseToCache = networkResponse.clone();

                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                console.log('Service Worker: Caching new resource', event.request.url);
                                cache.put(event.request, responseToCache);
                            });

                        return networkResponse;
                    });
            })
            .catch((error) => {
                console.error('Service Worker: Fetch failed:', error);
                // You could return a custom offline page here if you wanted
            })
    );
});
