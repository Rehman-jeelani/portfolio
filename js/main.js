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
 * Contact Form Handler
 */
function initContactForm(data) {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("client-name")?.value.trim() || "";
    const email = document.getElementById("client-email")?.value.trim() || "";
    const service = document.getElementById("client-service")?.value || "Website Project";
    const message = document.getElementById("client-message")?.value.trim() || "";

    if (!name || !email) {
      showToast("Please provide your name and email.");
      return;
    }

    const recipient = data.profile?.email || "rehmanxjeelani@gmail.com";
    const subject = encodeURIComponent(`Project Inquiry: ${service} — ${name}`);
    const body = encodeURIComponent(
      `Hello Abdul Rehman,\n\nName: ${name}\nEmail: ${email}\nService: ${service}\n\nProject Overview:\n${message}\n\nLooking forward to hearing from you.`
    );

    showToast("Opening your email client to send message...");
    setTimeout(() => {
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    }, 600);

    form.reset();
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
