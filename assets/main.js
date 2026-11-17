/* ============================================================
 * main.js —— 渲染与交互
 * 读取 assets/data.js 里的 window.PORTFOLIO，渲染页面。
 * 通常你不需要改这个文件，改 data.js 即可。
 * ============================================================ */
(function () {
  "use strict";

  var D = window.PORTFOLIO || {};

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function el(sel) { return document.querySelector(sel); }
  function setHTML(sel, html) { var n = el(sel); if (n) n.innerHTML = html; return n; }

  /* ---------- 1. 基本信息 ---------- */
  function renderProfile() {
    var p = D.profile || {};
    document.title = (p.name || "作品集") + " · " + (p.role || "AIGC 设计师");
    setHTML("#brandName", esc(p.name || "葛雪峰"));
    setHTML("#brandSub", esc(p.role || "AIGC 视觉设计师"));
    setHTML("#heroRole", esc(p.role || ""));
    setHTML("#heroTitle", p.tagline || "AI 是画笔<br>审美才是灵魂");
    setHTML("#heroSub", esc(p.sub || ""));
    if (p.avatar) { var a = el("#aboutAvatar"); if (a) { a.src = p.avatar; a.alt = (p.name || "") + " 头像"; } }
    setHTML("#aboutTitle", esc(p.aboutTitle || ""));
    setHTML("#aboutText", (p.about || []).map(function (t) {
      return "<p>" + esc(t) + "</p>";
    }).join(""));
    setHTML("#aboutMeta", (p.meta || []).map(function (m) {
      return '<span class="chip">' + esc(m) + "</span>";
    }).join(""));
    setHTML("#footNote", esc(D.footer || ""));
    setHTML("#footYear", String(new Date().getFullYear()));
  }

  /* ---------- 2. Hero 数据 ---------- */
  function renderStats() {
    setHTML("#heroStats", (D.stats || []).map(function (s) {
      return '<div class="stat"><b>' + esc(s.num) + "</b><span>" + esc(s.label) + "</span></div>";
    }).join(""));
  }

  /* ---------- 3.4 首屏精选轮播 ---------- */
  function pad2(n) { n = String(n); return n.length < 2 ? "0" + n : n; }

  function updateCount(i, total) {
    setHTML("#carCount", pad2(i + 1) + " / " + pad2(total));
  }

  function renderShowcase() {
    var items = D.showcase || [];
    var stage = el("#stage");
    if (!stage) return;
    if (!items.length) {
      var sec = el("#showcase");
      if (sec) sec.style.display = "none";
      return;
    }
    stage.innerHTML = items.map(function (it, i) {
      var media;
      if (it.type === "video") {
        media = "<video src=\"" + esc(it.src) + "\"" +
          (it.poster ? " poster=\"" + esc(it.poster) + "\"" : "") +
          " muted loop playsinline preload=\"metadata\"></video>";
      } else {
        media = "<img src=\"" + esc(it.src) + "\" alt=\"" + esc(it.title || "") + "\" loading=\"" +
          (i === 0 ? "eager" : "lazy") + "\">";
      }
      return "<figure class=\"slide" + (i === 0 ? " active" : "") + "\" data-i=\"" + i + "\">" +
        media +
        "<figcaption class=\"slide-cap\">" +
          "<span class=\"slide-tag\">" + esc(it.tag || "") + "</span>" +
          "<h3>" + esc(it.title || "") + "</h3>" +
          (it.note ? "<p>" + esc(it.note) + "</p>" : "") +
        "</figcaption></figure>";
    }).join("");

    setHTML("#carDots", items.map(function (_, i) {
      return "<button type=\"button\" data-i=\"" + i + "\" aria-label=\"第 " + (i + 1) +
        " 张\"" + (i === 0 ? " class=\"on\"" : "") + "></button>";
    }).join(""));

    updateCount(0, items.length);
  }

  /* ---------- 3. 专注方向 ---------- */
  function renderFocus() {
    setHTML("#focusTags", (D.focus || []).map(function (f) {
      return '<span class="chip">' + esc(f) + "</span>";
    }).join(""));
  }

  /* ---------- 4. 工具矩阵 ---------- */
  function renderTools() {
    setHTML("#toolsGrid", (D.tools || []).map(function (t) {
      var chips = (t.items || []).map(function (i) { return "<span>" + esc(i) + "</span>"; }).join("");
      return '<article class="tool-card reveal">' +
        '<div class="tool-head"><h4><span class="ico">' + esc(t.icon || "") + "</span>" + esc(t.title) + "</h4>" +
        '<span class="lv">' + esc(t.level || "") + "</span></div>" +
        '<div class="tool-list">' + chips + "</div>" +
        '<div class="bar"><i data-pct="' + (t.level_pct || 0) + '"></i></div>' +
        "</article>";
    }).join(""));
  }

  /* ---------- 5. 精选作品 ---------- */
  function renderWorks() {
    setHTML("#worksList", (D.works || []).map(function (w, idx) {
      var tags = (w.tags || []).map(function (x) { return "<span>" + esc(x) + "</span>"; }).join("");
      var steps = (w.process || []).map(function (p) {
        return "<li><b>" + esc(p[0]) + "</b><span>" + esc(p[1]) + "</span></li>";
      }).join("");
      var gallery = (w.gallery || []).map(function (g) {
        return '<figure class="work-gal-item"><img class="zoomable" src="' + esc(g.img) + '" alt="' + esc(g.cap || w.title) + '" loading="lazy">' +
          (g.cap ? '<figcaption>' + esc(g.cap) + "</figcaption>" : "") + "</figure>";
      }).join("");
      var note = w.note ? '<div class="work-note"><b>设计备注</b><span>' + esc(w.note) + "</span></div>" : "";
      return '<article class="work reveal">' +
        '<div class="work-media">' +
          '<img class="zoomable" src="' + esc(w.cover) + '" alt="' + esc(w.title) + '" loading="lazy">' +
          '<span class="badge">' + String(idx + 1).padStart(2, "0") + " / " + esc(w.kicker || "") + "</span>" +
        "</div>" +
        '<div class="work-body">' +
          '<div class="work-kicker">' + esc(w.kicker || "") + "</div>" +
          "<h3>" + esc(w.title) + "</h3>" +
          "<p>" + esc(w.desc) + "</p>" +
          '<div class="work-tags">' + tags + "</div>" +
          '<ul class="process">' + steps + "</ul>" +
          (gallery ? '<div class="work-gallery">' + gallery + "</div>" : "") +
          note +
        "</div>" +
        "</article>";
    }).join(""));
  }

  /* ---------- 5.5 深度案例入口 ---------- */
  function renderCases() {
    var items = D.caseStudies || [];
    var grid = el("#caseGrid");
    if (!grid) return;
    setHTML("#caseGrid", items.map(function (c) {
      var tags = (c.tags || []).map(function (x) { return "<span>" + esc(x) + "</span>"; }).join("");
      return '<a class="case-card reveal" href="' + esc(c.href) + '">' +
        '<div class="case-card-media"><img src="' + esc(c.cover) + '" alt="' + esc(c.title) + '" loading="lazy"><span class="badge">' + esc(c.num) + ' / CASE</span></div>' +
        '<div class="case-card-body">' +
          '<div class="case-kicker">' + esc(c.kicker) + '</div>' +
          '<h3>' + esc(c.title) + '</h3>' +
          '<p>' + esc(c.desc) + '</p>' +
          '<div class="work-tags">' + tags + '</div>' +
          '<span class="case-go">查看完整案例 →</span>' +
        "</div></a>";
    }).join(""));
  }

  /* ---------- 6. 作品片段 ---------- */
  function renderSnippets() {
    setHTML("#snipGrid", (D.snippets || []).map(function (s) {
      return '<figure class="snip reveal">' +
        '<img class="zoomable" src="' + esc(s.img) + '" alt="' + esc(s.cap) + '" loading="lazy">' +
        '<figcaption class="cap">' + esc(s.cap) + "</figcaption>" +
        "</figure>";
    }).join(""));
  }

  /* ---------- 6.5 灵感库（瀑布流图库） ---------- */
  function renderInspiration() {
    var items = D.inspiration || [];
    var grid = el("#inspGrid");
    if (!grid) return;
    setHTML("#inspGrid", items.map(function (s) {
      return '<figure class="insp reveal">' +
        '<img class="zoomable" src="' + esc(s.img) + '" alt="' + esc(s.cap) + '" loading="lazy">' +
        '<figcaption class="insp-cap"><span class="insp-tag">' + esc(s.tag || "") + '</span>' + esc(s.cap) + "</figcaption>" +
        "</figure>";
    }).join(""));
  }

  /* ---------- 7. 服务能力 ---------- */
  function renderServices() {
    setHTML("#svcGrid", (D.services || []).map(function (s) {
      var pts = (s.points || []).map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("");
      return '<article class="svc reveal">' +
        '<div class="num">' + esc(s.num) + "</div>" +
        "<h4>" + esc(s.title) + "</h4>" +
        "<p>" + esc(s.desc) + "</p>" +
        "<ul>" + pts + "</ul>" +
        "</article>";
    }).join(""));
  }

  /* ---------- 8. 联系方式 ---------- */
  function renderContact() {
    var c = D.contact || {};
    setHTML("#contactTitle", c.title || "");
    setHTML("#contactDesc", esc(c.desc || ""));
    setHTML("#contactList", (c.items || []).map(function (it) {
      return '<div class="contact-item"><span class="k">' + esc(it.k) + '</span><span class="v">' + esc(it.v) + "</span></div>";
    }).join(""));
  }

  /* ---------- 9. 交互 ---------- */
  function initNav() {
    var nav = el("#nav");
    var links = el("#navLinks");
    var toggle = el("#navToggle");

    function onScroll() {
      if (!nav) return;
      if (window.scrollY > 12) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (toggle && links) {
      toggle.addEventListener("click", function () { links.classList.toggle("open"); });
      links.addEventListener("click", function (e) {
        if (e.target.tagName === "A") links.classList.remove("open");
      });
    }

    // 当前区块高亮
    var sections = Array.prototype.slice.call(document.querySelectorAll("section[id]"));
    var navA = Array.prototype.slice.call(document.querySelectorAll("#navLinks a"));
    if (!sections.length || !navA.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var id = en.target.id;
        navA.forEach(function (a) {
          a.classList.toggle("active", a.getAttribute("href") === "#" + id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { io.observe(s); });
  }

  function initReveal() {
    var items = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
    if (!items.length) return;

    // ?noanim 或系统偏好减少动效时，直接全部显示
    var noanim = /(?:^|[?&])noanim(?:[=&]|$)/.test(location.search);
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (noanim || reduce || !("IntersectionObserver" in window)) {
      document.documentElement.classList.add("noanim");
      items.forEach(function (n) { n.classList.add("in"); });
      animateBars();
      return;
    }

    // 只有确认 IO 可用，才开启「先隐藏后渐显」，避免兜底失败时整页空白
    document.documentElement.classList.add("anim");

    // 兜底：若 1.6s 内没有任何元素被点亮（IO 异常/极端环境），全部直接显示
    setTimeout(function () {
      if (document.querySelector(".reveal.in")) return;
      items.forEach(function (n) { n.classList.add("in"); });
      animateBars();
    }, 1600);
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
          animateBars();
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (n) { io.observe(n); });
  }

  function animateBars() {
    Array.prototype.forEach.call(document.querySelectorAll(".bar i"), function (b) {
      if (b.dataset.done) return;
      var pct = parseInt(b.dataset.pct || "0", 10);
      var card = b.closest(".tool-card");
      if (card && !card.classList.contains("in")) return;
      b.dataset.done = "1";
      b.style.width = Math.max(0, Math.min(100, pct)) + "%";
    });
  }

  function initLightbox() {
    var box = el("#lightbox");
    if (!box) return;
    var img = box.querySelector("img");
    document.addEventListener("click", function (e) {
      var t = e.target;
      if (t && t.classList && t.classList.contains("zoomable")) {
        if (img) { img.src = t.src; img.alt = t.alt || ""; }
        box.classList.add("open");
      }
    });
    box.addEventListener("click", function () { box.classList.remove("open"); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") box.classList.remove("open");
    });
  }


  /* QA 钩子：?qa=1 时把布局宽度写入 title，便于无头检测横向溢出 */
  try {
    if (/(?:^|[?&])qa=1(?:[=&]|$)/.test(location.search)) {
      setTimeout(function () {
        var de = document.documentElement;
        var cw = de.clientWidth;
        var maxRight = 0, over = 0, worst = "";
        Array.prototype.forEach.call(document.body.querySelectorAll("*"), function (n) {
          var r = n.getBoundingClientRect();
          if (r.width === 0 && r.height === 0) return;
          if (r.right > maxRight) { maxRight = r.right; worst = (n.id || n.className || n.tagName).toString().slice(0, 30); }
          if (r.right > cw + 1) over++;
        });
        document.title = "QA SW=" + de.scrollWidth + " CW=" + cw +
          " MAXR=" + Math.round(maxRight) + " OVER=" + over + " WORST=" + worst;
      }, 400);
    }
  } catch (e) {}


  /* ---------- 首屏轮播交互 ---------- */
  function initShowcase() {
    var items = D.showcase || [];
    var stage = el("#stage");
    if (!stage || items.length === 0) return;

    var slides = Array.prototype.slice.call(stage.querySelectorAll(".slide"));
    var dots = Array.prototype.slice.call(document.querySelectorAll("#carDots button"));
    var car = el("#carousel");
    var cur = 0, timer = null, paused = false;
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function apply(i) {
      cur = ((i % slides.length) + slides.length) % slides.length;
      slides.forEach(function (s, k) { s.classList.toggle("active", k === cur); });
      dots.forEach(function (d, k) { d.classList.toggle("on", k === cur); });
      updateCount(cur, slides.length);
      slides.forEach(function (s, k) {
        var v = s.querySelector("video");
        if (!v) return;
        if (k === cur) {
          var p = v.play();
          if (p && p.catch) p.catch(function () {});
        } else {
          v.pause();
          try { v.currentTime = 0; } catch (e) {}
        }
      });
    }
    function next() { apply(cur + 1); }
    function prev() { apply(cur - 1); }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    function start() {
      if (reduce || paused || slides.length < 2 || document.hidden) return;
      stop();
      timer = setInterval(next, 5000);
    }

    var bn = el("#carNext"), bp = el("#carPrev");
    if (bn) bn.addEventListener("click", function () { next(); start(); });
    if (bp) bp.addEventListener("click", function () { prev(); start(); });
    dots.forEach(function (d) {
      d.addEventListener("click", function () { apply(Number(d.getAttribute("data-i"))); start(); });
    });

    stage.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { e.preventDefault(); next(); start(); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); prev(); start(); }
    });

    if (car) {
      car.addEventListener("mouseenter", function () { paused = true; stop(); });
      car.addEventListener("mouseleave", function () { paused = false; start(); });
      car.addEventListener("focusin", function () { paused = true; stop(); });
      car.addEventListener("focusout", function () { paused = false; start(); });
    }
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stop(); else start();
    });

    // 移动端滑动切换
    var sx = null;
    stage.addEventListener("touchstart", function (e) {
      if (e.touches.length === 1) sx = e.touches[0].clientX;
    }, { passive: true });
    stage.addEventListener("touchend", function (e) {
      if (sx === null) return;
      var dx = (e.changedTouches[0].clientX - sx);
      if (Math.abs(dx) > 40) { dx < 0 ? next() : prev(); start(); }
      sx = null;
    }, { passive: true });

    var startIdx = parseInt((location.search.match(/[?&]slide=(\d+)/) || [])[1] || "0", 10);
    apply(isNaN(startIdx) ? 0 : startIdx - 1);
    if (!/slide=\d+/.test(location.search)) start();
  }

  /* ---------- 启动 ---------- */
  function boot() {
    renderProfile();
    renderStats();
    renderShowcase();
    renderFocus();
    renderTools();
    renderWorks();
    renderCases();
    renderSnippets();
    renderInspiration();
    renderServices();
    renderContact();
    initNav();
    initReveal();
    initShowcase();
    initLightbox();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
