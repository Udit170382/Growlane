/* Growlane Consulting &mdash; app logic: icons, section renderers, router, interactions */

const ICONS = {
  gauge: '<circle cx="12" cy="13" r="8"/><path d="M12 13l4-4"/><path d="M9 4h6"/>',
  cursor: '<path d="M5 3l14 6-6 2-2 6-6-14z"/>',
  ghost: '<path d="M6 19V11a6 6 0 0 1 12 0v8l-2.5-2-2 2-2-2-2 2-2-2L6 19z"/><circle cx="9.5" cy="11" r=".8" fill="currentColor" stroke="none"/><circle cx="14.5" cy="11" r=".8" fill="currentColor" stroke="none"/>',
  block: '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M4 16l6-6 4 4 6-6"/>',
  split: '<path d="M6 4v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V4"/><path d="M12 13v7"/>',
  shield: '<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/>',
  bolt: '<path d="M13 3L5 14h6l-1 7 8-11h-6l1-7z"/>',
  target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r=".6" fill="currentColor" stroke="none"/>',
  target2: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r=".6" fill="currentColor" stroke="none"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6"/>',
  layers: '<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/>',
  doc: '<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/><path d="M10 12h6M10 16h6"/>',
  cross: '<path d="M12 5v14M5 12h14"/>',
  board: '<rect x="4" y="4" width="16" height="16" rx="2.5"/><path d="M9 4v16M4 9h5"/>',
  tag: '<path d="M4 4h7l9 9-7 7-9-9V4z"/><circle cx="8" cy="8" r="1.2" fill="currentColor" stroke="none"/>',
  star: '<path d="M12 3l2.6 5.8 6.4.6-4.8 4.3 1.4 6.3L12 16.9 6.4 20l1.4-6.3-4.8-4.3 6.4-.6L12 3z"/>',
  lock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  toggle: '<rect x="3" y="8" width="18" height="8" rx="4"/><circle cx="8" cy="12" r="2.6" fill="currentColor" stroke="none"/>',
  layout: '<rect x="3.5" y="4" width="17" height="16" rx="2.5"/><path d="M3.5 9.5h17M9 9.5V20"/>',
  code: '<path d="M9 8l-5 4 5 4M15 8l5 4-5 4"/>',
  refresh: '<path d="M4 12a8 8 0 0 1 13.7-5.7L20 8"/><path d="M20 4v4h-4"/><path d="M20 12a8 8 0 0 1-13.7 5.7L4 16"/><path d="M4 20v-4h4"/>',
  heart: '<path d="M12 20s-7-4.4-9.5-9C1 7.5 2.8 4 6.3 4c2 0 3.4 1.1 4.2 2.4a1 1 0 0 0 1 0C12.3 5.1 13.7 4 15.7 4 19.2 4 21 7.5 19.5 11c-2.5 4.6-9.5 9-9.5 9z"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  play: '<circle cx="12" cy="12" r="9"/><path d="M10 8.5l6 3.5-6 3.5v-7z" fill="currentColor" stroke="none"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7"/>',
  ig: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r="1" fill="currentColor" stroke="none"/>',
  mail: '<rect x="3.5" y="5" width="17" height="14" rx="2.5"/><path d="M4 6.5l8 6 8-6"/>',
  calendar: '<rect x="4" y="5" width="16" height="15" rx="2.5"/><path d="M8 3v4M16 3v4M4 10h16"/>',
  tooth: '<path d="M7 3c2-1 3 1 5 1s3-2 5-1c1 .5 2 2 2 4 0 3-1 4-1 7 0 2-1 4-2 4s-1-2-1-4c0-1-.5-2-2-2s-2 1-2 2c0 2 0 4-1 4s-2-2-2-4c0-3-1-4-1-7 0-2 1-3.5 2-4z"/>',
  sparkle: '<path d="M12 3l1.6 6.4L20 11l-6.4 1.6L12 19l-1.6-6.4L4 11l6.4-1.6L12 3z"/>',
  badge: '<circle cx="12" cy="8" r="5"/><path d="M9 12.5L7 21l5-3 5 3-2-8.5"/>',
  building: '<rect x="5" y="3" width="14" height="18" rx="1.5"/><path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1"/>',
};

function icon(name, size = 22) {
  const body = ICONS[name] || ICONS.star;
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;
}

function splitHeadline(text) {
  // splits into per-word spans (for staggered blur-in reveal), keeping *word* as italic accent
  // splits purely on whitespace so attached punctuation (e.g. "*gamble*.") stays glued to its word
  return text.split(' ').filter(Boolean).map((word, i) => {
    const content = word.replace(/\*([^*]*)\*/g, '<span class="accent">$1</span>');
    return `<span class="word" style="transition-delay:${i * 45}ms">${content}</span>`;
  }).join(' ');
}

function fmtDate(iso) {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

/* ---------------- Shared chrome ---------------- */

function navHTML() {
  return `
  <nav class="site-nav" id="site-nav">
    <div class="wrap site-nav-inner">
      <a href="#/" class="brand-logo">growlane<sup>&reg;</sup></a>
      <button class="menu-btn" id="menu-toggle" aria-expanded="false">
        Menu ${icon('arrow', 14).replace('stroke-width="1.6"', 'stroke-width="2"')}
      </button>
    </div>
  </nav>
  <div class="menu-overlay" id="menu-overlay">
    <div class="wrap" style="display:flex;justify-content:space-between;align-items:center;padding-top:20px;">
      <a href="#/" class="brand-logo">growlane<sup>&reg;</sup></a>
      <button class="menu-btn open" id="menu-close">Close <span style="display:inline-flex;transform:rotate(45deg);">${icon('plus', 13)}</span></button>
    </div>
    <div class="menu-overlay-links">
      ${CONTENT.nav.map(n => `<a href="${n.href}" data-route="${n.href}">${n.label}</a>`).join('')}
    </div>
    <div class="menu-overlay-footer">&copy; ${new Date().getFullYear()} ${CONTENT.brand} &middot; ${EMAIL}</div>
  </div>`;
}

function floatingCtaHTML() {
  return `
  <a href="${CALENDLY}" target="_top" rel="noopener" class="floating-cta" id="floating-cta">
    ${icon('calendar', 17)}
    <span>Book a free call</span>
  </a>`;
}

function initFloatingCta() {
  const el = document.getElementById('floating-cta');
  if (!el) return;
  const toggle = () => el.classList.toggle('visible', window.scrollY > 480);
  toggle();
  window.addEventListener('scroll', toggle, { passive: true });
}

function footerHTML() {
  return `
  <footer class="site-footer">
    <div class="wrap">
      <div class="footer-top">
        <div style="max-width:300px;">
          <a href="#/" class="brand-logo" style="font-size:26px;">growlane<sup>&reg;</sup></a>
          <p class="muted-on-black" style="margin-top:14px;font-size:14.5px;line-height:1.6;">Web design built to book patients, for medspas, dermatology, dental, and wellness practices.</p>
          <a href="${INSTAGRAM}" target="_top" rel="noopener" class="social-icon" style="margin-top:20px;">${icon('ig', 17)}</a>
        </div>
        <div class="footer-links">
          ${CONTENT.footerNav.map(n => `<a href="${n.href}">${n.label}</a>`).join('')}
        </div>
      </div>
      <div class="footer-bottom">
        <span class="muted-on-black" style="font-size:13.5px;">&copy; ${new Date().getFullYear()} ${CONTENT.brand}. All rights reserved.</span>
        <div class="footer-bottom-links">
          <a href="#/thank-you">Thank You</a>
          <a href="#/privacy">Privacy Policy</a>
          <a href="#/terms">Terms</a>
        </div>
      </div>
    </div>
  </footer>`;
}

function blobField(variant = 'hero') {
  if (variant === 'hero') {
    return `<div class="blob-field">
      <div class="blob blob-indigo" style="width:520px;height:520px;top:-160px;right:-120px;"></div>
      <div class="blob blob-teal" style="width:380px;height:380px;top:120px;right:280px;opacity:0.35;"></div>
      <div class="blob blob-violet" style="width:300px;height:300px;top:-40px;right:520px;opacity:0.25;"></div>
    </div>`;
  }
  return `<div class="blob-field">
    <div class="blob blob-teal" style="width:420px;height:420px;top:-140px;left:-100px;opacity:0.3;"></div>
    <div class="blob blob-indigo" style="width:380px;height:380px;bottom:-160px;right:-100px;opacity:0.3;"></div>
  </div>`;
}

/* ---------------- Reusable sections ---------------- */

function eyebrowHTML(text, onBlack = false) {
  return `<span class="eyebrow${onBlack ? ' on-black' : ''}">${text}</span>`;
}

function marquee(itemsHtml, { duration = 26 } = {}) {
  return `<div class="marquee"><div class="marquee-track" style="animation-duration:${duration}s;">${itemsHtml}${itemsHtml}</div></div>`;
}

function ctaButtons({ primary = 'Book a free strategy call', showChip = true, align = 'left' } = {}) {
  return `<div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap;${align === 'center' ? 'justify-content:center;' : ''}">
    <a href="${CALENDLY}" target="_top" rel="noopener" class="btn btn-primary">${primary}</a>
    ${showChip ? `<a href="${CALENDLY}" target="_top" rel="noopener" class="chip-booking">
      <span class="chip-avatar"></span>
      <span class="chip-text"><span class="chip-title">Talk to Udit</span><span class="chip-sub"><span class="dot-live"></span> Available this week</span></span>
    </a>` : ''}
  </div>`;
}

function pageHero({ eyebrow, title, sub, blobs = true }) {
  return `
  <section class="section" style="padding-top:56px;padding-bottom:70px;position:relative;overflow:hidden;">
    ${blobs ? blobField('hero') : ''}
    <div class="wrap" style="position:relative;z-index:1;">
      <div class="reveal">${eyebrowHTML(eyebrow)}</div>
      <h1 class="hero-headline reveal-words" style="margin-top:22px;max-width:820px;">${splitHeadline(title)}</h1>
      <p class="reveal text-muted" style="margin-top:22px;max-width:560px;font-size:18px;line-height:1.6;">${sub}</p>
    </div>
  </section>`;
}

function trustedByStrip() {
  const pills = CONTENT.industries.map(i => `<span class="eyebrow" style="font-weight:600;text-transform:none;letter-spacing:0;">${i}</span>`).join('');
  return `
  <section class="section-tight">
    <div class="wrap reveal" style="display:flex;align-items:center;gap:28px;">
      <span class="text-muted" style="font-size:14.5px;max-width:190px;flex-shrink:0;">Trusted by practice owners who are done waiting on generalist agencies.</span>
      ${marquee(pills, { duration: 22 })}
    </div>
  </section>`;
}

function cardGridSection({ eyebrow, title, items, cols = 3 }) {
  return `
  <section class="section">
    <div class="wrap">
      <div class="reveal">${eyebrowHTML(eyebrow)}</div>
      <h2 class="reveal-words" style="font-size:clamp(28px,4vw,42px);margin-top:18px;max-width:640px;">${splitHeadline(title)}</h2>
      <div class="grid-${cols} reveal-stagger" style="margin-top:48px;">
        ${items.map(it => `
        <div class="card reveal-item">
          <div class="card-icon">${icon(it.icon)}</div>
          <h3>${it.title}</h3>
          <p class="body-sm">${it.body}</p>
        </div>`).join('')}
      </div>
    </div>
  </section>`;
}

function comparisonSection() {
  const { headers, rows } = CONTENT.comparison;
  return `
  <section class="section">
    <div class="wrap">
      <div class="reveal">${eyebrowHTML('Why Growlane')}</div>
      <h2 class="reveal-words" style="font-size:clamp(28px,4vw,42px);margin-top:18px;max-width:640px;">${splitHeadline('*One* clear choice, once you see it side by side.')}</h2>
      <div class="cmp-scroll reveal" style="margin-top:40px;">
        <table class="cmp-table">
          <thead><tr><th></th><th class="hl">${headers[0]}</th><th>${headers[1]}</th><th>${headers[2]}</th></tr></thead>
          <tbody>
            ${rows.map(r => `<tr><td>${r[0]}</td><td class="hl">${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td></tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>
  </section>`;
}

function processSection() {
  return `
  <section class="section">
    <div class="wrap">
      <div class="reveal">${eyebrowHTML('How It Works')}</div>
      <h2 class="reveal-words" style="font-size:clamp(28px,4vw,42px);margin-top:18px;max-width:640px;">${splitHeadline('Welcome to the *better* way of getting patients online.')}</h2>
      <p class="reveal text-muted" style="margin-top:16px;max-width:480px;font-size:16px;">A simple, booking-focused process for practices that want a better website, without the guesswork.</p>
      <div class="grid-3 reveal-stagger" style="margin-top:48px;">
        ${CONTENT.process.map(p => `
        <div class="card reveal-item" style="padding:32px 28px;">
          <div class="text-muted" style="font-family:var(--font-display);font-weight:800;font-size:13px;margin-bottom:16px;">${p.num}</div>
          <h3 style="font-size:19px;">${p.title}</h3>
          <p class="body-sm" style="margin-top:10px;">${p.body}</p>
        </div>`).join('')}
      </div>
    </div>
  </section>`;
}

function statsSection() {
  return `
  <section class="section-tight">
    <div class="wrap">
      <div class="grid-4 reveal-stagger">
        ${CONTENT.stats.map(s => `
        <div class="reveal-item center">
          <div class="stat-num">${s.value}</div>
          <div class="text-muted" style="font-size:14px;margin-top:6px;">${s.label}</div>
        </div>`).join('')}
      </div>
    </div>
  </section>`;
}

function statsCtaBanner() {
  return `
  <section class="section">
    <div class="wrap stats-cta-banner reveal">
      <h2 class="reveal-words" style="font-size:clamp(26px,4vw,38px);">${splitHeadline('Practices are trading generic templates for websites built to *book* patients.')}</h2>
      <p class="text-muted" style="margin-top:16px;font-size:16px;">A site built around appointments, not just good looks.</p>
      <div style="margin-top:28px;display:flex;justify-content:center;">${ctaButtons({ primary: 'Book a 15-min intro call' })}</div>
    </div>
  </section>`;
}

function testimonialsSection() {
  return `
  <section class="section">
    <div class="wrap">
      <div class="reveal">${eyebrowHTML('Testimonials')}</div>
      <h2 class="reveal-words" style="font-size:clamp(28px,4vw,42px);margin-top:18px;max-width:640px;">${splitHeadline('Don\'t take *our* word for it.')}</h2>
      <div class="tcarousel reveal" style="margin-top:44px;">
        <div class="tcarousel-track" id="tcarousel-track">
          ${CONTENT.testimonials.map(t => `
          <div class="tcard">
            <div class="card" style="position:relative;min-height:230px;display:flex;flex-direction:column;">
              <span class="quote-mark">"</span>
              <div class="avatar-circle">${t.initials}</div>
              <p style="margin-top:20px;font-size:15px;line-height:1.6;flex:1;">${t.quote}</p>
              <div style="margin-top:18px;">
                <div style="font-weight:700;font-size:14.5px;">${t.name}</div>
                <div class="text-muted" style="font-size:13.5px;">${t.role}</div>
              </div>
            </div>
          </div>`).join('')}
        </div>
        <div class="tdots" id="tcarousel-dots"></div>
      </div>
    </div>
  </section>`;
}

function blogPreviewSection() {
  const posts = CONTENT.blog.slice(0, 3);
  const [featured, ...rest] = posts;
  return `
  <section class="section">
    <div class="wrap">
      <div class="flex-between reveal">
        <div>
          ${eyebrowHTML('Blog')}
          <h2 class="reveal-words" style="font-size:clamp(28px,4vw,42px);margin-top:18px;max-width:520px;">${splitHeadline('Ideas on *building* websites that grow.')}</h2>
        </div>
        <a href="#/blog" class="btn btn-secondary">View all posts</a>
      </div>
      <div class="blog-preview-grid reveal-stagger">
        ${blogFeaturedCard(featured)}
        <div style="display:grid;gap:20px;">
          ${rest.map(p => blogSmallCard(p)).join('')}
        </div>
      </div>
    </div>
  </section>`;
}

const CATEGORY_ICONS = { Strategy: 'target', Healthcare: 'cross', Workflow: 'refresh', SEO: 'gauge' };
function categoryIcon(category) { return CATEGORY_ICONS[category] || 'star'; }

function blogFeaturedCard(p) {
  return `
  <a href="#/blog/${p.slug}" class="card reveal-item" style="padding:0;overflow:hidden;display:block;">
    <div class="gradient-${p.gradient} blog-visual" style="height:260px;position:relative;">
      <span class="case-card__icon" style="width:60px;height:60px;">${icon(categoryIcon(p.category), 28)}</span>
      <span class="post-tag">${p.category}</span>
    </div>
    <div style="padding:32px;">
      <div class="text-muted" style="font-size:13px;">${fmtDate(p.date)} &middot; ${p.readTime}</div>
      <h3 style="font-size:22px;margin-top:10px;">${p.title}</h3>
      <p class="body-sm" style="margin-top:10px;">${p.excerpt}</p>
    </div>
  </a>`;
}

function blogSmallCard(p) {
  return `
  <a href="#/blog/${p.slug}" class="card reveal-item" style="padding:22px;display:flex;gap:16px;align-items:flex-start;">
    <div class="gradient-${p.gradient} blog-visual" style="width:84px;height:84px;border-radius:14px;flex-shrink:0;">
      <span class="blog-visual__icon-sm">${icon(categoryIcon(p.category), 16)}</span>
    </div>
    <div>
      <div class="text-muted" style="font-size:12px;">${p.category}</div>
      <h3 style="font-size:16px;margin-top:6px;line-height:1.35;">${p.title}</h3>
    </div>
  </a>`;
}

function faqSection() {
  return `
  <section class="section">
    <div class="wrap">
      <div class="faq-shell reveal">
        <div class="flex-between" style="align-items:flex-start;">
          <div>
            ${eyebrowHTML('FAQs')}
            <h2 class="reveal-words" style="font-size:clamp(26px,4vw,38px);margin-top:18px;">${splitHeadline('Frequently Asked *Questions*.')}</h2>
          </div>
          <div style="text-align:right;">
            <div class="text-muted" style="font-size:13px;">Email</div>
            <div style="font-weight:700;margin-bottom:14px;">${EMAIL}</div>
            <a href="${CALENDLY}" target="_top" rel="noopener" class="btn btn-primary btn-sm">Get in touch</a>
          </div>
        </div>
        <div style="margin-top:36px;">
          ${CONTENT.faqs.map((f, i) => `
          <div class="faq-row" data-faq="${i}">
            <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-answer-${i}">
              <span>${f.q}</span>
              <span class="faq-toggle" aria-hidden="true">${icon('plus', 14)}</span>
            </button>
            <div class="faq-answer" id="faq-answer-${i}" role="region"><div class="faq-answer-inner">${f.a}</div></div>
          </div>`).join('')}
        </div>
      </div>
    </div>
  </section>`;
}

function finalCta({ title, sub, cta = 'Book a free strategy call' }) {
  return `
  <section class="section section-black" style="overflow:hidden;position:relative;">
    <div class="wrap" style="position:relative;z-index:1;">
      <h2 class="reveal-words" style="color:#fff;font-size:clamp(30px,5.2vw,52px);max-width:760px;">${splitHeadline(title)}</h2>
      <p class="reveal muted-on-black" style="margin-top:20px;max-width:480px;font-size:17px;line-height:1.6;">${sub}</p>
      <div class="reveal" style="margin-top:32px;">
        <a href="${CALENDLY}" target="_top" rel="noopener" class="btn btn-on-black">${cta}</a>
      </div>
    </div>
  </section>`;
}

function showcaseSection({ eyebrow = 'Portfolio', title, items }) {
  return `
  <section class="section-black section" style="overflow:hidden;">
    <div class="wrap">
      <div class="flex-between reveal" style="align-items:flex-end;">
        <div>
          <span class="eyebrow on-black">${eyebrow}</span>
          <h2 class="reveal-words" style="color:#fff;font-size:clamp(26px,4vw,40px);margin-top:18px;max-width:520px;">${splitHeadline(title)}</h2>
        </div>
      </div>
      <div class="showcase-track reveal" style="margin-top:40px;">
        ${items.map(it => `
        <a class="showcase-card" href="#/portfolio" style="display:block;">
          <div class="showcase-visual gradient-${it.gradient}${it.image ? ' case-card__visual--photo' : ''}">${it.image ? `<img src="${it.image}" alt="" class="case-card__photo">` : `<span class="case-card__icon">${icon(it.icon || 'star', 30)}</span>`}</div>
          <div class="showcase-caption">
            <div class="tag">${it.tag}</div>
            <div style="color:#fff;font-weight:700;margin-top:4px;">${it.title}</div>
            <div class="demo-note">${it.note || 'Example layout for demo purposes only.'}</div>
          </div>
        </a>`).join('')}
      </div>
    </div>
  </section>`;
}

/* ---------------- Pages ---------------- */

function pageHome() {
  return `
  ${pageHero({
    eyebrow: 'Web design for clinics, medspas & practices',
    title: 'Websites your patients *actually* book from.',
    sub: `${CONTENT.brand} designs and builds fast, conversion-focused websites exclusively for medspas, dermatology, dental, weight loss, and wellness practices. Not a generalist agency that treats your intake form like a contact form.`,
  })}
  <div class="wrap reveal" style="margin-top:-30px;margin-bottom:40px;position:relative;z-index:1;">
    ${marquee(CONTENT.heroPills.map(p => `<span class="eyebrow" style="font-weight:600;text-transform:none;letter-spacing:0;">${p}</span>`).join(''), { duration: 20 })}
    <div style="margin-top:28px;">${ctaButtons()}</div>
  </div>
  ${trustedByStrip()}
  ${cardGridSection({ eyebrow: 'The Problem', title: 'Most practice websites are *quietly* costing you patients.', items: CONTENT.problems })}
  ${cardGridSection({ eyebrow: 'The Fix', title: 'Here\'s what changes the moment you work with *Growlane*.', items: CONTENT.fixes })}
  ${comparisonSection()}
  ${processSection()}
  ${statsCtaBanner()}
  ${cardGridSection({ eyebrow: 'What You Get', title: 'Every project includes the *basics* done right.', items: CONTENT.features })}
  ${showcaseSection({
    title: '*Better* design, shipped faster.',
    items: CONTENT.caseStudies.slice(0, 3).map(c => ({ gradient: c.gradient, icon: c.icon, image: c.image, tag: c.tag, title: c.title, note: c.note, refLink: c.refLink })),
  })}
  ${testimonialsSection()}
  ${blogPreviewSection()}
  ${faqSection()}
  ${finalCta({
    title: 'Your next website shouldn\'t feel like a *gamble*.',
    sub: 'Book a free 20-minute strategy call. No pitch deck, no pressure &mdash; just a clear plan for what your site should actually do.',
  })}
  `;
}

function pageServices() {
  return `
  ${pageHero({
    eyebrow: 'Services',
    title: 'Everything your website needs. *Nothing* it doesn\'t.',
    sub: 'Design, development, and ongoing support &mdash; scoped around what your business actually needs to grow, not a fixed package that half-fits.',
  })}
  <section class="section" style="padding-top:0;">
    <div class="wrap">
      <div class="grid-3 reveal-stagger">
        ${CONTENT.services.map(s => `
        <a href="${s.href || '#'}" class="card reveal-item" style="${s.href ? '' : 'cursor:default;'}">
          <div class="card-icon">${icon(s.icon)}</div>
          <h3>${s.title}</h3>
          <p class="body-sm">${s.body}</p>
          ${s.href ? `<div style="margin-top:16px;font-size:13.5px;font-weight:700;display:flex;align-items:center;gap:6px;">Learn more ${icon('arrow', 14)}</div>` : ''}
        </a>`).join('')}
      </div>
    </div>
  </section>
  ${processSection()}
  ${faqSection()}
  ${finalCta({
    title: 'Not sure which service *fits*?',
    sub: 'Book a free call and we\'ll tell you honestly what your site needs &mdash; even if it\'s less than you think.',
  })}
  `;
}

function pagePortfolio() {
  return `
  ${pageHero({
    eyebrow: 'Portfolio',
    title: 'Style directions we *can* build in.',
    sub: 'A few real reference points for clinics, medspas, and dental practices. Tap any card to see the live site.',
  })}
  <section class="section" style="padding-top:0;">
    <div class="wrap">
      <div class="tcarousel reveal">
        <div class="tcarousel-track" id="case-carousel-track">
          ${CONTENT.caseStudies.filter(c => c.refLink).map(c => {
            const Tag = 'a';
            const linkAttrs = `href="${c.refLink}" target="_top" rel="noopener"`;
            return `
          <div class="tcard" style="width:min(88vw,620px);">
            <${Tag} class="card" style="padding:0;overflow:hidden;display:block;" ${linkAttrs}>
              <div class="gradient-${c.gradient} case-card__visual${c.image ? ' case-card__visual--photo' : ''}" style="height:180px;border-radius:0;position:relative;">
                ${c.image ? `<img src="${c.image}" alt="" class="case-card__photo">` : `<span class="case-card__icon">${icon(c.icon || 'star', 30)}</span>`}
                ${c.refLink ? `<span style="position:absolute;top:16px;right:16px;background:rgba(255,255,255,0.92);color:var(--ink);font-size:12px;font-weight:700;padding:6px 14px;border-radius:999px;display:flex;align-items:center;gap:6px;">View live reference ${icon('arrow', 13)}</span>` : ''}
              </div>
              <div style="padding:32px;">
                <div class="text-muted" style="font-size:12.5px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">${c.tag} &middot; ${c.note}</div>
                <h3 style="font-size:21px;margin-top:8px;color:var(--ink);">${c.title}</h3>
                <p class="body-sm" style="margin-top:14px;"><strong style="color:var(--ink);">Before:</strong> ${c.before}</p>
                <p class="body-sm" style="margin-top:8px;"><strong style="color:var(--ink);">After:</strong> ${c.after}</p>
                <p style="margin-top:16px;font-size:15px;font-weight:600;color:var(--accent-teal);">${c.impact}</p>
              </div>
            </${Tag}>
          </div>`;
          }).join('')}
        </div>
        <div class="tdots" id="case-carousel-dots"></div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="wrap center container-narrow" style="margin:0 auto;">
      <div class="reveal">
        <h2 class="reveal-words" style="font-size:clamp(26px,4vw,36px);">${splitHeadline('Want your practice featured *here* next?')}</h2>
        <p class="text-muted" style="margin-top:16px;font-size:16px;">Book a free strategy call and let\'s talk about your practice. Most calls end with a clear plan, even if that plan isn\'t us.</p>
        <div style="margin-top:26px;">${ctaButtons({ align: 'center' })}</div>
      </div>
    </div>
  </section>
  `;
}

function pageAbout() {
  return `
  ${pageHero({
    eyebrow: 'About',
    title: 'Built by someone who\'s shipped *both* sides.',
    sub: 'Growlane Consulting was started to close the gap between agencies that overpromise and freelancers who disappear &mdash; one senior team, one fixed price, one clear plan.',
  })}
  <section class="section" style="padding-top:0;">
    <div class="wrap">
      <div class="card reveal" style="max-width:760px;">
        <p style="font-size:17px;line-height:1.7;">Growlane Consulting is run by Udit Choudhary, who spent years watching the same pattern play out: clinics, medspas, and hospitals paying agency prices for freelancer reliability, or freelancer prices for agency chaos, from agencies that treated a patient intake form like any other contact form. Growlane exists to be the specialist option &mdash; one senior team, a fixed scope, and a website built specifically to book patients, not just to look finished on launch day.</p>
      </div>
    </div>
  </section>
  ${cardGridSection({ eyebrow: 'How We Work', title: 'A few things we *won\'t* compromise on.', items: CONTENT.aboutValues, cols: 4 })}
  ${statsSection()}
  ${finalCta({
    title: 'Let\'s talk about your *next* website.',
    sub: 'Book a free 20-minute strategy call &mdash; no pitch deck, no pressure.',
  })}
  `;
}

function pageContact() {
  return `
  ${pageHero({
    eyebrow: 'Contact',
    title: 'Tell us about your *practice*.',
    sub: 'The fastest way to get a real answer is a 20-minute call. If you\'d rather write first, email works too.',
    blobs: false,
  })}
  <section class="section" style="padding-top:0;">
    <div class="wrap grid-3">
      <a href="${CALENDLY}" target="_top" rel="noopener" class="card reveal">
        <div class="card-icon">${icon('calendar')}</div>
        <h3>Book a call</h3>
        <p class="body-sm">20 minutes, no pressure. We\'ll talk through your site and give you a clear next step.</p>
        <div style="margin-top:16px;font-size:13.5px;font-weight:700;display:flex;align-items:center;gap:6px;">Open Calendly ${icon('arrow', 14)}</div>
      </a>
      <a href="mailto:${EMAIL}" class="card reveal">
        <div class="card-icon">${icon('mail')}</div>
        <h3>Email us</h3>
        <p class="body-sm">Prefer writing things out first? Send the details and we\'ll reply within one business day.</p>
        <div style="margin-top:16px;font-size:13.5px;font-weight:700;">${EMAIL}</div>
      </a>
      <a href="${INSTAGRAM}" target="_top" rel="noopener" class="card reveal">
        <div class="card-icon">${icon('ig')}</div>
        <h3>Instagram</h3>
        <p class="body-sm">Recent projects, behind-the-scenes, and the occasional before/after.</p>
        <div style="margin-top:16px;font-size:13.5px;font-weight:700;">@growlane.consulting</div>
      </a>
    </div>
  </section>
  ${faqSection()}
  `;
}

function pageHealthcare() {
  return `
  ${pageHero({
    eyebrow: 'For Healthcare Practices',
    title: 'Websites built for *patients*, not just practices.',
    sub: 'Secure intake, one-click booking, and accessible design &mdash; built specifically for clinics, dental practices, and healthcare groups.',
  })}
  <section class="section" style="padding-top:0;padding-bottom:0;">
    <div class="wrap">
      <img src="images/dental-smile-hands.png" alt="" class="reveal" style="width:100%;max-height:460px;object-fit:cover;object-position:center 60%;border-radius:24px;">
    </div>
  </section>
  ${cardGridSection({ eyebrow: 'The Problem', title: 'Most practice websites *create* risk without anyone noticing.', items: CONTENT.healthcareProblems, cols: 3 })}
  ${cardGridSection({ eyebrow: 'The Fix', title: 'Built with compliance-minded practices in *mind*, from day one.', items: CONTENT.healthcareFixes, cols: 3 })}
  <section class="section">
    <div class="wrap">
      <div class="card reveal" style="max-width:640px;">
        <div class="avatar-circle" style="margin-bottom:16px;">AM</div>
        <p style="font-size:17px;line-height:1.6;">"${CONTENT.testimonials[4].quote}"</p>
        <div style="margin-top:16px;font-weight:700;">${CONTENT.testimonials[4].name}</div>
        <div class="text-muted" style="font-size:13.5px;">${CONTENT.testimonials[4].role}</div>
      </div>
    </div>
  </section>
  ${finalCta({
    title: 'Give patients a site that *matches* the care you provide.',
    sub: 'Book a free strategy call and we\'ll walk through what your practice site needs.',
  })}
  `;
}

function pageBlogIndex() {
  return `
  ${pageHero({
    eyebrow: 'Blog',
    title: 'Ideas on *building* websites that grow.',
    sub: 'Notes on strategy, healthcare compliance, and the process behind websites that actually convert.',
    blobs: false,
  })}
  <section class="section" style="padding-top:0;">
    <div class="wrap grid-3 reveal-stagger">
      ${CONTENT.blog.map(p => `
      <a href="#/blog/${p.slug}" class="card reveal-item" style="padding:0;overflow:hidden;">
        <div class="gradient-${p.gradient} blog-visual" style="height:170px;position:relative;">
          <span class="case-card__icon" style="width:52px;height:52px;">${icon(categoryIcon(p.category), 24)}</span>
          <span class="post-tag">${p.category}</span>
        </div>
        <div style="padding:26px;">
          <div class="text-muted" style="font-size:12.5px;">${fmtDate(p.date)} &middot; ${p.readTime}</div>
          <h3 style="font-size:17.5px;margin-top:8px;line-height:1.35;">${p.title}</h3>
          <p class="body-sm" style="margin-top:8px;">${p.excerpt}</p>
        </div>
      </a>`).join('')}
    </div>
  </section>
  ${finalCta({
    title: 'Ready to stop *reading* about it?',
    sub: 'Book a free strategy call and let\'s talk about your actual website.',
  })}
  `;
}

function pageBlogPost(slug) {
  const post = CONTENT.blog.find(p => p.slug === slug);
  if (!post) return page404();
  const related = CONTENT.blog.filter(p => p.slug !== slug).slice(0, 3);
  return `
  <section class="section" style="padding-bottom:0;">
    <div class="wrap container-narrow" style="margin:0 auto;">
      <a href="#/blog" class="text-muted reveal" style="font-size:14px;font-weight:600;display:inline-flex;align-items:center;gap:6px;">${icon('arrow',14).replace('M5 12h14M13 6l6 6-6 6', 'M19 12H5M11 6l-6 6 6 6')} Back to blog</a>
      <div class="reveal" style="margin-top:24px;">${eyebrowHTML(post.category)}</div>
      <h1 class="reveal" style="font-size:clamp(30px,5vw,48px);margin-top:20px;">${post.title}</h1>
      <div class="text-muted reveal" style="margin-top:16px;font-size:14.5px;">${fmtDate(post.date)} &middot; ${post.readTime}</div>
    </div>
  </section>
  <section class="section" style="padding-top:36px;">
    <div class="wrap container-narrow" style="margin:0 auto;">
      <div class="blog-hero-img gradient-${post.gradient} blog-visual reveal">
        <span class="case-card__icon">${icon(categoryIcon(post.category), 34)}</span>
      </div>
      <div class="blog-body reveal" style="margin-top:40px;">
        ${post.body.map(b => {
          if (b.type === 'h') return `<h2>${b.text}</h2>`;
          if (b.type === 'quote') return `<div class="pull-quote">${b.text}</div>`;
          return `<p>${b.text}</p>`;
        }).join('')}
      </div>
      <div class="card reveal" style="margin-top:40px;display:flex;align-items:center;gap:16px;">
        <div class="avatar-circle" style="width:52px;height:52px;font-size:16px;">UC</div>
        <div>
          <div style="font-weight:700;">Udit Choudhary</div>
          <div class="text-muted" style="font-size:14px;">Founder, ${CONTENT.brand}</div>
        </div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="wrap">
      <h2 class="reveal" style="font-size:24px;margin-bottom:24px;">More from the blog</h2>
      <div class="grid-3 reveal-stagger">
        ${related.map(p => blogSmallCard(p)).join('')}
      </div>
    </div>
  </section>
  ${finalCta({
    title: 'Ready to *build* yours?',
    sub: 'Book a free strategy call and let\'s talk about your actual website.',
  })}
  `;
}

function pageThankYou() {
  return `
  <section class="section section-black" style="min-height:70vh;display:flex;align-items:center;">
    <div class="wrap center container-narrow" style="margin:0 auto;">
      <span class="eyebrow on-black reveal">Booked</span>
      <h1 class="reveal-words" style="color:#fff;font-size:clamp(32px,5.5vw,54px);margin-top:22px;">${splitHeadline('You\'re booked. *Almost* there.')}</h1>
      <p class="reveal muted-on-black" style="margin-top:20px;font-size:17px;">Check your inbox for a confirmation and calendar invite. In the meantime, feel free to look around.</p>
      <div class="reveal" style="margin-top:32px;"><a href="#/" class="btn btn-on-black">Back to home</a></div>
    </div>
  </section>`;
}

function pageLegal(title, paragraphs) {
  return `
  ${pageHero({ eyebrow: 'Legal', title, sub: 'Last updated September 2026.', blobs: false })}
  <section class="section" style="padding-top:0;">
    <div class="wrap container-narrow blog-body" style="margin:0 auto;">
      ${paragraphs.map(p => `<p class="reveal">${p}</p>`).join('')}
    </div>
  </section>`;
}

function page404() {
  return `
  <section class="section center" style="min-height:60vh;display:flex;align-items:center;justify-content:center;flex-direction:column;">
    <h1 class="reveal-words" style="font-size:clamp(40px,8vw,90px);">${splitHeadline('*Lost*, but not for long.')}</h1>
    <p class="text-muted" style="margin-top:16px;font-size:17px;">That page doesn\'t exist.</p>
    <a href="#/" class="btn btn-primary" style="margin-top:26px;">Back to home</a>
  </section>`;
}

/* ---------------- Router ---------------- */

const ROUTES = {
  '/': pageHome,
  '/services': pageServices,
  '/portfolio': pagePortfolio,
  '/about': pageAbout,
  '/contact': pageContact,
  '/healthcare-websites': pageHealthcare,
  '/blog': pageBlogIndex,
  '/thank-you': pageThankYou,
  '/privacy': () => pageLegal('Privacy *Policy*', [
    'Growlane Consulting collects only the information needed to respond to inquiries and deliver project work &mdash; typically your name, email address, and any details you share when booking a call or sending an email.',
    'We do not sell or share your information with third parties for marketing purposes. Information submitted through booking or contact channels is used solely to communicate with you about your project.',
    'If you have questions about how your information is handled, contact us at ' + EMAIL + '.',
  ]),
  '/terms': () => pageLegal('Terms of *Service*', [
    'These terms govern the use of the Growlane Consulting website and outline the general basis on which project engagements are agreed. Specific scope, pricing, and timelines for any project are confirmed in a separate written agreement before work begins.',
    'All content on this site is the property of Growlane Consulting unless otherwise noted. Completed client projects are owned by the client as agreed in each project\'s contract.',
    'Questions about these terms can be sent to ' + EMAIL + '.',
  ]),
};

function parseHash() {
  let h = location.hash.replace(/^#/, '') || '/';
  if (!h.startsWith('/')) h = '/' + h;
  return h;
}

function render() {
  const app = document.getElementById('app-content');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function paint() {
    const path = parseHash();
    let html;
    if (path.startsWith('/blog/')) {
      html = pageBlogPost(path.replace('/blog/', ''));
    } else if (ROUTES[path]) {
      html = ROUTES[path]();
    } else {
      html = page404();
    }
    app.innerHTML = html;
    window.scrollTo(0, 0);
    updateNavState(path);
    trackConversion(path);
    initReveal();
    initFaq();
    initTestimonialCarousel();
    initCardTilt();
    initCounters();
    requestAnimationFrame(() => app.classList.remove('route-fade'));
  }

  if (reduced || app.innerHTML.trim() === '') {
    paint();
  } else {
    app.classList.add('route-fade');
    setTimeout(paint, 160);
  }
}

let lastTrackedPath = null;
function trackConversion(path) {
  if (path === '/thank-you' && lastTrackedPath !== '/thank-you' && typeof fbq === 'function') {
    fbq('track', 'Lead');
  }
  lastTrackedPath = path;
}

function updateNavState(path) {
  document.querySelectorAll('.menu-overlay-links a').forEach(a => {
    const href = a.getAttribute('data-route');
    a.classList.toggle('current', href === '#' + path || (href === '#/' && path === '/'));
    a.style.opacity = a.classList.contains('current') ? '1' : '';
  });
}

/* ---------------- Interactions ---------------- */

let revealObserver;
function initReveal() {
  document.body.classList.add('js-anim');
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('#app-content .reveal, #app-content .reveal-stagger, #app-content .reveal-words').forEach(el => {
    const rect = el.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (alreadyVisible) {
      el.classList.add('in-view');
    } else {
      revealObserver.observe(el);
    }
  });
}

function initFaq() {
  document.querySelectorAll('.faq-row').forEach(row => {
    const q = row.querySelector('.faq-q');
    const answer = row.querySelector('.faq-answer');
    q.addEventListener('click', () => {
      const isOpen = row.classList.contains('open');
      row.parentElement.querySelectorAll('.faq-row.open').forEach(r => {
        if (r !== row) {
          r.classList.remove('open');
          r.querySelector('.faq-answer').style.maxHeight = null;
          r.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
        }
      });
      if (isOpen) {
        row.classList.remove('open');
        answer.style.maxHeight = null;
        q.setAttribute('aria-expanded', 'false');
      } else {
        row.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        q.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function initCardTilt() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (reduced || !fine) return;
  document.querySelectorAll('#app-content .card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotateY = (x - 0.5) * 8;
      const rotateX = (0.5 - y) * 8;
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

function initCounters() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const els = document.querySelectorAll('#app-content .stat-num');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      obs.unobserve(entry.target);
      const el = entry.target;
      const raw = el.textContent.trim();
      const match = raw.match(/^(\d+(?:\.\d+)?)(.*)$/);
      if (!match) return;
      const target = parseFloat(match[1]);
      const decimals = (match[1].split('.')[1] || '').length;
      const suffix = match[2];
      const duration = 900;
      const start = performance.now();
      function tick(now) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (target * eased).toFixed(decimals) + suffix;
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = raw;
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.4 });
  els.forEach(el => obs.observe(el));
}

const carouselTimers = {};
function initCarousel(trackId, dotsId, { label = 'slide', interval = 5500 } = {}) {
  const track = document.getElementById(trackId);
  const dotsWrap = document.getElementById(dotsId);
  if (!track || !dotsWrap) return;
  const cards = track.children;
  if (!cards.length) return;
  dotsWrap.innerHTML = Array.from(cards).map((_, i) => `<button class="tdot${i === 0 ? ' active' : ''}" data-i="${i}" aria-label="Go to ${label} ${i + 1}"></button>`).join('');
  const dots = dotsWrap.querySelectorAll('.tdot');

  function setActive(i) {
    dots.forEach(d => d.classList.remove('active'));
    dots[i]?.classList.add('active');
  }
  function goTo(i) {
    track.scrollTo({ left: cards[i].offsetLeft - track.offsetLeft, behavior: 'smooth' });
  }
  dots.forEach(d => {
    d.addEventListener('click', () => goTo(+d.dataset.i));
  });
  track.addEventListener('scroll', () => {
    const i = Math.round(track.scrollLeft / (cards[0].offsetWidth + 20));
    setActive(Math.min(i, cards.length - 1));
  }, { passive: true });

  clearInterval(carouselTimers[trackId]);
  carouselTimers[trackId] = setInterval(() => {
    if (!document.body.contains(track)) { clearInterval(carouselTimers[trackId]); return; }
    const activeIndex = [...dots].findIndex(d => d.classList.contains('active'));
    const next = (activeIndex + 1) % cards.length;
    goTo(next);
  }, interval);
}

function initTestimonialCarousel() {
  initCarousel('tcarousel-track', 'tcarousel-dots', { label: 'testimonial' });
  initCarousel('case-carousel-track', 'case-carousel-dots', { label: 'case study', interval: 6000 });
}

function initNavChrome() {
  const nav = document.getElementById('site-nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 8);
  }, { passive: true });

  const menuToggle = document.getElementById('menu-toggle');
  const menuClose = document.getElementById('menu-close');
  const overlay = document.getElementById('menu-overlay');
  function openMenu() {
    overlay.classList.add('open');
    menuToggle.classList.add('open');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    overlay.classList.remove('open');
    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  menuToggle.addEventListener('click', () => {
    overlay.classList.contains('open') ? closeMenu() : openMenu();
  });
  menuClose.addEventListener('click', closeMenu);
  overlay.querySelectorAll('a[data-route]').forEach(a => a.addEventListener('click', closeMenu));
}

/* ---------------- Init ---------------- */

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('nav-slot').innerHTML = navHTML();
  document.getElementById('footer-slot').innerHTML = footerHTML();
  document.getElementById('floating-cta-slot').innerHTML = floatingCtaHTML();
  initFloatingCta();
  initNavChrome();
  window.addEventListener('hashchange', render);
  render();
});
