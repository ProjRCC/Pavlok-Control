const CACHE='pavlok-control-v1.9-cache-1';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('pavlok-control-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
  event.respondWith(fetch(req).then(response=>{
    if(response&&response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(c=>c.put(req,copy)))}
    return response;
  }).catch(()=>caches.match(req).then(hit=>hit|| (req.mode==='navigate'?caches.match('./index.html'):Response.error()))));
});
