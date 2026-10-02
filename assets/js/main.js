/* ============================================================
   main.js — Florence Gutierrez Portfolio
   ============================================================ */

/* ----------------------------------------------------------
   1. SCROLL HEADER
   ---------------------------------------------------------- */
var header = document.getElementById('header');

function scrollHeader() {
  if (window.scrollY >= 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', scrollHeader);

/* ----------------------------------------------------------
   2. WORK FILTER — Projects
   ---------------------------------------------------------- */
var workFilters = document.querySelectorAll('.work__filter');
var workCards = document.querySelectorAll('.work__card.mix');

function filterWork(filterValue) {
  workCards.forEach(function (card) {
    card.hidden = filterValue !== 'all' && !card.matches(filterValue);
  });
  workFilters.forEach(function (filter) {
    var active = filter.getAttribute('data-filter') === filterValue;
    filter.classList.toggle('active-work', active);
    filter.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
}

if (workCards.length) filterWork('.featured');

workFilters.forEach(function(filter) {
  filter.addEventListener('click', function() {
    filterWork(this.getAttribute('data-filter'));
  });
});

document.querySelectorAll('[data-filter-target]').forEach(function(link) {
  link.addEventListener('click', function() {
    var target = document.querySelector('.work__filter[data-filter="' + this.getAttribute('data-filter-target') + '"]');
    if (target) target.click();
  });
});

/* ----------------------------------------------------------
   3. SCROLL ACTIVE LINK
   ---------------------------------------------------------- */
var sections = document.querySelectorAll('section[id]');

function scrollActiveLink() {
  var scrollY = window.scrollY;

  sections.forEach(function(section) {
    var sectionHeight = section.offsetHeight;
    var sectionTop = section.offsetTop - 100;
    var sectionId = section.getAttribute('id');
    var navLink = document.querySelector(".nav__menu a[href*='" + sectionId + "']");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      if (navLink) navLink.classList.add('active-link');
    } else {
      if (navLink) navLink.classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActiveLink);

/* ----------------------------------------------------------
   4. MOBILE NAV TOGGLE
   ---------------------------------------------------------- */
var navToggle = document.getElementById('nav-toggle');
var navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('nav--open');
    var icon = navToggle.querySelector('i');
    if (icon) {
      icon.classList.toggle('bx-menu');
      icon.classList.toggle('bx-x');
    }
  });

  var navLinks = navMenu.querySelectorAll('.nav__link');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      navMenu.classList.remove('nav--open');
      var icon = navToggle.querySelector('i');
      if (icon) {
        icon.classList.add('bx-menu');
        icon.classList.remove('bx-x');
      }
    });
  });
}

var cvMenu = document.querySelector('.hero__cv');
if (cvMenu) {
  document.addEventListener('click', function (event) {
    if (!cvMenu.contains(event.target)) cvMenu.open = false;
  });
  cvMenu.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      cvMenu.open = false;
      cvMenu.querySelector('summary').focus();
    }
  });
  cvMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () { cvMenu.open = false; });
  });
}

/* ----------------------------------------------------------
   5. SCROLLREVEAL ANIMATIONS
   ---------------------------------------------------------- */
var sr = ScrollReveal({
  origin: 'bottom',
  distance: '40px',
  duration: 1600,
  delay: 200,
  reset: false
});

sr.reveal('.hero__content', { delay: 0 });
sr.reveal('.hero__image-col', { delay: 400, origin: 'right' });

sr.reveal('.about__image-col', { origin: 'left' });
sr.reveal('.about__text-col', { origin: 'right' });

sr.reveal('.services__card', { interval: 100 });

sr.reveal('.pricing__card', { interval: 120 });

sr.reveal('.experience__item', { interval: 120 });

sr.reveal('.stack__group', { interval: 100 });

sr.reveal('.contact__info-col', { origin: 'left' });
sr.reveal('.contact__form-col', { origin: 'right' });

/* ----------------------------------------------------------
   6. PROJECT CARD NAVIGATION + IMAGE LIGHTBOX
   ---------------------------------------------------------- */
(function () {
  var caseStudyRoutes = {
    'Automatically Process Client Attachments': 'projects/client-attachments.html',
    'Automatically Qualify and Follow Up With Leads': 'projects/lead-follow-up.html',
    'Turn One Piece of Content Into Multiple Posts': 'projects/content-repurposing.html',
    'AI Customer Support Assistant': 'projects/ai-support-assistant.html',
    'Domain Ichiba': 'projects/domain-ichiba.html',
    'Bentahero.com': 'projects/bentahero.html',
    'CraftShack Website': 'projects/craftshack.html',
    'Prime Dasma Med': 'projects/prime-dasma-med.html',
    'Salt Lake Med': 'projects/salt-lake-med.html',
    'DMC Sta. Ana': 'projects/dmc-sta-ana.html',
    'Golden Pencil': 'projects/golden-pencil.html',
    'BCR Therapie': 'projects/bcr-therapie.html',
    'The Home Of Kufis': 'projects/home-of-kufis.html',
    'Queueing System': 'projects/queueing-system.html',
    'Budget Request System': 'projects/budget-request-system.html',
    'Inventory Management': 'projects/inventory-management.html'
  };

  document.querySelectorAll('.work__card').forEach(function (card) {
    var title = card.querySelector('.work__card-title');
    var route = title && caseStudyRoutes[title.textContent.trim()];
    if (!route) return;

    card.classList.add('work__card--linked');
    card.setAttribute('role', 'link');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', 'Open ' + title.textContent.trim() + ' project');
    card.insertAdjacentHTML('beforeend', '<span class="work__card-discover" aria-hidden="true"><span>Open project</span><i class="bx bx-right-arrow-alt"></i></span>');

    function followCaseStudy(event) {
      if (event.target.closest('a, button')) return;
      window.location.href = route;
    }

    card.addEventListener('click', followCaseStudy);
    card.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        window.location.href = route;
      }
    });
  });

  var lightbox      = document.getElementById('lightbox');
  var lightboxImg   = document.getElementById('lightbox-img');
  var lightboxClose = document.getElementById('lightbox-close');
  var lightboxPrev  = document.getElementById('lightbox-prev');
  var lightboxNext  = document.getElementById('lightbox-next');
  var lightboxCaption = document.getElementById('lightbox-caption');
  var lightboxCounter = document.getElementById('lightbox-counter');
  var backdrop      = document.getElementById('lightbox-backdrop');
  var activeImages  = [];
  var activeIndex   = 0;

  if (!lightbox) return;

  function renderLightbox() {
    var image = activeImages[activeIndex];
    if (!image) return;

    lightboxImg.src = image.src;
    lightboxImg.alt = image.alt || '';
    lightboxCaption.textContent = image.alt || '';
    lightboxCounter.textContent = (activeIndex + 1) + ' / ' + activeImages.length;
    lightboxPrev.hidden = activeImages.length < 2;
    lightboxNext.hidden = activeImages.length < 2;
  }

  function openLightbox(images, index) {
    activeImages = Array.prototype.slice.call(images);
    activeIndex = index || 0;
    renderLightbox();
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    lightboxClose.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function moveLightbox(direction) {
    if (activeImages.length < 2) return;
    activeIndex = (activeIndex + direction + activeImages.length) % activeImages.length;
    renderLightbox();
  }

  var galleryImages = document.querySelectorAll('.case-study__gallery-item img');
  document.querySelectorAll('.case-study__gallery-item').forEach(function (item, index) {
    item.addEventListener('click', function () {
      openLightbox(galleryImages, index);
    });
  });

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', function () { moveLightbox(-1); });
  lightboxNext.addEventListener('click', function () { moveLightbox(1); });
  backdrop.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'ArrowLeft') moveLightbox(-1);
    if (e.key === 'ArrowRight') moveLightbox(1);
  });
}());
