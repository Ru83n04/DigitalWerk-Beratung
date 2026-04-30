/* DigitalWerk Beratung — main.js v2 */
document.addEventListener('DOMContentLoaded', () => {

  /* ── NAV SCROLL ── */
  const nav = document.querySelector('.nav');
  const onScroll = () => nav?.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── ACTIVE NAV LINK ── */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a, .nav__mobile a').forEach(a => {
    if (a.getAttribute('href') === page || (page === '' && a.getAttribute('href') === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* ── HAMBURGER ── */
  const burger = document.querySelector('.nav__hamburger');
  const mob = document.querySelector('.nav__mobile');
  burger?.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    mob?.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  mob?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    burger?.classList.remove('open');
    mob.classList.remove('open');
    document.body.style.overflow = '';
  }));

  /* ── REVEAL ON SCROLL ── */
  const ro = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const delay = +e.target.dataset.delay || 0;
        setTimeout(() => e.target.classList.add('in'), delay);
        ro.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach((el, i) => {
    if (!el.dataset.delay) el.dataset.delay = String(i % 4 * 100);
    ro.observe(el);
  });

  /* ── COUNTER ANIMATION ── */
  const cr = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { animate(e.target); cr.unobserve(e.target); }
    });
  }, { threshold: 0.5 });

  function animate(el) {
    const target = +el.dataset.count;
    const suffix = el.dataset.suffix || '';
    const dur = 1600;
    const start = performance.now();
    const step = now => {
      const p = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(ease * target) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  document.querySelectorAll('[data-count]').forEach(el => cr.observe(el));

  /* ── CONTACT FORM ── */
  document.querySelector('.js-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const btn = e.target.querySelector('[type=submit]');
    const orig = btn.innerHTML;
    btn.innerHTML = 'Nachricht gesendet ✓';
    btn.style.background = 'var(--green-dark)';
    btn.disabled = true;
    setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; btn.disabled = false; e.target.reset(); }, 4000);
  });

  /* ── MARQUEE PAUSE ON HOVER ── */
  document.querySelectorAll('.marquee').forEach(m => {
    m.addEventListener('mouseenter', () => m.style.animationPlayState = 'paused');
    m.addEventListener('mouseleave', () => m.style.animationPlayState = 'running');
  });
});
