/* Rafty — interactions: nav, language toggle, reveal, form */
(function () {
  "use strict";

  /* ---- Sticky nav shadow ---- */
  var nav = document.getElementById("nav");
  function onScroll() {
    if (window.scrollY > 12) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Language toggle (EN / HY) ---- */
  var STORAGE_KEY = "rafty.lang";
  function applyLang(lang) {
    document.querySelectorAll(".t").forEach(function (el) {
      var val = el.getAttribute("data-" + lang);
      if (val == null) return;
      if (val.indexOf("<") !== -1) el.innerHTML = val;
      else el.textContent = val;
    });
    document.documentElement.lang = lang;
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.classList.toggle("on", b.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }
  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { applyLang(b.getAttribute("data-lang")); });
  });
  var saved = "hy";
  try { saved = localStorage.getItem(STORAGE_KEY) || "hy"; } catch (e) {}
  applyLang(saved);

  /* ---- Reveal on scroll ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    // Only now do we let CSS hide the reveal elements — guarantees content
    // is visible if this script never runs.
    document.documentElement.classList.add("reveal-ready");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el, i) {
      el.style.transitionDelay = ((i % 3) * 70) + "ms";
      io.observe(el);
    });
    // Safety net: reveal everything after 4s no matter what.
    setTimeout(function () { reveals.forEach(function (el) { el.classList.add("in"); }); }, 4000);
  }

  /* ---- Booking form ---- */
  var form = document.getElementById("bookForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector('[name="name"]');
      var contact = form.querySelector('[name="contact"]');
      var bad = false;
      [name, contact].forEach(function (f) {
        if (!f.value.trim()) { f.style.borderColor = "var(--primary)"; bad = true; }
        else { f.style.borderColor = ""; }
      });
      if (bad) return;
      form.querySelector(".form-fields").style.display = "none";
      document.getElementById("formOk").classList.add("show");
    });
  }
})();
