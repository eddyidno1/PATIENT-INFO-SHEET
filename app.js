// ===== Current year in footer =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Mobile nav toggle =====
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
  const open = links.classList.toggle('is-open');
  toggle.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', String(open));
});

// Close the mobile menu after tapping a link
links.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', () => {
    links.classList.remove('is-open');
    toggle.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== Treatments dropdown =====
// On mobile the hamburger lists the treatments directly, so force the
// dropdown open; on desktop it's a click-to-open popover.
const mqMobile = window.matchMedia('(max-width: 720px)');
function syncTreatments() {
  document.querySelectorAll('.tdrop').forEach((d) => { d.open = mqMobile.matches; });
}
syncTreatments();
mqMobile.addEventListener('change', syncTreatments);

// Desktop only: close the popover on outside click or Escape.
document.addEventListener('click', (e) => {
  if (mqMobile.matches) return;
  document.querySelectorAll('.tdrop[open]').forEach((d) => {
    if (!d.contains(e.target)) d.removeAttribute('open');
  });
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !mqMobile.matches) {
    document.querySelectorAll('.tdrop[open]').forEach((d) => d.removeAttribute('open'));
  }
});

// ===== Scroll reveal =====
const reveals = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  reveals.forEach((el) => observer.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('is-visible'));
}
