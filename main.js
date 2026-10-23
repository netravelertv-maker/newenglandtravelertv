(function () {
  var C = window.NET_CONTENT || {};
  var esc = function (s) { return String(s || '').replace(/[&<>"']/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]; }); };

  function ytId(url) {
    var m = String(url || '').match(/(?:youtu\.be\/|v=|shorts\/|embed\/)([\w-]{11})/);
    return m ? m[1] : (/^[\w-]{11}$/.test(url) ? url : null);
  }

  // Videos
  document.querySelectorAll('[data-videos]').forEach(function (el) {
    var key = el.getAttribute('data-videos');
    var list = C[key] || [];
    var label = key === 'episodes' ? 'Episode' : 'Commercial';
    if (!list.length) {
      el.innerHTML = [1, 2, 3].map(function (n) {
        return '<div class="vcard vcard--ph"><div class="vcard__thumb ph"><span class="play" aria-hidden="true"></span></div>' +
          '<div class="vcard__meta"><h3>' + label + ' ' + n + '</h3><p>Link coming soon</p></div></div>';
      }).join('');
      return;
    }
    el.innerHTML = list.map(function (v) {
      var id = ytId(v.youtube);
      var href = id ? 'https://www.youtube.com/watch?v=' + id : esc(v.youtube);
      var thumb = id ? 'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg' : '';
      return '<a class="vcard" href="' + href + '" target="_blank" rel="noopener">' +
        '<div class="vcard__thumb">' + (thumb ? '<img loading="lazy" src="' + thumb + '" alt="">' : '') + '<span class="play" aria-hidden="true"></span></div>' +
        '<div class="vcard__meta"><h3>' + esc(v.title) + '</h3>' + (v.place ? '<p>' + esc(v.place) + '</p>' : '') + '</div></a>';
    }).join('');
  });

  // Sponsors
  var sp = document.querySelector('[data-sponsors]');
  if (sp) {
    var s = C.sponsors || [];
    sp.innerHTML = s.length ? s.map(function (x) {
      return '<a class="sponsor" href="' + esc(x.url) + '" target="_blank" rel="noopener" title="' + esc(x.name) + '">' +
        (x.logos ? '<span class="sponsor__pair">' + x.logos.map(function (l) { return '<img loading="lazy" src="' + esc(l) + '" alt="">'; }).join('') + '</span><span class="sr-only">' + esc(x.name) + '</span>'
          : x.logo ? '<img loading="lazy" src="' + esc(x.logo) + '" alt="' + esc(x.name) + '">' : '<span>' + esc(x.name) + '</span>') + '</a>';
    }).join('') : [1, 2, 3, 4, 5, 6].map(function () { return '<div class="sponsor sponsor--ph"><span>Sponsor logo</span></div>'; }).join('');
  }

  // Photo tile helper
  function tile(x) {
    var cap = x.caption ? esc(x.caption) : '';
    var cr = x.credit ? '<span class="credit">Photo: ' + esc(x.credit) + '</span>' : '';
    return '<figure class="gitem"><button type="button" class="gitem__btn" data-full="' + esc(x.src) + '" data-cap="' + cap + (x.credit ? ' (Photo: ' + esc(x.credit) + ')' : '') + '" aria-label="View larger: ' + esc(x.alt) + '">' +
      '<img loading="lazy" src="' + esc(x.src) + '" alt="' + esc(x.alt) + '"></button>' +
      ((cap || cr) ? '<figcaption>' + cap + cr + '</figcaption>' : '') + '</figure>';
  }

  // Gallery
  var g = document.querySelector('[data-gallery]');
  if (g) {
    var p = C.gallery || [];
    g.innerHTML = p.length ? p.map(tile).join('') :
      [1, 2, 3, 4, 5, 6].map(function () { return '<div class="gitem ph ph--tile"><span class="ph__label">Shoot photo</span></div>'; }).join('');
  }

  // Beyond New England
  var bz = document.querySelector('[data-beyond]');
  if (bz) {
    bz.innerHTML = (C.beyond || []).map(function (d) {
      var head = '<div class="dest__head"><h3>' + esc(d.place) + '</h3>' + (d.note ? '<span>' + esc(d.note) + '</span>' : '') + '</div>';
      if (!d.photos || !d.photos.length) {
        return '<div class="dest dest--soon">' + head + '<p class="dest__soon">Photos coming soon</p></div>';
      }
      return '<div class="dest">' + head + '<div class="gallery gallery--beyond">' +
        d.photos.map(function (x) { return tile({ src: x.src, alt: x.alt, caption: x.caption || '', credit: x.credit }); }).join('') + '</div></div>';
    }).join('');
    // group "coming soon" destinations side by side
    var soon = bz.querySelectorAll('.dest--soon');
    if (soon.length) { var row = document.createElement('div'); row.className = 'dest-row'; soon[0].parentNode.insertBefore(row, soon[0]); soon.forEach(function (n) { row.appendChild(n); }); }
  }

  // Lightbox
  var lb = document.querySelector('.lightbox');
  if (lb) {
    var lbImg = lb.querySelector('img'), lbCap = lb.querySelector('figcaption'), lastBtn = null;
    var close = function () { lb.hidden = true; document.body.style.overflow = ''; if (lastBtn) lastBtn.focus(); };
    document.addEventListener('click', function (e) {
      var b = e.target.closest('.gitem__btn');
      if (b) {
        lastBtn = b; lbImg.src = b.dataset.full; lbImg.alt = b.querySelector('img').alt; lbCap.textContent = b.dataset.cap || '';
        lb.hidden = false; document.body.style.overflow = 'hidden'; lb.querySelector('.lightbox__close').focus();
      } else if (!lb.hidden && (e.target === lb || e.target.closest('.lightbox__close'))) { close(); }
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !lb.hidden) close(); });
  }

  // Mobile menu
  var t = document.querySelector('.nav__toggle'), m = document.getElementById('menu');
  t.addEventListener('click', function () {
    var open = m.classList.toggle('is-open');
    t.setAttribute('aria-expanded', open);
    t.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  m.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { m.classList.remove('is-open'); t.setAttribute('aria-expanded', false); }); });

  // Nav background on scroll
  var nav = document.querySelector('.nav');
  var onScroll = function () { nav.classList.toggle('is-solid', window.scrollY > 40); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  document.getElementById('yr').textContent = new Date().getFullYear();
})();
