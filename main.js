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
        (x.logo ? '<img loading="lazy" src="' + esc(x.logo) + '" alt="' + esc(x.name) + '">' : '<span>' + esc(x.name) + '</span>') + '</a>';
    }).join('') : [1, 2, 3, 4, 5, 6].map(function () { return '<div class="sponsor sponsor--ph"><span>Sponsor logo</span></div>'; }).join('');
  }

  // Gallery
  var g = document.querySelector('[data-gallery]');
  if (g) {
    var p = C.gallery || [];
    g.innerHTML = p.length ? p.map(function (x) {
      return '<figure class="gitem"><img loading="lazy" src="' + esc(x.src) + '" alt="' + esc(x.alt) + '">' +
        (x.caption ? '<figcaption>' + esc(x.caption) + '</figcaption>' : '') + '</figure>';
    }).join('') : [1, 2, 3, 4, 5, 6, 7, 8].map(function () { return '<div class="gitem ph"><span class="ph__label">Shoot photo</span></div>'; }).join('');
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
