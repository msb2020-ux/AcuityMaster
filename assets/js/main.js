// =========================================================
// AcuityMaster — site scripts
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  // -----------------------------------------------------
  // Mobile nav toggle
  // -----------------------------------------------------
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      toggle.setAttribute(
        "aria-expanded",
        navLinks.classList.contains("open") ? "true" : "false"
      );
    });
  }

  // -----------------------------------------------------
  // Reveal on scroll
  // -----------------------------------------------------
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    // fallback — just show everything
    revealEls.forEach((el) => el.classList.add("visible"));
  }

  // -----------------------------------------------------
  // Demo request form (Trial page) — Formspree AJAX submit
  // On success: show confirmation message + reveal download link
  // -----------------------------------------------------
  const demoForm = document.getElementById("demo-form");
  if (demoForm) {
    demoForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const submitBtn = demoForm.querySelector("button[type=submit]");
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Sending…";
      submitBtn.disabled = true;

      const data = new FormData(demoForm);
      try {
        const res = await fetch(demoForm.action, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });
        if (res.ok) {
          demoForm.classList.add("hidden");
          const success = document.getElementById("demo-success");
          if (success) success.classList.remove("hidden");
        } else {
          const json = await res.json().catch(() => ({}));
          alert(
            json.error ||
              "Something went wrong. Please email Mark@AcuityMaster.com directly."
          );
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }
      } catch (err) {
        alert(
          "Network error. Please check your connection and try again, or email Mark@AcuityMaster.com directly."
        );
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });
  }
});
