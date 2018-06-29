self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('static-v1').then(cache => cache.addAll([
      '/',
      'index.html',
      'restaurant.html',
      'sw.js',
      'js/main.js',
      'js/restaurant_info.js',
      'js/dbhelper.js',
      'data/restaurants.json',
      'css/styles.css',
      'css/responsive.css',
      'img/1.jpg',
      'img/2.jpg',
      'img/3.jpg',
      'img/4.jpg',
      'img/5.jpg',
      'img/6.jpg',
      'img/7.jpg',
      'img/8.jpg',
      'img/9.jpg',
      'img/10.jpg'
    ]))
  );
});


self.addEventListener('fetch', function(event) {
  const url = new URL(event.request.url);
  event.respondWith(
  	caches.match(url.pathname)
  	.then(response => response || fetch(event.request))
  );
});
