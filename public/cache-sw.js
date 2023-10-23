self.addEventListener("activate", (event) => {
  console.log("SW: Activate", event);
  event.waitUntil(self.clients.claim());
});

self.addEventListener("install", () => {
  console.log("SW: Install");
});

const putInCache = async (request, response) => {
  const cache = await caches.open("v1");
  await cache.put(request, response);
};

const cacheFirst = async (request) => {
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }
  const responseFromNetwork = await fetch(request);
  putInCache(request, responseFromNetwork.clone());
  return responseFromNetwork;
};

self.addEventListener("fetch", (event) => {
  if (event.request.url.includes("pdf.worker")) {
    event.respondWith(cacheFirst(event.request));
  }
});
