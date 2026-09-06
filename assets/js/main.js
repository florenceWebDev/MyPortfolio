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
   2. MIXITUP FILTER — Work / Case Studies
   ---------------------------------------------------------- */
var workContainer = document.querySelector('.work__container');
var mixerPortfolio;

if (workContainer) {
  mixerPortfolio = mixitup(workContainer, {
    selectors: {
      target: '.mix'
    },
    animation: {
      duration: 300
    },
    load: {
      filter: '.php'
    }
  });
}

var workFilters = document.querySelectorAll('.work__filter');

workFilters.forEach(function(filter) {
  filter.addEventListener('click', function() {
    var filterValue = this.getAttribute('data-filter');

    workFilters.forEach(function(f) {
      f.classList.remove('active-work');
    });
    this.classList.add('active-work');

    if (mixerPortfolio) {
      mixerPortfolio.filter(filterValue);
    }
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

sr.reveal('.work__card', { interval: 80 });

sr.reveal('.process__step', { interval: 120 });

sr.reveal('.pricing__card', { interval: 120 });

sr.reveal('.experience__item', { interval: 120 });

sr.reveal('.stack__group', { interval: 100 });

sr.reveal('.contact__info-col', { origin: 'left' });
sr.reveal('.contact__form-col', { origin: 'right' });

/* ----------------------------------------------------------
   6. IMAGE LIGHTBOX
   ---------------------------------------------------------- */
(function () {
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

  document.querySelectorAll('.work__gallery').forEach(function (gallery) {
    var slides = gallery.querySelectorAll('.work__gallery-slide');
    var previous = gallery.querySelector('.work__gallery-btn--prev');
    var next = gallery.querySelector('.work__gallery-btn--next');
    var counter = gallery.querySelector('.work__gallery-counter');
    var currentIndex = 0;

    function showSlide(index) {
      slides[currentIndex].classList.remove('is-active');
      currentIndex = (index + slides.length) % slides.length;
      slides[currentIndex].classList.add('is-active');
      counter.textContent = (currentIndex + 1) + ' / ' + slides.length;
    }

    previous.addEventListener('click', function (event) {
      event.stopPropagation();
      showSlide(currentIndex - 1);
    });

    next.addEventListener('click', function (event) {
      event.stopPropagation();
      showSlide(currentIndex + 1);
    });

    gallery.addEventListener('click', function (event) {
      if (event.target.closest('.work__gallery-btn')) return;
      openLightbox(slides, currentIndex);
    });
  });

  document.querySelectorAll('.work__card-img-wrapper').forEach(function (wrapper) {
    if (wrapper.classList.contains('work__gallery')) return;

    wrapper.addEventListener('click', function () {
      var img = wrapper.querySelector('img');
      if (img) openLightbox([img], 0);
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
