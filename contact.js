import emailjs from "@emailjs/browser";

/**
 * 🔴 IMPORTANT
 * Replace these 3 values with YOUR actual EmailJS IDs
 */
const PUBLIC_KEY = "Rft7bpg-ikfeP6ZKI";
const SERVICE_ID = "service_wjky7z7";
const TEMPLATE_ID = "template_lslijym";

// Initialize EmailJS
emailjs.init(PUBLIC_KEY);

// Select the form
const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const btn = document.querySelector(".contact-btn");
    btn.innerText = "Sending...";
    btn.disabled = true;

    // Send email
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, {
        from_name: document.getElementById("username").value,
        from_email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
      })
      .then(() => {
        alert("✅ Message sent successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("❌ Failed to send message. Try again.");
      })
      .finally(() => {
        btn.innerText = "Send Message";
        btn.disabled = false;
      });
  });
}
