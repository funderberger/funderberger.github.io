/* Робопортал: сохраняет весь сайт на устройстве, чтобы он открывался без интернета.
   Список файлов и версия подставляются при сборке (см. offlinePlugin в vite.config.ts). */

const VERSION = "d1be5b3b4cdc";
const FILES = ["/assets/01-bespilotnaya-vspashka-C_luVaR5.jpg","/assets/01-bespilotnaya-vspashka-CkjhHr1y.pdf","/assets/01_roboty-uborshiki-TC_1-BncJwdV_.jpg","/assets/02-robotizirovannaya-teplica-HdFUqpIF.jpg","/assets/03-bespilotnyy-tramvay-B28QWd-C.pdf","/assets/03-bespilotnyy-tramvay-DdU8JK5t.jpg","/assets/03_tehnopolis-robocentr_1-BoYPicMK.jpg","/assets/04-bespilotnoe-taksi-BXBDnp2p.pdf","/assets/04-bespilotnoe-taksi-Dw5mqJOo.jpg","/assets/04_robot-kurer-yandex-pLvS5Ob8.jpg","/assets/05-dostavka-vnutri-gostinichnyh-kompleksov-BpTYvjui.pdf","/assets/05-dostavka-vnutri-gostinichnyh-kompleksov-C-gWhQec.jpg","/assets/06-dostavka-posledney-mili-roverami-1IiMK8Cz.jpg","/assets/06-dostavka-posledney-mili-roverami-dTk94AXl.pdf","/assets/07-robotizirovannyy-punkt-vydachi-zakazov-robo-pvz-5hqzRwyA.pdf","/assets/07-robotizirovannyy-punkt-vydachi-zakazov-robo-pvz-ZN7CmLuP.jpg","/assets/08-skladskie-mobilnye-roboty-Co6sjmCj.pdf","/assets/08-skladskie-mobilnye-roboty-DmA_KHXK.jpg","/assets/09-manipulyatory-na-skladah-BpWHpSL5.pdf","/assets/09-manipulyatory-na-skladah-Duz2RpoR.jpg","/assets/10-inventarizaciya-skladov-0URVvUU5.jpg","/assets/10-inventarizaciya-skladov-CIp-glX5.pdf","/assets/11-klining-uborka-pomescheniy-TKbXrVq3.jpg","/assets/11-klining-uborka-pomescheniy-tcFbpjcM.pdf","/assets/12-prigotovlenie-napitkov-robokafe-KJK0JgBj.jpg","/assets/12-prigotovlenie-napitkov-robokafe-aIsXimKz.pdf","/assets/13-obsluzhivanie-posetiteley-v-obschepite-Caz_vMtQ.pdf","/assets/13-obsluzhivanie-posetiteley-v-obschepite-DOSckbrL.jpg","/assets/14-robot-administrator-BPB4kIJy.pdf","/assets/14-robot-administrator-_mOXnIbg.jpg","/assets/15-robot-konserzh-BQX5r_4w.pdf","/assets/15-robot-konserzh-BV2FVUZz.jpg","/assets/15_zavod-moskabelmet-CHbv-S9_.jpg","/assets/16-vnutritrubnaya-diagnostika-DWoODl2c.pdf","/assets/16-vnutritrubnaya-diagnostika-RkwMEv00.jpg","/assets/17-uborka-ulic-robotom-BVTlYNSy.pdf","/assets/17-uborka-ulic-robotom-D4k5qvEU.jpg","/assets/18-transport-i-logistika-bespilotnye-tehnologii-v-gruzoperevozk-BEXoaLKz.jpg","/assets/18-transport-i-logistika-bespilotnye-tehnologii-v-gruzoperevozk-DV9CUMsa.pdf","/assets/19-selskoe-hozyaystvo-rastenievodstvo-B8L0IUBo.pdf","/assets/19-selskoe-hozyaystvo-rastenievodstvo-CeBk051i.jpg","/assets/20-stroitelstvo-i-zhkh-C34657UW.pdf","/assets/20-stroitelstvo-i-zhkh-s-8nHppt.jpg","/assets/21-lesnaya-otrasl-BJ9RVfMI.jpg","/assets/21-lesnaya-otrasl-BMguvnxJ.pdf","/assets/22-katalog-produktovyh-resheniy-robototehniki-dlya-gorodskogo-h-B_G8Zgd0.jpg","/assets/23-katalog-razrabotchikov-produktovyh-resheniy-v-oblasti-roboto-BrrTMUoE.jpg","/assets/24-uspeshnye-mezhdunarodnye-keysy-primeneniya-robototehniki-DWzDm3aE.jpg","/assets/25-robototehnicheskie-resheniya-v-sfere-zhkh-i-kapitalnogo-remo-BdISvTu5.jpg","/assets/25-robototehnicheskie-resheniya-v-sfere-zhkh-i-kapitalnogo-remo-CvNt3Xrq.pdf","/assets/26-bespilotnye-sistemy-v-moskve-analitika-k-forumu-Dwnu2JnY.pdf","/assets/26-bespilotnye-sistemy-v-moskve-analitika-k-forumu-flS9xY45.jpg","/assets/27-razvitie-gorodskoy-robototehniki-v-stranah-briks-03sESvEz.pdf","/assets/27-razvitie-gorodskoy-robototehniki-v-stranah-briks-BD8aNSEm.jpg","/assets/28-obzor-rynka-tehnologii-robototehniki-v-rossii-i-mire-CTye59uX.jpg","/assets/85-tk-qFlS9ujr.webp","/assets/a12-1450-ojCl4bxY.png","/assets/agrobot-BVC8NPjo.webp","/assets/ai-stock-counter-12m-DO1Bwjnx.webp","/assets/ak-2000-2-Bg2CGBtG.webp","/assets/ak-sc80-Y-LyLZbZ.webp","/assets/amr-100-BPnjClyN.webp","/assets/amr-800-BZc1ylLw.webp","/assets/amr1500-01-CM1YlIvP.webp","/assets/amr1500-02-BBUnkS3O.webp","/assets/amr1500-03-BCCl8B0d.webp","/assets/amr1500-04-B90-up2n.webp","/assets/amr1500-05-BmvQoc1P.webp","/assets/amr1500-jeKyCKAj.png","/assets/amt-6-6-C_zpeOvj.webp","/assets/amt-s300-DGFkF8i-.webp","/assets/ardi-BiWtOx0B.webp","/assets/arm-105-CtdOy5w5.webp","/assets/arm-135-DC1oA_EE.webp","/assets/arm-165-CF0a4MMB.webp","/assets/arm-200-Ce3bRPFf.webp","/assets/arm-imr-95-BwLBMvgi.png","/assets/azarrus-1-0-BWxnRiyO.webp","/assets/azarrus-1-0a-CtUj6Wld.webp","/assets/azarrus-2-0-Cefh_uNl.webp","/assets/azarrus-3-0-CqXne_MY.webp","/assets/azarrus-5-0-Ielpt__l.webp","/assets/azarrus-6-0-DPD0Dn66.webp","/assets/band-street-DflajGx0.jpg","/assets/berill-rp25-cPFFzYhh.png","/assets/bespilotnyy-buldozer-d14ds-DXNIWYgY.webp","/assets/bespilotnyy-katok-rv-7dd-DTHK_YHC.webp","/assets/birbi-d1-Z7gcyvgB.png","/assets/birbi-p-1-Dio5eiKD.webp","/assets/birbi-s-1-CA8yJ3X8.webp","/assets/birbi-s1pro-BPQ6sb05.png","/assets/bitrobotiks-Br73qOXc.webp","/assets/bro-2-1-BRlKIGwc.webp","/assets/bro-3-0-8KVCd61c.webp","/assets/case-01-betonolom-CgXURv4j.png","/assets/case-02-ronavi-DCtzcIx9.webp","/assets/case-04-venom-DtsakS72.jpg","/assets/case-05-tubot-Y_-IbrzC.jpg","/assets/case-06-astramis-DSJsE4qS.png","/assets/case-07-aidol-DHSzzTp6.jpg","/assets/case-08-arkon-CQquphlH.jpg","/assets/case-09-rosatom-DjuFBNCx.jpg","/assets/case-10-mark-BlM91phq.jpg","/assets/case-11-aripix-CBuu1sF8.jpg","/assets/case-12-antey-BkV75Txp.jpg","/assets/case-13-pixel-BBA7Hd5v.webp","/assets/case-14-spectro-V016Pogn.png","/assets/case-15-prime-park-DjS51z1Z.png","/assets/case-16-ak2000-Ur690TlW.png","/assets/case-17-bitrobotiks-BBPHkMm6.png","/assets/case-18-virsayn-DljLfgNI.png","/assets/cognitive-agro-pilot-mA3aKnHN.webp","/assets/cognitive-pilot-DXRIv4Or.webp","/assets/cognitive-pilot-torum-785-B2UPCh2n.webp","/assets/coop-control-2-B5dFhJYF.png","/assets/coop-control-CjQtCiCT.jpg","/assets/coop-motors-C8dcwLFc.jpg","/assets/coop-power-2-ClFxktpr.png","/assets/coop-power-BtyHv1yM.jpg","/assets/coop-sensors-2-DJ6oDz2D.png","/assets/coop-sensors-CKaDcELN.jpg","/assets/coop-soft-2-DU3RD1jy.png","/assets/cr-02-B2JOYHGv.webp","/assets/deptrans-mark-BqHw0dt_.png","/assets/dmr-1200-CQLPI70l.webp","/assets/dmr-600-xatWJg5c.webp","/assets/doka-rc10-Cwhwd9Fa.webp","/assets/doka-rc16-aWC-Ncrx.webp","/assets/doka-rc20-DPt29BIK.webp","/assets/doka-rc3-Bfyv2h7L.webp","/assets/doka-rc30-BY66Ko1X.png","/assets/doka-rc5-DaT4WR73.webp","/assets/dpir-mark-BjHNyS-P.png","/assets/ekstremum-BFsV5-U3.webp","/assets/evocargo-n1-CHqvamsa.png","/assets/gerb-moskvy-D9cszwHz.png","/assets/goran-ZLUjCKHQ.webp","/assets/grin-BryRKPmm.webp","/assets/gumich-monitor-BoBohMi4.jpg","/assets/gumich-spasatel-SJkIopEN.webp","/assets/inchbot-l1-01-DklrQTdM.webp","/assets/inchbot-l1-02-DvvyEEFl.webp","/assets/inchbot-l1-03-97wKanPh.webp","/assets/inchbot-l1-04-HWNuwTW5.webp","/assets/inchbot-l1-CicYpIbt.png","/assets/index-Bg2trXR_.css","/assets/index-rhKHsOB9.js","/assets/katalog-rossiyskih-robotov-CDz2zmz7.pdf","/assets/kati-CH0IAb2p.webp","/assets/klinbotiks-400-pro-0WNwe50-.webp","/assets/klinbotiks-600-COWQwn2g.webp","/assets/lvenok-moskva-JotM7lSN.webp","/assets/main-video-JJXQAZwF.mp4","/assets/mark-CCIodR2W.webp","/assets/mark-a-agro-B8Z0W0Ut.webp","/assets/mark2se-01-QiZsLxX-.webp","/assets/mark2se-02-BRZYluC1.webp","/assets/mark2se-03-B0YR2rEq.webp","/assets/mark2se-04-CV_ethhK.webp","/assets/mark2se-05-5QtoyxZm.webp","/assets/mark2se-0seZ2Szk.png","/assets/martin-CHXGWai0.webp","/assets/mcu-CyhH-sSC.jpg","/assets/minitraktor-sr-DmtIQ079.webp","/assets/moros-amr-DXQZUOLp.jpg","/assets/moskva-2024-CJrOtNKK.webp","/assets/mosprom-mark-DgG7NtHR.png","/assets/mrsk-C2i_kKml.webp","/assets/navio-l5-B7aLiYaU.png","/assets/onest-cyrillic-B4DTQzs9.woff2","/assets/onest-cyrillic-ext-D3MbBdlY.woff2","/assets/onest-latin-BXvespbm.woff2","/assets/onest-latin-ext-BB1CCQzJ.woff2","/assets/onest-math-B6XOXjJb.woff2","/assets/onest-symbols-DO4Q1dvh.woff2","/assets/onest-vietnamese-_91sfWkv.woff2","/assets/part-0-BJ3VoLWm.jpg","/assets/part-1-Cqrqdwj8.jpg","/assets/part-2-DE7b-0qJ.jpg","/assets/part-3-DRlKI4a5.jpg","/assets/part-4-B0A0u4cC.jpg","/assets/part-5-BYMSi4pp.jpg","/assets/path-02-CDZe_qgp.jpg","/assets/path-03-BGA7TXr4.jpg","/assets/pixel-01-BG7SNw64.webp","/assets/pixel-02-B76WMye-.webp","/assets/pixel-03-DacQjOcV.webp","/assets/pixel-04-CNoKztpa.webp","/assets/pixel-05-CLFaHJQb.webp","/assets/pixel-06-NrtOfeKL.webp","/assets/pixel-CzFUefoN.png","/assets/plug-B9ATcAR9.jpg","/assets/prikladnaya-manipulator-CGp6ULNz.jpg","/assets/promobot-m13-Ce5k_l8m.png","/assets/promobot-v-4-CVIelO82.webp","/assets/prud-skolkovo-DU_s4AdD.jpg","/assets/redcargo-basic-10-C3-we8BL.webp","/assets/redweld-basic-1-4-JziZ421x.webp","/assets/reglament-ispytaniy-DbOZJRQG.pdf","/assets/robocv-tugger-DCJAvIMm.webp","/assets/robocv-x-motion-ng-CwQkBFGy.webp","/assets/robokom-snow-CArXHOYZ.jpg","/assets/roboportal-mark-Chwsk1OU.png","/assets/robot-01-cargoliftt-ClRAoSv0.webp","/assets/robot-courier-BHwr3MGE.png","/assets/robot-komplektovschik-DJPBykyz.webp","/assets/robot-wave-CMgtjrsb.png","/assets/robotaxi-CzhI26GX.png","/assets/ronavi-cbd16-01-DgMb_mIv.webp","/assets/ronavi-cbd16-02-BQxKHxmv.webp","/assets/ronavi-cbd16-03-oBzLN04X.webp","/assets/ronavi-cbd16-04-CKs7keaJ.webp","/assets/ronavi-cbd16-CCrW_ped.png","/assets/ronavi-h1500-01-wnNDrfHE.webp","/assets/ronavi-h1500-02-uNsHaLUH.webp","/assets/ronavi-h1500-03-D7GhuXuG.webp","/assets/ronavi-h1500-04-CN8tTVDc.webp","/assets/ronavi-h1500-E7NCdgBc.png","/assets/ronavi-sr-ByCxl0mH.webp","/assets/rubi-s-03-B5Hda5G1.webp","/assets/rusrobot-forge-rr-120-2900-a92HWcnR.webp","/assets/rusrobot-gr-40-DgAoIoWu.webp","/assets/rusrobot-rr-6-900-BYWNZguE.webp","/assets/rusrobot-rr-60-2100-BEVn0T5D.webp","/assets/rx-10-2000-B4U6cMUG.webp","/assets/rx-120-175-2700-C4hSsHvz.webp","/assets/rx-120-175-3200-Byyo3X_6.webp","/assets/rx-120-220-2700-CrPnutM7.webp","/assets/rx-20-1700-IEiYADIP.webp","/assets/rx-25-1700-DHeMp620.webp","/assets/rx-5-1400-DSXGJmYf.webp","/assets/rx-5-1445w350-DQlLjX0O.webp","/assets/rx-5-700-DkjG9DRg.webp","/assets/rx-5-8-1400-z0SnaUnL.webp","/assets/rx-5-900-yz7oQ9X8.webp","/assets/rx-50-2200-DoDt7iQE.webp","/assets/rx-60-2300-CHMixcU0.webp","/assets/rx-65-2300-YUWtxDq6.webp","/assets/rx-70-2200-Bd1NcSYr.webp","/assets/rx-90-2300-fBMqMij1.webp","/assets/sanbot-B4WdueLM.jpg","/assets/semabot-CjqeLrS4.webp","/assets/setka-skolkovo-C-8jIyVj.jpg","/assets/sigma-150-C37GO8Lr.webp","/assets/sigma-200-CXZEJcrQ.webp","/assets/site-01-HYraO4yO.jpg","/assets/site-02-DpQaycSR.png","/assets/site-03-BxIuRJcH.png","/assets/site-04-2ZB2CGEl.jpg","/assets/site-05-Cpm160yy.jpg","/assets/site-06-g1zGI9Av.png","/assets/site-07-BuEh_BLX.jpg","/assets/site-08-DQdJs6JI.jpg","/assets/site-09-DykG6HHm.png","/assets/site-10-De8QSq_M.jpg","/assets/site-12-BXNgGVma.jpg","/assets/site-14-Bbubuo0P.jpg","/assets/site-15-DxjikafP.png","/assets/soft-ToWOZJZz.jpg","/assets/spectro-1AWwrz1j.webp","/assets/srb-6m1-910-7-C7EBEgbn.webp","/assets/task-bake-CBQ1OOFU.png","/assets/task-cargo-BOGU7sQg.jpg","/assets/task-patrol-DIZBhjj4.jpg","/assets/task-pipes-BggW7clc.jpg","/assets/task-print3d-RVOrHicO.png","/assets/task-snow-BWFV8PAG.png","/assets/tdk-400-m-l-CLzLqnFD.webp","/assets/testing-air-2-yWpL3l-j.mp4","/assets/testing-indoor-CjRWaDq-.mp4","/assets/testing-indoor-skolkovo-lsYQOSTf.mp4","/assets/testing-streets-BABxGLe2.mp4","/assets/testing-water-4foW9lMc.mp4","/assets/tral-patrul-5-svGeqgOG.webp","/assets/trf-500-BTDfRg9A.webp","/assets/tyubot--YtWy3Iw.webp","/assets/unit-CIJsbdrP.webp","/assets/unitree-h2-01-DQRMy24h.webp","/assets/unitree-h2-02-CY3rIqkv.webp","/assets/unitree-h2-03-Bu1qWiF4.webp","/assets/unitree-h2-04-Cj768YuJ.webp","/assets/unitree-h2-DQZkoN32.png","/assets/veibot-cleaner-DVlWLT6G.jpg","/assets/venom-sarancha-BL6RJ5NF.webp","/assets/virsayn-sdu-B-3ognb2.webp","/assets/volshebnik-2-0-CyU97HTY.webp","/assets/vorker-ZXe78HnK.webp","/assets/why-dog-site-BdA0Aj90.png","/assets/why-humanoid-C63gk1OO.png","/assets/why-humanoid-ardi-BWxXIJQR.png","/assets/why-truck-GLPqg84h.png","/assets/yaku-cleaner-DXyVePHJ.jpg","/assets/yunikon-zsk-W8yi-Tte.webp","/icon-180.png","/icon-192.png","/icon-512.png","/index.html","/manifest.webmanifest"] || [];
const CACHE = "roboportal-" + VERSION;
const PREFIX = "roboportal-";
// Файлы без хэша в имени: при обновлении всегда скачиваются заново
const ALWAYS_FRESH = ["/", "/index.html", "/manifest.webmanifest", "/icon-180.png", "/icon-192.png", "/icon-512.png"];

let progress = { done: 0, total: FILES.length, ready: false };

async function broadcast() {
  const clients = await self.clients.matchAll({ includeUncontrolled: true });
  clients.forEach((c) => c.postMessage({ type: "offline-progress", ...progress }));
}

async function fillCache() {
  const cache = await caches.open(CACHE);
  let lastSent = 0;
  const queue = FILES.slice();
  progress = { done: 0, total: FILES.length, ready: false };

  async function worker() {
    while (queue.length) {
      const url = queue.shift();
      if (!(await cache.match(url))) {
        // Уже скачанный файл из прошлой версии сайта не качаем повторно
        const old = ALWAYS_FRESH.includes(url) ? null : await caches.match(url);
        if (old) {
          await cache.put(url, old);
        } else {
          const res = await fetch(url, { cache: "reload" });
          if (!res.ok) throw new Error("Не удалось скачать " + url);
          await cache.put(url, res);
        }
      }
      progress.done++;
      if (Date.now() - lastSent > 400) {
        lastSent = Date.now();
        broadcast();
      }
    }
  }

  await Promise.all([worker(), worker(), worker(), worker()]);
  progress.ready = true;
  await broadcast();
}

self.addEventListener("install", (event) => {
  event.waitUntil(fillCache().then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k.startsWith(PREFIX) && k !== CACHE).map((k) => caches.delete(k)));
      await self.clients.claim();
      progress = { done: FILES.length, total: FILES.length, ready: true };
    })(),
  );
});

self.addEventListener("message", (event) => {
  if (event.data === "offline-status") broadcast();
});

// Видео на iPad запрашивается кусками — отдаём нужный кусок из сохранённого файла
async function rangeResponse(request, response) {
  const range = request.headers.get("range");
  const blob = await response.blob();
  const m = /bytes=(\d*)-(\d*)/.exec(range || "");
  if (!m) return new Response(blob, { status: 200, headers: response.headers });
  const size = blob.size;
  let start = m[1] === "" ? size - Number(m[2]) : Number(m[1]);
  let end = m[1] !== "" && m[2] !== "" ? Number(m[2]) : size - 1;
  start = Math.max(0, start);
  end = Math.min(end, size - 1);
  if (start > end) {
    return new Response(null, { status: 416, headers: { "Content-Range": "bytes */" + size } });
  }
  const headers = new Headers(response.headers);
  headers.set("Content-Range", `bytes ${start}-${end}/${size}`);
  headers.set("Content-Length", String(end - start + 1));
  headers.set("Accept-Ranges", "bytes");
  return new Response(blob.slice(start, end + 1), { status: 206, statusText: "Partial Content", headers });
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);
      // Любая страница сайта (/robots, /finance…) — это один и тот же index.html
      const isPage = request.mode === "navigate" && !/\.[a-z0-9]+$/i.test(url.pathname);
      const cached = await cache.match(isPage ? "/index.html" : url.pathname);
      if (cached) {
        return request.headers.has("range") ? rangeResponse(request, cached) : cached;
      }
      return fetch(request);
    })(),
  );
});
