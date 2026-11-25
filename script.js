// Mobile menu
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");
if (toggle && nav) {
  toggle.addEventListener("click", function () {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}
// Highlight the current page in the nav
const here = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll("#mainNav a").forEach(function (a) {
  if (a.getAttribute("href") === here) a.classList.add("active");
});
// Footer year
const year = document.getElementById("currentYear");
if (year) year.textContent = new Date().getFullYear();
// Contact form validation
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const status = document.getElementById("formStatus");
    const name = form.name.value.trim(), email = form.email.value.trim(), msg = form.message.value.trim();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !msg) { status.className = "error"; status.textContent = "Please fill in every field."; return; }
    if (!ok.test(email)) { status.className = "error"; status.textContent = "Enter a valid email address."; return; }
    status.className = "ok"; status.textContent = "Thanks, " + name + ". We will reply soon.";
    form.reset();
  });
}
