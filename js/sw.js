
self.addEventListener('install', function (event) {
  console.log('SW Installed')
  event.waitUntil(
    caches.open('static')
      .then(function (cache) {
       
        cache.addAll([
          '/',
          '/index',
          '/js/jquery.min.js',
          '/images/bismillah.json',
          '/index.html',
          '/about.html',
          'images/paypal.svg',
          'https://github.githubassets.com/images/modules/site/icons/funding_platforms/patreon.svg',
          'https://github.githubassets.com/images/modules/site/icons/funding_platforms/open_collective.svg',
          'https://github.githubassets.com/images/modules/site/icons/funding_platforms/community_bridge.svg',
          'https://github.githubassets.com/images/modules/site/icons/funding_platforms/ko_fi.svg',
          'https://github.githubassets.com/images/modules/site/icons/funding_platforms/liberapay.svg',
          '/images/kashurquran.png',
          '/css/elephant.min.css',
          '/css/application.min.css',
          '/css/demo.min.css',
          '/css/landing-page.min.css',
          '/js/sharer.min.js',
          '/js/vendor.min.js',
          '/js/elephant.min.js',
          '/js/application.min.js',
          '/js/landing-page.min.js',
          '/js/demo.js',
          'https://majidnisar.com/KashurQuranBlog',
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
