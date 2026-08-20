/* ===== THEME =====
   The chosen theme is applied by a small inline script in the <head> of each
   page, before anything paints, so the page never flashes the wrong colours.
   This function only wires up the button. */
function initTheme() {
  var btn = document.querySelector('.nav__theme');
  if (!btn) return;

  function label() {
    var isLight = document.documentElement.getAttribute('data-theme') === 'light';
    btn.setAttribute('aria-label', isLight ? 'Switch to night mode' : 'Switch to day mode');
    btn.setAttribute('aria-pressed', String(isLight));
  }

  label();

  btn.addEventListener('click', function () {
    var isLight = document.documentElement.getAttribute('data-theme') === 'light';
    var next = isLight ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch (e) {
      // Private browsing can block storage. The theme still switches for
      // this page view, it just will not be remembered.
    }

    label();
    syncSpotifyTheme();
  });

  syncSpotifyTheme();
}

/* The Spotify embed renders its own chrome and takes the theme in its URL,
   so it has to be reloaded to follow the site. */
function syncSpotifyTheme() {
  var frame = document.querySelector('.spotify-container iframe');
  if (!frame) return;

  var isLight = document.documentElement.getAttribute('data-theme') === 'light';
  var wanted = isLight ? 'theme=1' : 'theme=0';
  var src = frame.getAttribute('src') || '';

  if (src.indexOf(wanted) !== -1) return;
  frame.setAttribute('src', src.replace(/theme=[01]/, wanted));
}

/* ===== NAVIGATION ===== */
function initNav() {
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  const overlay = document.querySelector('.nav__overlay');
  const nav = document.querySelector('.nav');

  if (!toggle || !links) return;

  function openMenu() {
    toggle.classList.add('nav__toggle--open');
    links.classList.add('nav__links--open');
    if (overlay) overlay.classList.add('nav__overlay--visible');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    toggle.classList.remove('nav__toggle--open');
    links.classList.remove('nav__links--open');
    if (overlay) overlay.classList.remove('nav__overlay--visible');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', function () {
    const isOpen = links.classList.contains('nav__links--open');
    isOpen ? closeMenu() : openMenu();
  });

  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  links.querySelectorAll('.nav__link').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  // Scroll state
  var lastScroll = 0;
  window.addEventListener('scroll', function () {
    var scrollY = window.scrollY;
    if (scrollY > 50) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
    lastScroll = scrollY;
  }, { passive: true });
}

/* ===== ROTATING TAGLINE ===== */
function initTagline() {
  var el = document.querySelector('.hero__tagline');
  if (!el) return;

  var lines = [
    'Researcher. Writer. Builder.',
    'Making governance data accessible.',
    'Writing about African tech and policy.',
    'Currently in Rabat, Morocco.',
    'Looking for a PhD.'
  ];

  var current = 0;
  el.textContent = lines[0];

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  setInterval(function () {
    current = (current + 1) % lines.length;

    if (prefersReduced) {
      el.textContent = lines[current];
      return;
    }

    el.style.opacity = '0';
    el.style.transform = 'translateY(6px)';

    setTimeout(function () {
      el.textContent = lines[current];
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 350);
  }, 4000);

  el.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
}

/* ===== SCROLL REVEAL ===== */
function initScrollReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(function (el) {
    observer.observe(el);
  });
}

/* ===== RSS FEED ===== */
function fetchSubstackFeed(containerId, maxPosts) {
  var container = document.getElementById(containerId);
  if (!container) return;

  maxPosts = maxPosts || 3;
  var feedUrl = 'https://yeboah.substack.com/feed';
  var proxyUrl = 'https://api.allorigins.win/get?url=' + encodeURIComponent(feedUrl);

  container.innerHTML = '<div class="loading-skeleton" style="height:80px;margin-bottom:1rem;"></div>'.repeat(maxPosts);

  fetch(proxyUrl)
    .then(function (res) { return res.json(); })
    .then(function (data) {
      if (!data.contents) throw new Error('No content');

      var parser = new DOMParser();
      var xml = parser.parseFromString(data.contents, 'text/xml');
      var items = xml.querySelectorAll('item');
      var html = '';

      var count = Math.min(items.length, maxPosts);
      for (var i = 0; i < count; i++) {
        var item = items[i];
        var title = item.querySelector('title') ? item.querySelector('title').textContent : '';
        var link = item.querySelector('link') ? item.querySelector('link').textContent : '#';
        var pubDate = item.querySelector('pubDate') ? item.querySelector('pubDate').textContent : '';
        var desc = item.querySelector('description') ? item.querySelector('description').textContent : '';

        // Parse categories/tags
        var categories = item.querySelectorAll('category');
        var tagsHtml = '';
        if (categories.length > 0) {
          tagsHtml = '<div class="post-card__tags">';
          categories.forEach(function (cat) {
            tagsHtml += '<span class="post-card__tag">' + escapeHtml(cat.textContent) + '</span>';
          });
          tagsHtml += '</div>';
        }

        // Strip HTML from description and truncate
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = desc;
        var plainText = tempDiv.textContent || tempDiv.innerText || '';
        var excerpt = plainText.substring(0, 150).trim();
        if (plainText.length > 150) excerpt += '...';

        // Format date
        var dateStr = '';
        if (pubDate) {
          var d = new Date(pubDate);
          dateStr = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
        }

        html += '<article class="post-card reveal">';
        html += tagsHtml;
        html += '<h3 class="post-card__title"><a href="' + escapeHtml(link) + '" target="_blank" rel="noopener">' + escapeHtml(title) + '</a></h3>';
        html += '<p class="post-card__date">' + escapeHtml(dateStr) + '</p>';
        html += '<p class="post-card__excerpt">' + escapeHtml(excerpt) + '</p>';
        html += '</article>';
      }

      container.innerHTML = html;
      initScrollReveal();
    })
    .catch(function () {
      container.innerHTML = '<p class="text-muted">Could not load recent posts. <a href="https://yeboah.substack.com" target="_blank" rel="noopener">Read on Substack</a></p>';
    });
}

function fetchSubstackFeedFull(containerId, maxPosts) {
  var container = document.getElementById(containerId);
  if (!container) return;

  maxPosts = maxPosts || 20;
  var feedUrl = 'https://yeboah.substack.com/feed';
  var proxyUrl = 'https://api.allorigins.win/get?url=' + encodeURIComponent(feedUrl);

  container.innerHTML = '<div class="loading-skeleton" style="height:120px;margin-bottom:2rem;"></div>'.repeat(3);

  fetch(proxyUrl)
    .then(function (res) { return res.json(); })
    .then(function (data) {
      if (!data.contents) throw new Error('No content');

      var parser = new DOMParser();
      var xml = parser.parseFromString(data.contents, 'text/xml');
      var items = xml.querySelectorAll('item');
      var html = '';

      var count = Math.min(items.length, maxPosts);
      for (var i = 0; i < count; i++) {
        var item = items[i];
        var title = item.querySelector('title') ? item.querySelector('title').textContent : '';
        var link = item.querySelector('link') ? item.querySelector('link').textContent : '#';
        var pubDate = item.querySelector('pubDate') ? item.querySelector('pubDate').textContent : '';
        var desc = item.querySelector('description') ? item.querySelector('description').textContent : '';

        var categories = item.querySelectorAll('category');
        var tagsHtml = '';
        if (categories.length > 0) {
          tagsHtml = '<div class="article-card__tags">';
          categories.forEach(function (cat) {
            tagsHtml += '<span class="post-card__tag">' + escapeHtml(cat.textContent) + '</span>';
          });
          tagsHtml += '</div>';
        }

        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = desc;
        var plainText = tempDiv.textContent || tempDiv.innerText || '';
        var excerpt = plainText.substring(0, 250).trim();
        if (plainText.length > 250) excerpt += '...';

        var dateStr = '';
        if (pubDate) {
          var d = new Date(pubDate);
          dateStr = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
        }

        html += '<article class="article-card reveal">';
        html += tagsHtml;
        html += '<h2 class="article-card__title"><a href="' + escapeHtml(link) + '" target="_blank" rel="noopener">' + escapeHtml(title) + '</a></h2>';
        html += '<p class="article-card__meta">' + escapeHtml(dateStr) + '</p>';
        html += '<p class="article-card__excerpt">' + escapeHtml(excerpt) + '</p>';
        html += '<a href="' + escapeHtml(link) + '" target="_blank" rel="noopener" class="article-card__read-more">Read on Substack <span aria-hidden="true">&rarr;</span></a>';
        html += '</article>';
      }

      container.innerHTML = html;
      initScrollReveal();
    })
    .catch(function () {
      container.innerHTML = '<p class="text-muted">Could not load posts. <a href="https://yeboah.substack.com" target="_blank" rel="noopener">Visit Yeboah\'s Notes on Substack</a></p>';
    });
}

/* ===== EXPANDABLE SECTIONS ===== */
function initExpandables() {
  document.querySelectorAll('.expandable__trigger').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var parent = btn.closest('.expandable');
      var isOpen = parent.classList.contains('expandable--open');
      parent.classList.toggle('expandable--open');
      btn.textContent = isOpen ? btn.dataset.closed : btn.dataset.open;
      btn.setAttribute('aria-expanded', !isOpen);
    });
  });
}

/* ===== PAGE TRANSITIONS ===== */
function initPageTransitions() {
  if (!document.startViewTransition) return;

  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href]');
    if (!link) return;

    var href = link.getAttribute('href');
    if (!href) return;
    if (href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:') || link.target === '_blank') return;

    e.preventDefault();
    document.startViewTransition(function () {
      window.location.href = href;
    });
  });
}

/* ===== ACTIVE NAV LINK ===== */
function setActiveNav() {
  // Reduce a path to a bare slug so /about, /about.html, and /about/ all
  // compare equal. The site links extensionless (vercel.json sets cleanUrls),
  // but old .html URLs still arrive from bookmarks and external links.
  function slug(path) {
    return String(path)
      .split('?')[0]
      .split('#')[0]
      .replace(/^\/+|\/+$/g, '')
      .replace(/\.html$/, '');
  }

  var current = slug(window.location.pathname);
  if (!current) return; // homepage has no nav entry to highlight

  document.querySelectorAll('.nav__link').forEach(function (link) {
    if (slug(link.getAttribute('href')) === current) {
      link.classList.add('nav__link--active');
    }
  });
}

/* ===== UTILITY ===== */
function escapeHtml(str) {
  var div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', function () {
  initTheme();
  initNav();
  initTagline();
  initScrollReveal();
  initExpandables();
  initPageTransitions();
  setActiveNav();
});
