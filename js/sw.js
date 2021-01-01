self.addEventListener('install', function (event) {
  console.log('SW Installed')
  event.waitUntil(
    caches.open('static')
      .then(function (cache) {
       
        cache.addAll([
          '/',
          '/index',
          '/aboutus.html',
          '/js/vendor.min.css',
          '/js/application.min.css',
          '/css/demo.min.css',
          '/js/vendor.js',
          
          '/js/elephant.js',
          '/js/application.js',
          '/js/demo.js',
          
          '/js/axios.min.js',
          'js/jquery.min.js',
          '/js/password.js',
          '/images/*.jpg',
          'https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap'
        ])
      })
  )
})

self.addEventListener('activate', function () {
  console.log('SW Activated')
})

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (res) {
        if (res) {
          return res
        } else {
          return fetch(event.request)
        }
      })
  )
})
