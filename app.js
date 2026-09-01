/* Sirah Nabawiyah — logika antarmuka (JavaScript murni, tanpa framework) */
import { CHAPTERS, ARCHIVE_HERO, SIRAH_SOURCE_URL } from "./data.js";

(function () {
  "use strict";

  var main = document.getElementById("main-content");
  var drawerLayer = document.getElementById("drawer-layer");
  var noticeLayer = document.getElementById("notice-layer");
  var topbarLeft = document.getElementById("topbar-left");
  var topbarCenter = document.getElementById("topbar-center");
  var progressBar = document.getElementById("topbar-progress");
  var soundToggle = document.getElementById("sound-toggle");
  var soundLabel = document.getElementById("sound-label");
  var soundIcon = document.getElementById("sound-icon");
  var skipLink = document.getElementById("skip-link");

  var ARROW =
    '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  var ARROW_LEFT =
    '<svg class="icon icon-left" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  var BOOK =
    '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5v-16ZM20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5v-16Z"/></svg>';
  var CLOSE =
    '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg>';

  function pad(n) { return String(n).padStart(2, "0"); }

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function paragraphs(text) {
    return String(text || "")
      .split(/\n\n+/)
      .filter(Boolean)
      .map(function (p) { return "<p>" + esc(p) + "</p>"; })
      .join("");
  }

  function findChapter(slug) {
    for (var i = 0; i < CHAPTERS.length; i += 1) {
      if (CHAPTERS[i].slug === slug) return CHAPTERS[i];
    }
    return null;
  }

  /* ---------- Routing berbasis hash ---------- */

  function currentRoute() {
    var hash = window.location.hash.replace(/^#/, "").split("?")[0];
    var cleaned = hash.replace(/^\/+|\/+$/g, "");
    return cleaned || "";
  }

  function navigate(slug) {
    var target = slug ? "#/" + slug : "#/";
    if (window.location.hash !== target) {
      window.location.hash = target;
    } else {
      render();
    }
  }

  /* ---------- Audio ambience gurun ---------- */

  var audio = { ctx: null, nodes: [], master: null, active: false };

  function noiseBuffer(ctx, seconds, color) {
    var buffer = ctx.createBuffer(2, ctx.sampleRate * seconds, ctx.sampleRate);
    for (var ch = 0; ch < 2; ch += 1) {
      var data = buffer.getChannelData(ch);
      var last = 0;
      for (var i = 0; i < data.length; i += 1) {
        var white = Math.random() * 2 - 1;
        if (color === "white") {
          data[i] = white * 0.22;
        } else {
          last = (last + 0.018 * white) / 1.018;
          data[i] = last * 3.2;
        }
      }
    }
    return buffer;
  }

  function stopSound() {
    if (!audio.ctx) return;
    var ctx = audio.ctx;
    var nodes = audio.nodes;
    var master = audio.master;
    var now = ctx.currentTime;
    master.gain.cancelScheduledValues(now);
    master.gain.setValueAtTime(master.gain.value, now);
    master.gain.linearRampToValueAtTime(0, now + 0.6);
    window.setTimeout(function () {
      nodes.forEach(function (node) { try { node.stop(); } catch (e) {} });
      try { ctx.close(); } catch (e) {}
    }, 700);
    audio = { ctx: null, nodes: [], master: null, active: false };
    updateSoundUI();
  }

  function startSound() {
    var Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    var ctx = new Ctx();
    var master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);

    var wind = ctx.createBufferSource();
    var windFilter = ctx.createBiquadFilter();
    var windGain = ctx.createGain();
    var lfo = ctx.createOscillator();
    var lfoGain = ctx.createGain();
    wind.buffer = noiseBuffer(ctx, 9, "brown");
    wind.loop = true;
    windFilter.type = "lowpass";
    windFilter.frequency.value = 480;
    windFilter.Q.value = 0.7;
    windGain.gain.value = 0.22;
    lfo.type = "sine";
    lfo.frequency.value = 0.07;
    lfoGain.gain.value = 220;
    lfo.connect(lfoGain).connect(windFilter.frequency);
    wind.connect(windFilter).connect(windGain).connect(master);

    var sand = ctx.createBufferSource();
    var sandFilter = ctx.createBiquadFilter();
    var sandGain = ctx.createGain();
    sand.buffer = noiseBuffer(ctx, 6, "white");
    sand.loop = true;
    sandFilter.type = "bandpass";
    sandFilter.frequency.value = 2400;
    sandFilter.Q.value = 0.55;
    sandGain.gain.value = 0.035;
    sand.connect(sandFilter).connect(sandGain).connect(master);

    var droneA = ctx.createOscillator();
    var droneB = ctx.createOscillator();
    var droneFilter = ctx.createBiquadFilter();
    var droneGain = ctx.createGain();
    droneA.type = "sine";
    droneB.type = "sine";
    droneA.frequency.value = 73.42;
    droneB.frequency.value = 110;
    droneFilter.type = "lowpass";
    droneFilter.frequency.value = 280;
    droneGain.gain.value = 0.018;
    droneA.connect(droneFilter);
    droneB.connect(droneFilter);
    droneFilter.connect(droneGain).connect(master);

    wind.start(); sand.start(); lfo.start(); droneA.start(); droneB.start();
    master.gain.linearRampToValueAtTime(0.9, ctx.currentTime + 1.8);

    audio = { ctx: ctx, nodes: [wind, sand, lfo, droneA, droneB], master: master, active: true };
    updateSoundUI();
  }

  function updateSoundUI() {
    soundLabel.textContent = audio.active ? "Gurun hidup" : "Suara gurun";
    soundToggle.setAttribute("aria-pressed", audio.active ? "true" : "false");
    soundIcon.innerHTML = audio.active
      ? '<path d="M5 10v4h3l4 3V7l-4 3H5Z"/><path d="M16 9c1.7 1.7 1.7 4.3 0 6M18.8 6.2a8.2 8.2 0 0 1 0 11.6"/>'
      : '<path d="M5 10v4h3l4 3V7l-4 3H5Z"/><path d="m16 9 5 6m0-6-5 6"/>';
  }

  soundToggle.addEventListener("click", function () {
    if (audio.active) stopSound(); else startSound();
  });

  /* ---------- Notifikasi bahasa ---------- */

  function notify(message) {
    noticeLayer.innerHTML = '<div class="language-notice" role="status">' + esc(message) + "</div>";
    window.clearTimeout(notify.timer);
    notify.timer = window.setTimeout(function () { noticeLayer.innerHTML = ""; }, 3200);
  }

  Array.prototype.forEach.call(document.querySelectorAll("[data-locale]"), function (button) {
    button.addEventListener("click", function () {
      var locale = button.getAttribute("data-locale");
      if (locale === "id") notify("Bahasa Indonesia sedang digunakan.");
      else if (locale === "ar") notify("Naskah Bahasa Arab sedang disiapkan.");
      else notify("Naskah Bahasa Inggris sedang disiapkan.");
    });
  });

  /* ---------- Panel sumber dan konteks ---------- */

  function sourceRow(label, value, fallback) {
    var shown = value || fallback || "Belum ditetapkan";
    return '<div class="source-field"><dt>' + esc(label) + "</dt><dd>" + esc(shown) + "</dd></div>";
  }

  function openSource(title, source) {
    var isSirah = source.type === "Sirah";
    drawerLayer.innerHTML =
      '<div class="drawer-layer">' +
      '<button class="drawer-backdrop" type="button" aria-label="Tutup catatan sejarah" data-close="1"></button>' +
      '<aside class="history-drawer" role="dialog" aria-modal="true" aria-label="Catatan sejarah">' +
      '<div class="drawer-top"><p>Catatan sejarah</p>' +
      '<button type="button" class="drawer-close" data-close="1"><span>Tutup</span>' + CLOSE + "</button></div>" +
      '<div class="drawer-content">' +
      '<p class="section-label">' + esc(isSirah ? "Sumber utama" : source.type) + "</p>" +
      "<h2>" + esc(source.book) + "</h2>" +
      (source.author ? '<p class="source-author">' + esc(source.author) + "</p>" : "") +
      '<div class="source-for"><span>Rujukan untuk</span><strong>' + esc(title) + "</strong></div>" +
      '<dl class="source-list">' +
      sourceRow("Bab", source.chapter) +
      sourceRow("Subbab", source.subchapter, "Tidak dicatat sebagai subbab terpisah") +
      sourceRow("Jenis", source.type) +
      sourceRow("Edisi", source.edition, "Menunggu penetapan edisi") +
      sourceRow("Penerbit", source.publisher, "Belum dicatat") +
      sourceRow("Halaman", source.page, "Tidak dicantumkan. Nomor halaman berbeda antar cetakan.") +
      "</dl>" +
      '<div class="source-caution"><strong>Catatan edisi</strong>' +
      "<p>Edisi yang dirujuk adalah Pustaka Al-Kautsar, penerjemah Kathur Suhardi. Nomor halaman dapat berbeda berdasarkan cetakan. Tidak ada nomor halaman yang dikarang pada arsip ini.</p></div>" +
      '<a class="drawer-more" href="' + SIRAH_SOURCE_URL + '" target="_blank" rel="noreferrer">Baca edisi sumber ' + ARROW + "</a>" +
      '<p class="editorial-status">Naskah di situs ini adalah ringkasan editorial berdasarkan pemaparan kitab, bukan salinan penuh buku.</p>' +
      "</div></aside></div>";
    bindDrawer();
  }

  function openContext(event) {
    drawerLayer.innerHTML =
      '<div class="drawer-layer">' +
      '<button class="drawer-backdrop" type="button" aria-label="Tutup konteks" data-close="1"></button>' +
      '<aside class="history-drawer" role="dialog" aria-modal="true" aria-label="Baca dalam konteks">' +
      '<div class="drawer-top"><p>Baca dalam konteks</p>' +
      '<button type="button" class="drawer-close" data-close="1"><span>Tutup</span>' + CLOSE + "</button></div>" +
      '<div class="drawer-content context-content">' +
      '<p class="section-label">Peristiwa</p><h2>' + esc(event.title) + "</h2>" +
      '<div class="context-block"><span>Ringkasan</span>' + paragraphs(event.summary) + "</div>" +
      '<div class="context-block"><span>Konteks</span>' + paragraphs(event.context) + "</div>" +
      '<div class="context-block"><span>Lokasi</span><p>' + esc(event.location) + "</p></div>" +
      '<div class="context-block"><span>Waktu</span><p>' + esc(event.period) + "</p></div>" +
      '<button type="button" class="drawer-more" data-open-source="' + esc(event.slug) + '">Buka sumber utama ' + ARROW + "</button>" +
      "</div></aside></div>";
    bindDrawer();

    var openBtn = drawerLayer.querySelector("[data-open-source]");
    if (openBtn) {
      openBtn.addEventListener("click", function () { openSource(event.title, event.source); });
    }
  }

  function closeDrawer() {
    drawerLayer.innerHTML = "";
    document.body.style.overflow = "";
    document.removeEventListener("keydown", onDrawerKey);
  }

  function onDrawerKey(e) {
    if (e.key === "Escape") closeDrawer();
  }

  function bindDrawer() {
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onDrawerKey);
    Array.prototype.forEach.call(drawerLayer.querySelectorAll("[data-close]"), function (el) {
      el.addEventListener("click", closeDrawer);
    });
    var close = drawerLayer.querySelector(".drawer-close");
    if (close) close.focus();
  }

  /* ---------- Blok tampilan ---------- */

  function heroMedia(hero, eager) {
    return (
      '<div class="hero-media" data-hero>' +
      '<img src="' + esc(hero.url) + '" alt="' + esc(hero.alt) + '" ' +
      (eager ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"') + " />" +
      '<div class="hero-shade" aria-hidden="true"></div>' +
      '<div class="grain" aria-hidden="true"></div>' +
      '<div class="media-status"><span class="loading-line" aria-hidden="true"></span>Memuat lanskap…</div>' +
      "</div>"
    );
  }

  function bindHeroMedia(scope) {
    Array.prototype.forEach.call(scope.querySelectorAll("[data-hero]"), function (wrap) {
      var img = wrap.querySelector("img");
      var status = wrap.querySelector(".media-status");
      function done() { wrap.classList.add("is-loaded"); if (status) status.remove(); }
      if (img.complete && img.naturalWidth > 0) done();
      else {
        img.addEventListener("load", done);
        img.addEventListener("error", function () {
          if (status) status.textContent = "Visual tidak dapat dimuat. Narasi tetap tersedia.";
        });
      }
    });
  }

  function eventSceneHTML(event, index) {
    return (
      '<article class="event-scene" id="' + esc(event.slug) + '" data-reveal>' +
      '<div class="event-index" aria-hidden="true">' + pad(index + 1) + "</div>" +
      '<div class="event-main">' +
      '<div class="event-meta"><span>' + esc(event.location) + "</span><span>" + esc(event.period) + "</span></div>" +
      "<h3>" + esc(event.title) + "</h3>" +
      (event.editorialNote
        ? '<div class="editorial-copy"><span>Copy editorial, bukan kutipan</span><p>' + esc(event.editorialNote) + "</p></div>"
        : "") +
      '<div class="event-summary">' + paragraphs(event.summary) + "</div>" +
      '<div class="event-body">' + paragraphs(event.context) + "</div>" +
      '<div class="event-actions">' +
      '<button type="button" class="text-action" data-context="' + esc(event.slug) + '">Baca dalam konteks ' + ARROW + "</button>" +
      '<button type="button" class="text-action source-action" data-source="' + esc(event.slug) + '">' + BOOK + " Sumber</button>" +
      "</div></div></article>"
    );
  }

  function mapHTML(chapter) {
    if (!chapter.mapPoints.length) return "";
    var points = chapter.mapPoints
      .map(function (p) { return p.x + "," + p.y; })
      .join(" ");
    var markers = chapter.mapPoints
      .map(function (p, i) {
        return (
          '<button type="button" class="map-marker' + (i === 0 ? " is-selected" : "") + '" ' +
          'style="left:' + p.x + "%;top:" + p.y + "%;animation-delay:" + i * 180 + 'ms" ' +
          'data-point="' + esc(p.id) + '" aria-label="Buka lokasi ' + esc(p.label) + '" ' +
          'aria-pressed="' + (i === 0 ? "true" : "false") + '"><span></span><strong>' + esc(p.label) + "</strong></button>"
        );
      })
      .join("");

    return (
      '<section class="map-section" aria-label="Peta pembelajaran">' +
      '<div class="map-heading" data-reveal>' +
      '<p class="section-label">Peta pembelajaran</p>' +
      "<h2>Tempat berbicara.</h2>" +
      "<p>Pilih titik untuk membaca orientasi peristiwa. Peta ini tidak menetapkan koordinat historis.</p>" +
      "</div>" +
      '<div class="map-interface" data-reveal>' +
      '<div class="map-canvas" role="group" aria-label="Peta skematik ' + esc(chapter.title) + '">' +
      '<svg class="map-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">' +
      '<path d="M-4 27C12 15 23 38 40 25s32-16 67 2M-6 43c21-13 31 11 49-1s37-22 64-1M-8 66c15-9 32 2 48-8s36-2 68 12M2 88c22-17 36 1 55-9s31-5 47 3"/>' +
      '<path d="M13 6c17 17-5 29 10 43s8 29 4 49M47 0c-9 19 9 29 2 45s8 24 5 55M79 0c-4 22 12 31 2 53s1 29 14 47"/>' +
      (chapter.mapPoints.length > 1 ? '<polyline class="route-line" points="' + points + '"/>' : "") +
      "</svg>" + markers +
      '<div class="map-compass" aria-hidden="true"><span>U</span><i></i></div>' +
      "</div>" +
      '<div class="map-detail" aria-live="polite" id="map-detail"></div>' +
      "</div>" +
      '<p class="map-disclaimer">Peta skematik. Garis dan jarak tidak dapat digunakan sebagai data geospasial atau bukti lokasi historis.</p>' +
      "</section>"
    );
  }

  function renderMapDetail(chapter, pointId) {
    var detail = document.getElementById("map-detail");
    if (!detail) return;
    var index = 0;
    var point = chapter.mapPoints[0];
    chapter.mapPoints.forEach(function (p, i) {
      if (p.id === pointId) { point = p; index = i; }
    });
    var event = chapter.events.filter(function (e) { return e.slug === point.eventSlug; })[0] || chapter.events[0];

    detail.innerHTML =
      '<p class="map-detail-count">Titik ' + pad(index + 1) + " / " + pad(chapter.mapPoints.length) + "</p>" +
      "<h3>" + esc(point.label) + "</h3>" +
      "<p>" + esc(point.note) + "</p>" +
      '<div class="map-related"><span>Peristiwa terkait</span><strong>' + esc(event.title) + "</strong></div>" +
      '<button type="button" class="text-action" data-source="' + esc(event.slug) + '">' + BOOK + " Sumber lokasi</button>";

    detail.querySelector("[data-source]").addEventListener("click", function () {
      openSource(event.title, event.source);
    });
  }

  function quranHTML(chapter) {
    if (!chapter.quran) return "";
    var q = chapter.quran;
    return (
      '<section class="quran-section" aria-label="Ayat Al-Quran">' +
      '<div class="quran-inner" data-reveal>' +
      '<p class="section-label">Al-Qur\'an</p>' +
      '<p class="quran-arabic" lang="ar" dir="rtl">' + esc(q.arabic) + "</p>" +
      '<div class="quran-translation"><p>' + esc(q.translation) + "</p>" +
      "<strong>" + esc(q.reference) + "</strong><small>" + esc(q.translationSource) + "</small></div>" +
      "</div></section>"
    );
  }

  /* ---------- Halaman ---------- */

  function renderArchive() {
    topbarLeft.innerHTML = '<button type="button" class="wordmark-small" data-go="">SĪRAH</button>';
    topbarCenter.textContent = "ARSIP DIGITAL";

    var rows = CHAPTERS.map(function (c) {
      return (
        "<li data-reveal>" +
        '<a class="chapter-row" href="#/' + c.slug + '" data-go="' + c.slug + '" data-preview="' + c.slug + '">' +
        '<span class="chapter-number">' + pad(c.number) + "</span>" +
        '<span class="chapter-row-main"><strong>' + esc(c.shortTitle) + "</strong><small>" + esc(c.stage) + "</small></span>" +
        '<span class="chapter-row-location">' + esc(c.location) + "</span>" + ARROW +
        "</a></li>"
      );
    }).join("");

    main.className = "archive-page";
    main.innerHTML =
      '<section class="archive-hero">' + heroMedia(ARCHIVE_HERO, true) +
      '<div class="archive-hero-content">' +
      '<p class="arabic-mark" lang="ar" dir="rtl">السيرة النبوية</p>' +
      '<h1 class="brand-title">SĪRAH<br/>NABAWIYAH</h1>' +
      '<div class="hero-copy"><p>Perjalanan hidup Rasulullah ﷺ dari Makkah hingga Madinah.</p>' +
      '<button type="button" class="primary-action" data-scroll="peta-sirah">Buka peta perjalanan ' + ARROW + "</button></div>" +
      "</div></section>" +

      '<section class="archive-intro" id="peta-sirah">' +
      '<div class="section-rule" data-reveal></div>' +
      '<div class="archive-intro-grid">' +
      '<p class="section-label" data-reveal>Arsip utama / 11 bab</p>' +
      "<div data-reveal><h2>Peta perjalanan Sirah</h2>" +
      '<p class="large-intro">Sebelas lembar sejarah. Setiap bab berdiri sebagai pengalaman terpisah, terhubung oleh tempat, waktu, narasi, dan sumber.</p></div>' +
      "</div></section>" +

      '<section class="chapter-index" aria-label="Daftar sebelas bab">' +
      '<div class="index-visual" aria-hidden="true">' +
      '<img id="index-visual-img" src="' + esc(CHAPTERS[0].hero.url) + '" alt="" loading="lazy" />' +
      '<div class="index-visual-shade"></div><span id="index-visual-label">' + esc(CHAPTERS[0].location) + "</span></div>" +
      '<ol class="chapter-list">' + rows + "</ol></section>" +

      '<section class="source-manifesto">' +
      '<p class="section-label" data-reveal>Sumber utama</p>' +
      "<h2 data-reveal>AR-RAHIQ<br/>AL-MAKHTUM</h2>" +
      '<div class="source-manifesto-copy" data-reveal>' +
      "<p>Syaikh Shafiyyurrahman Al-Mubarakfuri</p>" +
      "<p>Naskah mengikuti pemaparan Ar-Rahiq Al-Makhtum, edisi Bahasa Indonesia Pustaka Al-Kautsar terjemahan Kathur Suhardi. Nomor halaman tidak dikarang karena berbeda antar cetakan.</p>" +
      "</div>" +
      '<a class="source-edition-link" href="' + SIRAH_SOURCE_URL + '" target="_blank" rel="noreferrer">Buka edisi sumber ' + ARROW + "</a>" +
      "</section>" +

      '<footer class="archive-footer"><p>SIRAH NABAWIYAH</p>' +
      "<h2>Menelusuri jejak kehidupan Rasulullah ﷺ melalui sejarah, tempat, waktu, dan sumber yang terpercaya.</h2>" +
      '<p class="photo-note">Visual pembuka: <a href="' + ARCHIVE_HERO.creditUrl + '" target="_blank" rel="noreferrer">' +
      esc(ARCHIVE_HERO.credit) + "</a>. Foto Makkah masa kini, bukan rekonstruksi sejarah.</p></footer>";

    var img = document.getElementById("index-visual-img");
    var label = document.getElementById("index-visual-label");
    Array.prototype.forEach.call(main.querySelectorAll("[data-preview]"), function (row) {
      row.addEventListener("mouseenter", function () {
        var c = findChapter(row.getAttribute("data-preview"));
        if (c && img) { img.src = c.hero.url; label.textContent = c.location; }
      });
    });
  }

  function renderChapter(chapter) {
    var next = CHAPTERS[chapter.number] || null;

    topbarLeft.innerHTML =
      '<button type="button" class="back-link" data-go="">' + ARROW_LEFT + "<span>Kembali ke Sirah</span></button>";
    topbarCenter.textContent = "SIRAH " + pad(chapter.number) + " / " + pad(CHAPTERS.length);

    var interlude =
      chapter.number === 6
        ? '<section class="abstract-interlude" aria-label="Transisi abstrak">' +
          '<div class="light-field" aria-hidden="true"></div>' +
          "<div data-reveal><p>Peristiwa gaib tidak divisualisasikan.</p>" +
          "<h2>Keagungan disampaikan melalui kata, ruang, dan cahaya.</h2></div></section>"
        : "";

    var finalScene =
      chapter.number === CHAPTERS.length
        ? '<section class="final-scene"><div class="final-horizon" aria-hidden="true"></div>' +
          '<div class="final-copy" data-reveal><p>Penutup editorial</p>' +
          "<h2>Sebuah kehidupan telah berakhir.</h2>" +
          '<div class="final-pause" aria-hidden="true"></div>' +
          "<h2>Risalah tidak berakhir.</h2>" +
          '<div class="final-tagline"><strong>SIRAH NABAWIYAH</strong><span>Pelajari. Renungkan. Teladani.</span></div>' +
          "</div></section>"
        : "";

    main.className = "chapter-page tone-" + chapter.tone;
    main.innerHTML =
      '<section class="chapter-hero">' + heroMedia(chapter.hero, true) +
      '<div class="chapter-hero-content"><p class="chapter-brand">SĪRAH NABAWIYAH</p><div>' +
      (chapter.arabicTerm ? '<p class="chapter-arabic" lang="ar" dir="rtl">' + esc(chapter.arabicTerm) + "</p>" : "") +
      '<p class="chapter-kicker">Bab ' + pad(chapter.number) + " / " + pad(CHAPTERS.length) + "</p>" +
      "<h1>" + esc(chapter.title) + "</h1>" +
      '<p class="chapter-deck">' + esc(chapter.introduction) + "</p>" +
      '<button type="button" class="primary-action" data-scroll="chapter-narrative">Mulai bab ' + ARROW + "</button>" +
      "</div></div></section>" +

      '<section class="chapter-opening" id="chapter-narrative">' +
      '<div class="opening-number" aria-hidden="true">' + pad(chapter.number) + "</div>" +
      '<div class="chapter-opening-content" data-reveal>' +
      '<p class="section-label">' + esc(chapter.location) + "</p>" +
      "<h2>" + esc(chapter.editorialHeadline) + "</h2>" +
      '<div class="opening-source"><p>' + esc(chapter.hero.context) + "</p>" +
      '<p>Visual: <a href="' + esc(chapter.hero.creditUrl) + '" target="_blank" rel="noreferrer">' + esc(chapter.hero.credit) + "</a></p>" +
      '<button type="button" class="text-action" data-source="' + esc(chapter.events[0].slug) + '">' + BOOK + " Pelajari sumber</button>" +
      "</div></div></section>" +

      mapHTML(chapter) + interlude + quranHTML(chapter) +

      '<section class="event-sequence" aria-label="Urutan peristiwa">' +
      '<div class="event-sequence-heading" data-reveal>' +
      '<p class="section-label">Urutan peristiwa</p><h2>Lembar demi lembar.</h2></div>' +
      chapter.events.map(eventSceneHTML).join("") +
      "</section>" +

      finalScene +

      '<section class="next-chapter"><div data-reveal><p>Bab ' + pad(chapter.number) + " selesai</p>" +
      (next
        ? "<span>Berikutnya / Bab " + pad(next.number) + "</span><h2>" + esc(next.title) + "</h2>" +
          '<button type="button" class="primary-action light-action" data-go="' + next.slug + '">Lanjutkan perjalanan ' + ARROW + "</button>"
        : "<span>Arsip tetap terbuka untuk dipelajari kembali.</span><h2>SIRAH NABAWIYAH</h2>" +
          '<button type="button" class="primary-action light-action" data-go="">Kembali ke arsip ' + ARROW + "</button>") +
      "</div></section>";

    if (chapter.mapPoints.length) {
      renderMapDetail(chapter, chapter.mapPoints[0].id);
      Array.prototype.forEach.call(main.querySelectorAll("[data-point]"), function (btn) {
        btn.addEventListener("click", function () {
          Array.prototype.forEach.call(main.querySelectorAll("[data-point]"), function (b) {
            b.classList.remove("is-selected");
            b.setAttribute("aria-pressed", "false");
          });
          btn.classList.add("is-selected");
          btn.setAttribute("aria-pressed", "true");
          renderMapDetail(chapter, btn.getAttribute("data-point"));
        });
      });
    }

    Array.prototype.forEach.call(main.querySelectorAll("[data-source]"), function (btn) {
      var slug = btn.getAttribute("data-source");
      var ev = chapter.events.filter(function (e) { return e.slug === slug; })[0];
      if (ev) btn.addEventListener("click", function () { openSource(ev.title, ev.source); });
    });

    Array.prototype.forEach.call(main.querySelectorAll("[data-context]"), function (btn) {
      var slug = btn.getAttribute("data-context");
      var ev = chapter.events.filter(function (e) { return e.slug === slug; })[0];
      if (ev) btn.addEventListener("click", function () { openContext(ev); });
    });
  }

  function renderNotFound() {
    topbarLeft.innerHTML = '<button type="button" class="wordmark-small" data-go="">SĪRAH</button>';
    topbarCenter.textContent = "ARSIP DIGITAL";
    main.className = "";
    main.innerHTML =
      '<div class="not-found"><p>Halaman tidak ditemukan</p>' +
      "<h1>Jejak ini tidak ada di dalam arsip.</h1>" +
      "<p>Alamat yang dibuka tidak terhubung dengan sebelas bab Sirah Nabawiyah.</p>" +
      '<button type="button" class="primary-action light-action" data-go="">Kembali ke arsip ' + ARROW + "</button></div>";
  }

  /* ---------- Reveal saat scroll ---------- */

  function setupReveal() {
    var items = main.querySelectorAll("[data-reveal]");
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(items, function (el) { el.classList.add("is-visible"); });
      return;
    }
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12%", threshold: 0.08 }
    );
    Array.prototype.forEach.call(items, function (el) { observer.observe(el); });
  }

  function updateProgress() {
    var available = document.documentElement.scrollHeight - window.innerHeight;
    var ratio = available > 0 ? Math.min(1, window.scrollY / available) : 0;
    progressBar.style.transform = "scaleX(" + ratio + ")";
  }

  /* ---------- Render utama ---------- */

  function render() {
    closeDrawer();
    var slug = currentRoute();
    if (!slug) renderArchive();
    else {
      var chapter = findChapter(slug);
      if (chapter) renderChapter(chapter);
      else renderNotFound();
    }

    document.title = (function () {
      var c = findChapter(currentRoute());
      return c ? c.title + " | Sirah Nabawiyah" : "Sirah Nabawiyah | Arsip Digital Interaktif";
    })();

    bindHeroMedia(main);
    setupReveal();
    updateProgress();

    Array.prototype.forEach.call(main.querySelectorAll("[data-go]"), function (el) {
      el.addEventListener("click", function (e) {
        if (el.tagName === "A") {
          if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
          e.preventDefault();
        }
        navigate(el.getAttribute("data-go"));
      });
    });

    Array.prototype.forEach.call(main.querySelectorAll("[data-scroll]"), function (el) {
      el.addEventListener("click", function () {
        var target = document.getElementById(el.getAttribute("data-scroll"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
      });
    });

    Array.prototype.forEach.call(topbarLeft.querySelectorAll("[data-go]"), function (el) {
      el.addEventListener("click", function () { navigate(el.getAttribute("data-go")); });
    });

    window.scrollTo(0, 0);
  }

  skipLink.addEventListener("click", function () {
    main.scrollIntoView({ behavior: "smooth" });
    main.focus({ preventScroll: true });
  });

  window.addEventListener("hashchange", render);
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);

  updateSoundUI();
  render();
})();
