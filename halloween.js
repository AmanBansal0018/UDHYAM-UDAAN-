/* Halloween overlay for UDHYAM UDAAN: adds decorations on top of the page.
   It never edits, moves or removes any existing element. */
(function () {
  var root = document.documentElement;
  var KEY = 'hw-theme';

  function saved() {
    try { return localStorage.getItem(KEY) !== 'off'; } catch (e) { return true; }
  }
  function save(on) {
    try { localStorage.setItem(KEY, on ? 'on' : 'off'); } catch (e) {}
  }

  var web =
    '<svg viewBox="0 0 100 100" fill="none" stroke="#e8e0f0" stroke-width="1">' +
    '<path d="M0 0 L100 0 M0 0 L100 35 M0 0 L100 70 M0 0 L70 100 M0 0 L35 100 M0 0 L0 100"/>' +
    '<path d="M20 0 Q18 18 0 20 M40 0 Q36 36 0 40 M60 0 Q54 54 0 60 M80 0 Q72 72 0 80"/>' +
    '</svg>';

  function build() {
    var d = document.createElement('div');
    d.id = 'hw-decor';
    d.setAttribute('aria-hidden', 'true');

    var html = '';
    html += '<div class="hw-web tl">' + web + '</div>';
    html += '<div class="hw-web tr">' + web + '</div>';
    html += '<div class="hw-pumpkin l">🎃</div><div class="hw-pumpkin r">🎃</div>';

    for (var i = 0; i < 5; i++) {
      var top = 8 + Math.random() * 55;
      var dur = 14 + Math.random() * 14;
      var delay = -Math.random() * 20;
      html += '<div class="hw-bat" style="top:' + top + 'vh;animation-duration:' + dur +
              's;animation-delay:' + delay + 's">🦇</div>';
    }
    html += '<div class="hw-ghost" style="top:30vh;right:4vw">👻</div>';
    html += '<div class="hw-ghost" style="top:62vh;left:3vw;animation-delay:-3s">👻</div>';

    d.innerHTML = html;
    document.body.appendChild(d);

    var b = document.createElement('button');
    b.id = 'hw-toggle';
    b.type = 'button';
    b.title = 'Toggle Halloween theme';
    b.setAttribute('aria-label', 'Toggle Halloween theme');
    b.textContent = '🎃';
    b.addEventListener('click', function () {
      var on = !root.classList.contains('hw-on');
      root.classList.toggle('hw-on', on);
      save(on);
    });
    document.body.appendChild(b);
  }

  function init() {
    root.classList.toggle('hw-on', saved());
    build();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
