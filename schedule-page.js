(function () {
  var S = window.NET_SCHEDULE || { month: '', airings: [] };
  var DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function mins(t) { var m = /(\d+):(\d+)\s*(AM|PM)/i.exec(t); if (!m) return 0; var h = +m[1] % 12; if (/pm/i.test(m[3])) h += 12; return h * 60 + +m[2]; }
  function parts(d) { var p = d.split('-'); return { y: +p[0], m: +p[1], d: +p[2] }; }
  var list = S.airings.map(function (a) {
    var p = parts(a.date), dt = new Date(Date.UTC(p.y, p.m - 1, p.d));
    return { a: a, p: p, day: DAYS[dt.getUTCDay()], key: a.date + ' ' + String(mins(a.time)).padStart(4, '0') };
  }).sort(function (x, y) { return x.key < y.key ? -1 : x.key > y.key ? 1 : (x.a.network === 'NESN' ? -1 : 1); });

  // "now" in Eastern time as YYYY-MM-DD HHMM-minutes key
  var now = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(new Date());
  var g = {}; now.forEach(function (x) { g[x.type] = x.value; });
  var nowKey = g.year + '-' + g.month + '-' + g.day + ' ' + String(+g.hour * 60 + +g.minute).padStart(4, '0');

  document.querySelector('[data-sched-month]').textContent = S.month;
  ['NESN', 'NESN+'].forEach(function (n) {
    var c = list.filter(function (x) { return x.a.network === n; }).length;
    var el = document.querySelector('[data-count="' + n + '"]'); if (el) el.textContent = c + (c === 1 ? ' airing' : ' airings');
  });

  var groups = [];
  list.forEach(function (x) { var last = groups[groups.length - 1]; if (!last || last.date !== x.a.date) groups.push(last = { date: x.a.date, items: [] }); last.items.push(x); });
  var next = null, html = '';
  // Build properly ordered rows (Network first, then day/date group cell)
  groups.forEach(function (gr, gi) {
    gr.items.forEach(function (x, i) {
      var past = x.key < nowKey; if (!past && !next) next = x;
      var net = x.a.network === 'NESN+' ? 'plus' : 'nesn';
      var cls = 'sched-row' + (i === 0 ? ' is-first' : '') + (gi % 2 ? ' is-alt' : '') + (past ? ' is-past' : '') + (x === next ? ' is-next' : '');
      html += '<tr class="' + cls + '">' +
        '<td class="sched-net"><span class="net-badge net-badge--' + net + '">' + esc(x.a.network) + '</span></td>' +
        '<td class="sched-dayname">' + (i === 0 ? x.day : '<span class="sr">' + x.day + '</span>') + '</td>' +
        '<td class="sched-date">' + (i === 0 ? MONTHS[x.p.m - 1] + ' ' + x.p.d : '<span class="sr">' + MONTHS[x.p.m - 1] + ' ' + x.p.d + '</span>') + '</td>' +
        '<td class="sched-time">' + esc(x.a.time) + '</td>' +
        '<td class="sched-prog"><span class="sched-prog__title">' + esc(x.a.title) + '</span><span class="sched-prog__show">New England Traveler' + (x.a.ep ? ' · Episode ' + x.a.ep : '') + '</span>' + (x === next ? '<span class="sched-tag">Up next</span>' : '') + '</td>' +
        '</tr>';
    });
  });
  document.querySelector('[data-sched-rows]').innerHTML = html;
  if (next) {
    var n = document.querySelector('[data-sched-next]');
    n.innerHTML = '<span class="sched-next__label">Next on TV</span><span class="sched-next__info">' + next.day + ', ' + MONTHS[next.p.m - 1] + ' ' + next.p.d + ' · ' + esc(next.a.time) + ' · ' + esc(next.a.network) + '</span><span class="sched-next__title">' + esc(next.a.title) + '</span>';
    n.hidden = false;
  }

  var t = document.querySelector('.nav__toggle'), m = document.getElementById('menu');
  t.addEventListener('click', function () { var open = m.classList.toggle('is-open'); t.setAttribute('aria-expanded', open); t.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); });
  var yr = document.getElementById('yr'); if (yr) yr.textContent = new Date().getFullYear();
})();
