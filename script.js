/* =========================================================
   Portfolio - script.js
   Beginner-friendly, framework-free interactions.
   Every feature is guarded so the same file works on all pages.
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  setActiveNavLink();
  initMobileNav();
  initHeaderShadow();
  initSmoothScroll();
  initScrollReveal();
  initSkillBars();
  initProjectFilter();
  initContactForm();
});

/* ---------------------------------------------------------
   1. Highlight the navigation link for the current page
   --------------------------------------------------------- */
function setActiveNavLink() {
  var links = document.querySelectorAll(".nav__link[data-page]");

  // Work out the current file name, e.g. "index.html" or "" for the root.
  var current = window.location.pathname.split("/").pop();
  if (current === "") {
    current = "index.html";
  }

  links.forEach(function (link) {
    var target = link.getAttribute("href");
    // Links may point to sibling folders (e.g. "../about/about.html"),
    // so only compare the file name at the end.
    var targetFile = target.split("/").pop();
    if (targetFile === current) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }
  });
}

/* ---------------------------------------------------------
   2. Mobile hamburger menu
   --------------------------------------------------------- */
function initMobileNav() {
  var toggle = document.querySelector(".nav__toggle");
  var menu = document.querySelector(".nav__list");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", function () {
    var isOpen = menu.classList.toggle("is-open");
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close the menu after tapping a link.
  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // Close the menu when clicking outside of it.
  document.addEventListener("click", function (event) {
    var clickedInside = menu.contains(event.target) || toggle.contains(event.target);
    if (!clickedInside && menu.classList.contains("is-open")) {
      menu.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

/* ---------------------------------------------------------
   3. Add a subtle shadow to the header when scrolling
   --------------------------------------------------------- */
function initHeaderShadow() {
  var header = document.querySelector(".site-header");
  if (!header) return;

  function update() {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  update();
  window.addEventListener("scroll", update, { passive: true });
}

/* ---------------------------------------------------------
   4. Smooth scrolling for same-page anchor links
   (offset handled by CSS `scroll-padding-top`)
   --------------------------------------------------------- */
function initSmoothScroll() {
  var anchors = document.querySelectorAll('a[href^="#"]');

  anchors.forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
      var id = anchor.getAttribute("href");
      if (id === "#" || id === "") return;

      var target = document.querySelector(id);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

/* ---------------------------------------------------------
   5. Reveal elements as they scroll into view
   --------------------------------------------------------- */
function initScrollReveal() {
  var items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  // If the browser is old, just show everything.
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) {
      el.classList.add("is-visible");
    });
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
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach(function (el) {
    observer.observe(el);
  });
}

/* ---------------------------------------------------------
   6. Animate skill progress bars when they appear
   --------------------------------------------------------- */
function initSkillBars() {
  var skills = document.querySelectorAll(".skill");
  if (!skills.length) return;

  if (!("IntersectionObserver" in window)) {
    skills.forEach(function (el) {
      el.classList.add("is-visible");
    });
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
    { threshold: 0.4 }
  );

  skills.forEach(function (el) {
    observer.observe(el);
  });
}

/* ---------------------------------------------------------
   7. Project category filtering
   --------------------------------------------------------- */
function initProjectFilter() {
  var buttons = document.querySelectorAll(".filter-btn");
  var projects = document.querySelectorAll(".project");
  if (!buttons.length || !projects.length) return;

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var filter = button.getAttribute("data-filter");

      buttons.forEach(function (btn) {
        btn.classList.remove("is-active");
      });
      button.classList.add("is-active");

      projects.forEach(function (project) {
        var category = project.getAttribute("data-category");
        var show = filter === "all" || category === filter;
        project.classList.toggle("is-hidden", !show);
      });
    });
  });
}

/* ---------------------------------------------------------
   8. Contact form validation (front-end only, no backend)
   --------------------------------------------------------- */
function initContactForm() {
  var form = document.querySelector("#contact-form");
  if (!form) return;

  var successMessage = form.querySelector(".form__success");
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Show or hide the error message under a field.
  function setError(input, message) {
    var field = input.closest(".field");
    if (!field) return;
    var errorBox = field.querySelector(".field__error");

    if (message) {
      field.classList.add("has-error");
      input.setAttribute("aria-invalid", "true");
      if (errorBox) errorBox.textContent = message;
    } else {
      field.classList.remove("has-error");
      input.removeAttribute("aria-invalid");
      if (errorBox) errorBox.textContent = "";
    }
  }

  // Validate a single input and return true when it is valid.
  function validateField(input) {
    var value = input.value.trim();

    if (input.hasAttribute("required") && value === "") {
      setError(input, "This field is required.");
      return false;
    }

    if (input.type === "email" && value !== "" && !emailPattern.test(value)) {
      setError(input, "Please enter a valid email address.");
      return false;
    }

    if (input.name === "message" && value !== "" && value.length < 10) {
      setError(input, "Please write at least 10 characters.");
      return false;
    }

    setError(input, "");
    return true;
  }

  var fields = form.querySelectorAll("input, textarea");

  // Validate as the user leaves a field.
  fields.forEach(function (input) {
    input.addEventListener("blur", function () {
      validateField(input);
    });

    // Clear the error while typing again.
    input.addEventListener("input", function () {
      if (input.closest(".field").classList.contains("has-error")) {
        validateField(input);
      }
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var isValid = true;
    var firstInvalid = null;

    fields.forEach(function (input) {
      if (!validateField(input)) {
        isValid = false;
        if (!firstInvalid) firstInvalid = input;
      }
    });

    if (!isValid) {
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // No backend: just show a friendly confirmation.
    if (successMessage) {
      successMessage.classList.add("is-visible");
      successMessage.textContent =
        "Thanks! Your message has been received. I'll get back to you soon.";
    }

    form.reset();
  });
}
