/* Kalari Fighter: small helpers for the menu, the contact form and the gallery. */
(function () {
  "use strict";

  // ---------- Phone menu ----------
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");
  function closeMenu() {
    links.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }
  toggle.addEventListener("click", function () {
    var open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  links.addEventListener("click", function (e) {
    if (e.target.tagName === "A") closeMenu();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  // ---------- Underline the menu item for the section on screen ----------
  var navAnchors = Array.prototype.slice.call(links.querySelectorAll("a"));
  if ("IntersectionObserver" in window) {
    var current = null;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        if (id === current) return;
        current = id;
        navAnchors.forEach(function (a) {
          a.classList.toggle("is-current", a.getAttribute("href") === "#" + id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    navAnchors.forEach(function (a) {
      var target = document.querySelector(a.getAttribute("href"));
      if (target) io.observe(target);
    });
  }

  // ---------- "Book an Intro Class" fills in the message ----------
  var form = document.getElementById("contact-form");
  var message = document.getElementById("f-message");
  document.querySelectorAll("[data-book]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (!message.value.trim()) {
        message.value = "Hi Krishna, I would like to book an intro class.";
      }
      setTimeout(function () { document.getElementById("f-name").focus({ preventScroll: true }); }, 600);
    });
  });

  // ---------- Contact form (sent by Web3Forms to Krishna's email) ----------
  var statusEl = form.querySelector(".form-status");
  var sendBtn = form.querySelector(".btn-send");
  function setStatus(text, kind) {
    statusEl.textContent = text;
    statusEl.className = "form-status" + (kind ? " " + kind : "");
  }
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var key = form.querySelector('[name="access_key"]').value;
    if (!key || key === "WEB3FORMS_ACCESS_KEY") {
      setStatus("The form is not connected yet. Please email hello@kalarifighter.com.", "err");
      return;
    }
    sendBtn.disabled = true;
    setStatus("Sending...");
    fetch(form.action, {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: new FormData(form)
    })
      .then(function (r) { return r.json().catch(function () { return {}; }); })
      .then(function (data) {
        if (data && data.success) {
          form.reset();
          setStatus("Thank you. Your message has been sent. Krishna will reply soon.", "ok");
        } else {
          setStatus("Sorry, the message did not send. Please email hello@kalarifighter.com.", "err");
        }
      })
      .catch(function () {
        setStatus("Sorry, the message did not send. Please email hello@kalarifighter.com.", "err");
      })
      .then(function () { sendBtn.disabled = false; });
  });

  // ---------- Gallery: open a photo larger ----------
  var viewer = document.getElementById("viewer");
  if (viewer && typeof viewer.showModal === "function") {
    var viewerImg = viewer.querySelector("img");
    document.querySelectorAll(".gallery a").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        var img = a.querySelector("img");
        viewerImg.src = a.getAttribute("href");
        viewerImg.alt = img ? img.alt : "";
        viewer.showModal();
      });
    });
    viewer.querySelector(".viewer-close").addEventListener("click", function () { viewer.close(); });
    viewer.addEventListener("click", function (e) { if (e.target === viewer) viewer.close(); });
  }

  // ---------- Footer year ----------
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
