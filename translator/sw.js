// 翻译小工具 Service Worker
// 缓存策略：Network First（优先网络，离线时使用缓存）

const CACHE_NAME = 'translator-v1-20260612';
const ASSETS_TO_CACHE = [
  '/resume/translator/',
  '/resume/translator/index.html',
  '/resume/translator/manifest.json',
];

// 安装：预缓存核心文件
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log('[SW] 预缓存:', ASSETS_TO_CACHE);
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  // 立即激活，不等待旧 SW
  self.skipWaiting();
});

// 激活：清理旧缓存
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) { return key !== CACHE_NAME; })
            .map(function(key) { return caches.delete(key); })
      );
    })
  );
  self.clients.claim();
});

// 请求：Network First 策略
self.addEventListener('fetch', function(event) {
  // 只处理 GET 请求
  if (event.request.method !== 'GET') return;

  // 跳过翻译 API 请求（不缓存）
  if (event.request.url.includes('translate.googleapis.com')) return;

  event.respondWith(
    fetch(event.request)
      .then(function(response) {
        // 网络成功 → 缓存副本
        if (response.status === 200) {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, clone);
          });
        }
        return response;
      })
      .catch(function() {
        // 网络失败 → 使用缓存
        return caches.match(event.request);
      })
  );
});
