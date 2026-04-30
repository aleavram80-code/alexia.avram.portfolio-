/* ============================================================
   ALEXIA AVRAM — PORTFOLIO  |  main.js
   ============================================================ */

/* ─── PROJECT DATA ──────────────────────────────────────────── */
const GRAFICA_PROJECTS = {
  vitaelis: {
    title: 'Vitaelis',
    tags: 'Brand Identity · Packaging',
    desc: 'Brand wellness con packaging coordinato e comunicazione integrata.',
    images: [
      'assets/projects/manavi/grafica/1-vitaelis/1.jpg',
      'assets/projects/manavi/grafica/1-vitaelis/2.jpg',
      'assets/projects/manavi/grafica/1-vitaelis/3.jpg',
      'assets/projects/manavi/grafica/1-vitaelis/4.jpg',
      'assets/projects/manavi/grafica/1-vitaelis/5.jpg',
      'assets/projects/manavi/grafica/1-vitaelis/6.jpg',
      'assets/projects/manavi/grafica/1-vitaelis/7.jpg',
      'assets/projects/manavi/grafica/1-vitaelis/8.jpg',
      'assets/projects/manavi/grafica/1-vitaelis/9.jpg',
      'assets/projects/manavi/grafica/1-vitaelis/10.jpg',
      'assets/projects/manavi/grafica/1-vitaelis/11.jpg',
      'assets/projects/manavi/grafica/1-vitaelis/12.jpg',
      'assets/projects/manavi/grafica/1-vitaelis/13.jpg',
      'assets/projects/manavi/grafica/1-vitaelis/14.jpg',
      'assets/projects/manavi/grafica/1-vitaelis/15.jpg',
      'assets/projects/manavi/grafica/1-vitaelis/16.jpg',
      'assets/projects/manavi/grafica/1-vitaelis/17.jpg',
      'assets/projects/manavi/grafica/1-vitaelis/18.jpg',
    ]
  },
  review: {
    title: 'Review',
    tags: 'Brand Identity · Packaging',
    desc: 'Logo design e visual identity completa.',
    images: Array.from({length:15}, (_,i) => `assets/projects/manavi/grafica/2-review/${i+1}.jpg`)
  },
  avis: {
    title: 'Avis',
    tags: 'Campagna Sociale',
    desc: 'Rebranding completo per associazione no-profit.',
    images: Array.from({length:13}, (_,i) => `assets/projects/manavi/grafica/3-avis/${i+1}.jpg`)
  },
  manavi: {
    title: 'Manavi',
    tags: 'Brand Identity · Fashion',
    desc: 'Identita e packaging per brand fashion.',
    images: Array.from({length:17}, (_,i) => `assets/projects/manavi/grafica/4-manavi/${i+1}.jpg`)
  },
  zipeatz: {
    title: 'ZipEatz',
    tags: 'Brand Identity · Packaging',
    desc: 'Brand identity completa per food delivery.',
    images: Array.from({length:9}, (_,i) => `assets/projects/manavi/grafica/5-zipeatz/${i+1}.jpg`)
  },
  orsosobrio: {
    title: 'Orso Sobrio',
    tags: 'Brand Identity · Packaging',
    desc: 'Brand identity per beverage artigianale.',
    images: Array.from({length:7}, (_,i) => `assets/projects/manavi/grafica/6-orsosobrio/${i+1}.jpg`)
  },
  anymalia: {
    title: 'Anymalia',
    tags: 'Brand Identity · Logo',
    desc: 'Identita visiva per brand nel settore animali.',
    images: Array.from({length:12}, (_,i) => `assets/projects/manavi/grafica/7-anymalia/${i+1}.jpg`)
  },
  diriso: {
    title: 'Di Riso',
    tags: 'Packaging · Pubblicita',
    desc: 'Packaging e comunicazione food brand.',
    images: [
      ...Array.from({length:4}, (_,i) => `assets/projects/manavi/grafica/8-diriso/${i+1}.jpg`),
      ...Array.from({length:6}, (_,i) => `assets/projects/manavi/grafica/8-diriso/${i+6}.jpg`)
    ]
  },
  packEtichette: {
    title: 'Pack & Etichette',
    tags: 'Packaging · Label Design',
    desc: 'Packaging e label design come sistema coordinato: tipografia, palette cromatica e gerarchia visiva integrati con vincoli tecnici di stampa (offset, serigrafia, rifiniture UV) e normative di etichettatura.',
    images: Array.from({length:9}, (_,i) => `assets/projects/manavi/grafica/9-pack-etichette/${i+1}.jpg`)
  },
  render3d: {
    title: 'Render 3D',
    tags: '3D · Rendering',
    desc: 'Modellazione e rendering 3D in Blender e Adobe Dimension con materiali PBR, illuminazione HDRI e color grading finale. Mockup fotorealistici per presentazioni cliente e campagne editoriali.',
    images: Array.from({length:10}, (_,i) => `assets/projects/manavi/grafica/10-render3d/${i+1}.jpg`)
  }
};

const WEB_PROJECTS = {
  ecommerce: {
    title: 'E-Commerce Borse',
    tags: 'E-Commerce · WordPress',
    desc: 'Sito e-commerce specializzato nella vendita di borse da donna con landing page bonus.',
    images: [
      'assets/projects/web/1-ecommerce/cover.jpg',
      ...Array.from({length:11}, (_,i) => `assets/projects/web/1-ecommerce/${i+1}.jpg`)
    ]
  },
  concerto: {
    title: 'Sito Concerto',
    tags: 'Web Design · UI/UX',
    desc: 'Sito web interattivo per fan con esperienza di acquisto biglietti fluida e piacevole.',
    images: [
      'assets/projects/web/2-concerto/cover.jpg',
      ...Array.from({length:3}, (_,i) => `assets/projects/web/2-concerto/${i+1}.jpg`)
    ]
  },
  vini: {
    title: 'Cantina Vinicola',
    tags: 'Web Design · Brand Identity',
    desc: 'Sito vetrina per cantina vinicola con naming unico e identita visiva originale.',
    images: [
      'assets/projects/web/3-vini/cover.jpg',
      ...Array.from({length:2}, (_,i) => `assets/projects/web/3-vini/${i+1}.jpg`)
    ]
  },
  bike: {
    title: "D'argento Bike",
    tags: 'E-Commerce · One Page',
    desc: 'E-commerce one page per negozio specializzato in biciclette elettriche.',
    images: [
      'assets/projects/web/4-dargentobike/cover.jpg',
      'assets/projects/web/4-dargentobike/2.jpg'
    ]
  }
};

/* ─── UTILS ─────────────────────────────────────────────────── */
const $ = sel => document.querySelector(sel);
const $$ = sel => [...document.querySelectorAll(sel)];
function lerp(a, b, t) { return a + (b - a) * t; }

/* ─── GRAIN CANVAS ──────────────────────────────────────────── */
(function initGrain() {
  const canvas = document.getElementById('grain');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, last = 0;
  const FPS = 20, INTERVAL = 1000 / FPS;
  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  function draw(ts) {
    requestAnimationFrame(draw);
    if (ts - last < INTERVAL) return;
    last = ts;
    const img = ctx.createImageData(W, H);
    const data = img.data;
    for (let i = 0; i < data.length; i += 4) {
      const v = Math.random() * 255 | 0;
      data[i] = data[i+1] = data[i+2] = v;
      data[i+3] = 18;
    }
    ctx.putImageData(img, 0, 0);
  }
  resize();
  requestAnimationFrame(draw);
  window.addEventListener('resize', resize, { passive: true });
})();

/* ─── CUSTOM CURSOR ─────────────────────────────────────────── */
(function initCursor() {
  const ring = document.getElementById('cursorRing');
  const dot  = document.getElementById('cursorDot');
  if (!ring || !dot) return;
  let mx = -100, my = -100, rx = -100, ry = -100;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
  });
  document.addEventListener('mouseleave', () => { ring.style.opacity = '0'; dot.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { ring.style.opacity = '1'; dot.style.opacity = '1'; });
  $$('a,button,.gc,.wc,.pdf-card').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('ring--hover'));
    el.addEventListener('mouseleave', () => ring.classList.remove('ring--hover'));
  });
  (function loop() {
    rx = lerp(rx, mx, 0.12);
    ry = lerp(ry, my, 0.12);
    ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
    requestAnimationFrame(loop);
  })();
})();

/* ─── NAV scroll behaviour ──────────────────────────────────── */
(function initNav() {
  const nav = document.getElementById('nav');
  if (!nav || nav.classList.contains('scrolled')) return;
  function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ─── MOBILE MENU ───────────────────────────────────────────── */
(function initMob() {
  const burger  = document.getElementById('burger');
  const mobMenu = document.getElementById('mobMenu');
  if (!burger || !mobMenu) return;
  burger.addEventListener('click', () => {
    const open = mobMenu.classList.toggle('open');
    burger.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  $$('.mob-link').forEach(a => {
    a.addEventListener('click', () => {
      mobMenu.classList.remove('open');
      burger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
})();

/* ─── MAGNETIC BUTTONS ──────────────────────────────────────── */
(function initMagnetic() {
  $$('.mag').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - r.left - r.width  / 2) * 0.35;
      const dy = (e.clientY - r.top  - r.height / 2) * 0.35;
      el.style.transform = `translate(${dx}px,${dy}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = 'translate(0,0)'; });
  });
})();

/* ─── PAGE TRANSITION ───────────────────────────────────────── */
(function initPageTransition() {
  const overlay = document.getElementById('pageOverlay');
  if (!overlay) return;
  window.addEventListener('load', () => { overlay.classList.add('hidden'); });
  $$('a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') ||
        href.startsWith('mailto') || a.target === '_blank') return;
    a.addEventListener('click', e => {
      e.preventDefault();
      overlay.classList.remove('hidden');
      setTimeout(() => { window.location.href = href; }, 450);
    });
  });
})();

/* ─── LOADER (index only) ───────────────────────────────────── */
(function initLoader() {
  const loader = document.getElementById('loader');
  const bar    = document.getElementById('loaderBar');
  if (!loader || !bar) return;
  gsap.to('.loader-name', { opacity: 1, duration: 0.6, ease: 'power2.out' });
  const tl = gsap.timeline({
    onComplete: () => {
      gsap.to(loader, {
        yPercent: -100, duration: 0.8, ease: 'power3.inOut',
        onComplete: () => {
          loader.style.display = 'none';
          document.body.classList.remove('is-loading');
          heroReveal();
        }
      });
    }
  });
  tl.to(bar, { width: '100%', duration: 1.4, ease: 'power2.inOut' })
    .to(bar, { opacity: 0, duration: 0.2 }, '>-0.1');
})();

/* ─── HERO REVEAL (index only) ──────────────────────────────── */
function heroReveal() {
  const eyebrow = $('.hero-eyebrow');
  const lines   = $$('.hz-mask');
  const aside   = $('.hero-aside');
  const foot    = $('.hero-foot');
  const scroll  = $('.hero-scroll');
  if (!eyebrow) return;
  gsap.set([eyebrow, foot, scroll], { opacity: 0, y: 16 });
  gsap.set(aside, { opacity: 0, x: 10 });
  lines.forEach(mask => {
    const child = mask.firstElementChild;
    if (child) gsap.set(child, { yPercent: 110 });
  });
  gsap.timeline({ defaults: { ease: 'power3.out' } })
    .to(eyebrow, { opacity: 1, y: 0, duration: 0.65 })
    .to(lines.map(m => m.firstElementChild).filter(Boolean),
        { yPercent: 0, duration: 1, stagger: 0.13, force3D: true }, '-=0.3')
    .to(aside,  { opacity: 1, x: 0, duration: 0.7, ease: 'power2.out' }, '-=0.5')
    .to(foot,   { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
    .to(scroll, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3');
}
(function() {
  if (!document.getElementById('loader') && document.querySelector('.hero')) {
    window.addEventListener('load', heroReveal);
  }
})();

/* ─── PDF CARDS ─────────────────────────────────────────────── */
(function initPdfCards() {
  $$('.pdf-card').forEach(card => {
    card.addEventListener('click', () => {
      const pdf = card.dataset.pdf;
      if (pdf) window.open(pdf, '_blank');
    });
  });
})();

/* ─── HP CARD PARALLAX ──────────────────────────────────────── */
(function initHpParallax() {
  $$('.hp-card').forEach(card => {
    const img = card.querySelector('img');
    if (!img) return;
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width  - 0.5;
      const ny = (e.clientY - r.top)  / r.height - 0.5;
      img.style.transform = `scale(1.08) translate(${nx * 12}px, ${ny * 12}px)`;
    });
    card.addEventListener('mouseleave', () => { img.style.transform = ''; });
  });
})();

/* ─── SKILL BARS ────────────────────────────────────────────── */
(function initSkillBars() {
  if (typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);
  $$('.skill-fill').forEach(fill => {
    const target = fill.dataset.w || 50;
    gsap.fromTo(fill,
      { width: '0%' },
      {
        width: target + '%',
        duration: 1.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: fill, start: 'top 90%', once: true }
      }
    );
  });
})();

/* ─── LIGHTBOX ──────────────────────────────────────────────── */
const Lightbox = (() => {
  const lb      = document.getElementById('lightbox');
  const lbInfo  = document.getElementById('lbInfo');
  const lbStage = document.getElementById('lbStage');
  const lbCount = document.getElementById('lbCount');
  const lbPrev  = document.getElementById('lbPrev');
  const lbNext  = document.getElementById('lbNext');
  const lbClose = document.getElementById('lbClose');
  if (!lb) return {};

  let images = [], idx = 0;

  function render() {
    lbStage.innerHTML = '';
    const img = document.createElement('img');
    img.src = images[idx];
    img.alt = '';
    lbStage.appendChild(img);
    lbCount.textContent = `${idx + 1} / ${images.length}`;
    lbPrev.disabled = images.length <= 1;
    lbNext.disabled = images.length <= 1;
  }

  function open(projectKey, type, startIdx) {
    const data = type === 'web' ? WEB_PROJECTS[projectKey] : GRAFICA_PROJECTS[projectKey];
    if (!data) return;
    images = data.images;
    idx = (startIdx !== undefined && startIdx < images.length) ? startIdx : 0;
    lbInfo.innerHTML = `
      <span class="lb-tag">${data.tags}</span>
      <h2 class="lb-title">${data.title}</h2>
      <p class="lb-desc">${data.desc}</p>`;
    render();
    lb.setAttribute('aria-hidden', 'false');
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function openAt(projectKey, type, startIdx) { open(projectKey, type, startIdx); }

  function close() {
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function prev() { idx = (idx - 1 + images.length) % images.length; render(); }
  function next() { idx = (idx + 1) % images.length; render(); }

  if (lbClose) lbClose.addEventListener('click', close);
  if (lbPrev)  lbPrev.addEventListener('click', prev);
  if (lbNext)  lbNext.addEventListener('click', next);
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape')     close();
    if (e.key === 'ArrowLeft')  prev();
    if (e.key === 'ArrowRight') next();
  });

  return { open, openAt };
})();

/* ─── GRAFICA CARDS ─────────────────────────────────────────── */
(function initGraficaCards() {
  $$('.gc').forEach(card => {
    card.addEventListener('click', () => {
      const key = card.dataset.project;
      if (key && Lightbox.open) Lightbox.open(key, 'grafica');
    });
  });
})();

/* ─── PACK & ETICHETTE + RENDER 3D ──────────────────────────── */
(function initExtraSections() {
  $$('.render-img').forEach(el => {
    el.addEventListener('click', () => {
      const key = el.dataset.project;
      const startIdx = parseInt(el.dataset.idx || '0', 10);
      if (key && Lightbox.openAt) Lightbox.openAt(key, 'grafica', startIdx);
    });
  });
  $$('.render-more').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.project;
      const startIdx = parseInt(btn.dataset.idx || '0', 10);
      if (key && Lightbox.openAt) Lightbox.openAt(key, 'grafica', startIdx);
    });
  });
})();

/* ─── WEB CARDS ─────────────────────────────────────────────── */
(function initWebCards() {
  $$('.wc').forEach(card => {
    const btn = card.querySelector('.wc-btn');
    const openCard = () => {
      const key = card.dataset.project;
      if (key && Lightbox.open) Lightbox.open(key, 'web');
    };
    if (btn) btn.addEventListener('click', openCard);
  });
  $$('.wc-screen').forEach(screen => {
    screen.style.cursor = 'pointer';
    screen.addEventListener('click', () => {
      const card = screen.closest('.wc');
      const key  = card && card.dataset.project;
      if (key && Lightbox.open) Lightbox.open(key, 'web');
    });
  });
})();

/* ─── MARQUEE PAUSE ON HOVER ────────────────────────────────── */
(function initMarquee() {
  const track = $('.marquee-track');
  if (!track) return;
  track.addEventListener('mouseenter', () => { track.style.animationPlayState = 'paused'; });
  track.addEventListener('mouseleave', () => { track.style.animationPlayState = 'running'; });
})();
