/**
 * ==============================================================================
 * ABDUL REHMAN JEELANI — PORTFOLIO CLIENT ENGINE
 * ==============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const data = window.PORTFOLIO_DATA || {};

  initLiveClock();
  initCopyEmail(data);
  initContactForm(data);
  initMobileMenu();

  if (window.lucide) {
    window.lucide.createIcons();
  }
});

/**
 * Live Pakistan Time (PKT - UTC+5)
 */
function initLiveClock() {
  const clockEl = document.getElementById("live-clock");
  if (!clockEl) return;

  function update() {
    try {
      const now = new Date();
      const options = {
        timeZone: "Asia/Karachi",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      };
      const timeStr = new Intl.DateTimeFormat("en-US", options).format(now);
      clockEl.textContent = `${timeStr} PKT`;
    } catch (e) {
      clockEl.textContent = "UTC+5";
    }
  }

  update();
  setInterval(update, 1000);
}

/**
 * Copy Email to Clipboard
 */
function initCopyEmail(data) {
  window.copyEmailAddress = function() {
    const email = data.profile?.email || "rehmanxjeelani@gmail.com";
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(() => {
        showToast("Email address copied to clipboard!");
      }).catch(() => {
        showToast(`Email: ${email}`);
      });
    } else {
      showToast(`Email: ${email}`);
    }
  };
}


/**
 * Contact Form Handler (Direct Delivery to rehmanxjeelani@gmail.com via FormSubmit AJAX)
 */
function initContactForm(data) {
  const form = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit-btn");
  const submitText = document.getElementById("submit-text");
  if (!form) return;

  const recipient = data.profile?.email || "rehmanxjeelani@gmail.com";

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("client-name");
    const emailInput = document.getElementById("client-email");
    const serviceInput = document.getElementById("client-service");
    const messageInput = document.getElementById("client-message");

    const name = nameInput ? nameInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";
    const service = serviceInput ? serviceInput.value : "Business Website";
    const message = messageInput ? messageInput.value.trim() : "";

    if (!name || !email) {
      showToast("Please provide both your name and email.");
      return;
    }

    if (!message) {
      showToast("Please share a brief note about your project.");
      return;
    }

    // Set UI loading state
    if (submitBtn) submitBtn.disabled = true;
    if (submitText) submitText.textContent = "Sending Inquiry...";

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          _replyto: email,
          service: service,
          message: message,
          _subject: `New Portfolio Inquiry: ${service} — ${name}`,
          _template: "table",
          _captcha: "false"
        })
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && (result.success === "true" || result.success === true || result.message)) {
        showToast("Inquiry sent directly! Abdul Rehman will reply within 24 hours.");
        form.reset();
      } else {
        const msg = result.message || "Failed to send message. Please try again or email directly.";
        showToast(msg);
      }
    } catch (err) {
      console.warn("AJAX submission encountered error, executing fallback:", err);
      // Fallback: If network policy or adblocker blocks AJAX, perform standard form submission
      showToast("Connecting to submission gateway...");
      setTimeout(() => {
        form.submit();
      }, 700);
      return;
    } finally {
      if (submitBtn) submitBtn.disabled = false;
      if (submitText) submitText.textContent = "Send Project Inquiry";
      if (window.lucide) window.lucide.createIcons();
    }
  });
}

/**
 * Mobile Navigation
 */
function initMobileMenu() {
  const toggle = document.getElementById("nav-toggle");
  const panel = document.getElementById("nav-panel");
  const links = document.querySelectorAll(".drawer-link");
  if (!toggle || !panel) return;

  toggle.addEventListener("click", () => {
    const isClosed = panel.classList.contains("hidden");
    if (isClosed) {
      panel.classList.remove("hidden");
      toggle.innerHTML = '<i data-lucide="x" class="w-6 h-6"></i>';
    } else {
      panel.classList.add("hidden");
      toggle.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
    }
    if (window.lucide) {
      window.lucide.createIcons();
    }
  });

  links.forEach(l => {
    l.addEventListener("click", () => {
      panel.classList.add("hidden");
      toggle.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
      if (window.lucide) {
        window.lucide.createIcons();
      }
    });
  });
}

/**
 * Toast Notice Pill
 */
function showToast(message) {
  let toast = document.getElementById("user-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "user-toast";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i data-lucide="check" class="w-4 h-4 text-[#FAF199]"></i> <span>${message}</span>`;
  if (window.lucide) {
    window.lucide.createIcons();
  }

  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}
