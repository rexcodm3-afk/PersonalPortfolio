/* =========================================================
   Brice Munji — Portfolio interactions
   ========================================================= */
(function () {
  'use strict';

  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const progress = document.getElementById('scrollProgress');
  const yearEl = document.getElementById('year');

  /* Current year */
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Sticky nav + scroll progress */
  function onScroll() {
    const y = window.scrollY || window.pageYOffset;
    nav.classList.toggle('scrolled', y > 24);

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (y / docHeight) * 100 : 0;
    if (progress) progress.style.width = pct + '%';
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Mobile menu toggle */
  function closeMenu() {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
  navToggle.addEventListener('click', function () {
    const open = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  });
  navLinks.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });

  /* Reveal on scroll */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const el = entry.target;
          // subtle stagger for grouped items
          const siblings = Array.prototype.slice.call(
            el.parentElement ? el.parentElement.querySelectorAll(':scope > .reveal') : [el]
          );
          const idx = Math.max(0, siblings.indexOf(el));
          el.style.transitionDelay = Math.min(idx * 70, 350) + 'ms';
          el.classList.add('in');
          io.unobserve(el);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* Active nav link via section observer */
  const sections = document.querySelectorAll('main section[id]');
  const linkMap = {};
  document.querySelectorAll('.nav__link').forEach(function (link) {
    const id = link.getAttribute('href').replace('#', '');
    linkMap[id] = link;
  });
  if ('IntersectionObserver' in window) {
    const sio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          Object.values(linkMap).forEach(function (l) { l.classList.remove('active'); });
          const active = linkMap[entry.target.id];
          if (active) active.classList.add('active');
        }
      });
    }, { threshold: 0.5 });
    sections.forEach(function (s) { sio.observe(s); });
  }

  /* Project spotlight follows cursor */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced) {
    document.querySelectorAll('.project').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
        card.style.setProperty('--my', (e.clientY - rect.top) + 'px');
      });
    });
  }
})();
