/* Робопортал: сохранение сайта для работы без интернета отключено.
   Этот файл удаляет старое сохранение из браузера и сразу отключается,
   чтобы все страницы на funderberger.github.io (в том числе /roboportal-full-site/)
   открывались напрямую, а не из старой копии. */
self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      for (const key of await caches.keys()) await caches.delete(key);
      await self.registration.unregister();
      // открытые вкладки перезагружаются уже без старой копии
      const tabs = await self.clients.matchAll({ type: "window" });
      for (const tab of tabs) tab.navigate(tab.url);
    })(),
  );
});
