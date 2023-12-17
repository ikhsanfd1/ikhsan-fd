// Feather Icons
feather.replace();

document.addEventListener('DOMContentLoaded', () => {
  const backToTopButton = document.getElementById('back-to-top');
  const menu = document.querySelector('.menu');
  const menuLinks = document.querySelectorAll('.navlinks a');

  function setActiveLink() {
    const scrollPosition = window.scrollY;

    menuLinks.forEach((link) => {
      const sectionId = link.getAttribute('href').slice(1);
      const section = document.getElementById(sectionId);

      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  }

  if (menu) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        menu.classList.add('scrolled');
      } else {
        menu.classList.remove('scrolled');
      }
    });
  }
  if (backToTopButton) {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
      ) {
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    });

    backToTopButton.addEventListener('click', () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }

  setActiveLink();
  window.addEventListener('scroll', setActiveLink);
});

// Hamburger Menu
const toggleMenu = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

toggleMenu.addEventListener('click', function () {
  nav.classList.toggle('slide');
});

// Modal
const itemDetailModalSatu = document.querySelector('#item-detail-modal-satu');
const itemDetailModalDua = document.querySelector('#item-detail-modal-dua');
const itemDetailModalTiga = document.querySelector('#item-detail-modal-tiga');
const itemDetailModalEmpat = document.querySelector('#item-detail-modal-empat');
const itemDetailModalLima = document.querySelector('#item-detail-modal-lima');
const itemDetailModalEnam = document.querySelector('#item-detail-modal-enam');
const itemDetailModalTujuh = document.querySelector('#item-detail-modal-tujuh');
const itemDetailModalDelapan = document.querySelector(
  '#item-detail-modal-delapan'
);
const itemDetailSatu = document.querySelector('.item-detail-satu');
const itemDetailDua = document.querySelector('.item-detail-dua');
const itemDetailTiga = document.querySelector('.item-detail-tiga');
const itemDetailEmpat = document.querySelector('.item-detail-empat');
const itemDetailLima = document.querySelector('.item-detail-lima');
const itemDetailEnam = document.querySelector('.item-detail-enam');
const itemDetailTujuh = document.querySelector('.item-detail-tujuh');
const itemDetailDelapan = document.querySelector('.item-detail-delapan');

itemDetailSatu.onclick = (e) => {
  itemDetailModalSatu.style.display = 'flex';
  e.preventDefault();
};

document.querySelector('#item-detail-modal-satu .close-icon').onclick = (e) => {
  itemDetailModalSatu.style.display = 'none';
  e.preventDefault();
};

itemDetailDua.onclick = (e) => {
  itemDetailModalDua.style.display = 'flex';
  e.preventDefault();
};

document.querySelector('#item-detail-modal-dua .close-icon').onclick = (e) => {
  itemDetailModalDua.style.display = 'none';
  e.preventDefault();
};

itemDetailTiga.onclick = (e) => {
  itemDetailModalTiga.style.display = 'flex';
  e.preventDefault();
};

document.querySelector('#item-detail-modal-tiga .close-icon').onclick = (e) => {
  itemDetailModalTiga.style.display = 'none';
  e.preventDefault();
};

itemDetailEmpat.onclick = (e) => {
  itemDetailModalEmpat.style.display = 'flex';
  e.preventDefault();
};

document.querySelector('#item-detail-modal-empat .close-icon').onclick = (
  e
) => {
  itemDetailModalEmpat.style.display = 'none';
  e.preventDefault();
};

itemDetailLima.onclick = (e) => {
  itemDetailModalLima.style.display = 'flex';
  e.preventDefault();
};

document.querySelector('#item-detail-modal-lima .close-icon').onclick = (e) => {
  itemDetailModalLima.style.display = 'none';
  e.preventDefault();
};

itemDetailEnam.onclick = (e) => {
  itemDetailModalEnam.style.display = 'flex';
  e.preventDefault();
};

document.querySelector('#item-detail-modal-enam .close-icon').onclick = (e) => {
  itemDetailModalEnam.style.display = 'none';
  e.preventDefault();
};

itemDetailTujuh.onclick = (e) => {
  itemDetailModalTujuh.style.display = 'flex';
  e.preventDefault();
};

document.querySelector('#item-detail-modal-tujuh .close-icon').onclick = (
  e
) => {
  itemDetailModalTujuh.style.display = 'none';
  e.preventDefault();
};

itemDetailDelapan.onclick = (e) => {
  itemDetailModalDelapan.style.display = 'flex';
  e.preventDefault();
};

document.querySelector('#item-detail-modal-delapan .close-icon').onclick = (
  e
) => {
  itemDetailModalDelapan.style.display = 'none';
  e.preventDefault();
};

// Klik diluar elemen modal
window.onclick = (e) => {
  if (e.target === itemDetailModalSatu) {
    itemDetailModalSatu.style.display = 'none';
  } else if (e.target === itemDetailModalDua) {
    itemDetailModalDua.style.display = 'none';
  } else if (e.target === itemDetailModalTiga) {
    itemDetailModalTiga.style.display = 'none';
  } else if (e.target === itemDetailModalEmpat) {
    itemDetailModalEmpat.style.display = 'none';
  } else if (e.target === itemDetailModalLima) {
    itemDetailModalLima.style.display = 'none';
  } else if (e.target === itemDetailModalEnam) {
    itemDetailModalEnam.style.display = 'none';
  } else if (e.target === itemDetailModalTujuh) {
    itemDetailModalTujuh.style.display = 'none';
  } else if (e.target === itemDetailModalDelapan) {
    itemDetailModalDelapan.style.display = 'none';
  }
};

function toggleDarkTheme() {
  const body = document.body;
  const themeToggleIcon = document.getElementById('theme-toggle-icon');
  const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';

  if (currentTheme === 'light') {
    body.classList.add('dark-theme');
    themeToggleIcon.setAttribute('data-feather', 'sun');
    localStorage.setItem('theme', 'dark');
    body.style.backgroundColor = 'var(--bg-primary-color)';
  } else {
    body.classList.remove('dark-theme');
    themeToggleIcon.setAttribute('data-feather', 'moon');
    localStorage.setItem('theme', 'light');
    body.style.backgroundColor = 'var(--bg-secondary-color)';
  }
  feather.replace();
}

window.addEventListener('load', () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    toggleDarkTheme();
  }
});
