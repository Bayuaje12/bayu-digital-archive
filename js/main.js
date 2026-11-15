// ==========================================================================
// BAYU: DIGITAL ARCHIVE — CORE SCRIPT
// Handles theme state, accessible navigation, catalog drawers, and contact form
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initThemeSwitcher();
  initNavigationDrawer();
  initLedgerFilter();
  initInspectionDrawers();
  initContactForm();
});

// Theme switcher with persistence in localStorage and accessible announcements
function initThemeSwitcher() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeStatusText = document.getElementById('theme-status-text');
  const body = document.body;

  const savedTheme = localStorage.getItem('bayu_archive_theme');
  if (savedTheme === 'light' || savedTheme === 'dark') {
    applyTheme(savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    applyTheme('light');
  } else {
    applyTheme('dark');
  }

  themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  });

  function applyTheme(theme) {
    body.setAttribute('data-theme', theme);
    localStorage.setItem('bayu_archive_theme', theme);

    if (theme === 'light') {
      themeToggle.setAttribute('aria-label', 'Beralih ke mode gelap');
      themeStatusText.textContent = 'GELAP';
    } else {
      themeToggle.setAttribute('aria-label', 'Beralih ke mode terang');
      themeStatusText.textContent = 'TERANG';
    }
  }
}

// Mobile and shelf navigation control with Escape key handling
function initNavigationDrawer() {
  const menuToggle = document.getElementById('menu-toggle');
  const menuClose = document.getElementById('menu-close');
  const navShelf = document.getElementById('primary-nav');
  const navItems = document.querySelectorAll('.nav-item');

  function openMenu() {
    navShelf.classList.add('is-open');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuClose.focus();
    document.addEventListener('keydown', handleKeydown);
  }

  function closeMenu() {
    navShelf.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.removeEventListener('keydown', handleKeydown);
    menuToggle.focus();
  }

  function handleKeydown(event) {
    if (event.key === 'Escape') {
      closeMenu();
    }
  }

  menuToggle.addEventListener('click', openMenu);
  menuClose.addEventListener('click', closeMenu);

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      if (navShelf.classList.contains('is-open')) {
        navShelf.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

// Catalog filter state management for table rows and mobile cards
function initLedgerFilter() {
  const filterButtons = document.querySelectorAll('.btn-filter');
  const tableRows = document.querySelectorAll('.ledger-row');
  const mobileCards = document.querySelectorAll('.mobile-project-card');
  const drawers = document.querySelectorAll('.drawer-row');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetCategory = button.getAttribute('data-filter');

      // Update button visual and accessibility states
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');

      // Close all inspection drawers during filter switch to avoid layout gaps
      drawers.forEach(drawer => {
        drawer.hidden = true;
      });
      document.querySelectorAll('.btn-inspect').forEach(inspectBtn => {
        inspectBtn.setAttribute('aria-expanded', 'false');
        inspectBtn.innerHTML = 'PERIKSA <span class="inspect-icon" aria-hidden="true">+</span>';
      });

      // Filter table rows
      tableRows.forEach(row => {
        const rowCategory = row.getAttribute('data-category');
        if (targetCategory === 'all' || rowCategory === targetCategory) {
          row.classList.remove('is-filtered-out');
        } else {
          row.classList.add('is-filtered-out');
        }
      });

      // Filter mobile cards
      mobileCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (targetCategory === 'all' || cardCategory === targetCategory) {
          card.classList.remove('is-filtered-out');
        } else {
          card.classList.add('is-filtered-out');
        }
      });
    });
  });
}

// Expandable drawer dossier inspection
function initInspectionDrawers() {
  const inspectButtons = document.querySelectorAll('.btn-inspect');

  inspectButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const drawer = document.getElementById(targetId);
      const isExpanded = button.getAttribute('aria-expanded') === 'true';

      // Toggle drawer state
      if (isExpanded) {
        drawer.hidden = true;
        button.setAttribute('aria-expanded', 'false');
        button.innerHTML = 'PERIKSA <span class="inspect-icon" aria-hidden="true">+</span>';
      } else {
        drawer.hidden = false;
        button.setAttribute('aria-expanded', 'true');
        button.innerHTML = 'TUTUP <span class="inspect-icon" aria-hidden="true">−</span>';
      }
    });
  });
}

// Form validation and state management
function initContactForm() {
  const form = document.getElementById('contact-note-form');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');
  
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');

  const feedbackArea = document.getElementById('form-feedback');
  const feedbackMessage = document.getElementById('feedback-message');
  const resetBtn = document.getElementById('btn-reset-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Clear previous errors
    clearErrors();

    // Validate Name
    if (!nameInput.value.trim()) {
      showError(nameInput, nameError, 'Nama atau institusi wajib diisi.');
      isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
      showError(emailInput, emailError, 'Alamat surel wajib diisi.');
      isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
      showError(emailInput, emailError, 'Format surel tidak valid.');
      isValid = false;
    }

    // Validate Message
    if (!messageInput.value.trim()) {
      showError(messageInput, messageError, 'Catatan pesan tidak boleh kosong.');
      isValid = false;
    } else if (messageInput.value.trim().length < 10) {
      showError(messageInput, messageError, 'Catatan minimal 10 karakter.');
      isValid = false;
    }

    if (isValid) {
      const senderName = nameInput.value.trim();
      feedbackMessage.textContent = `Terima kasih, ${senderName}. Catatan korespondensi Anda telah terekam dalam log arsip lokal. Silakan gunakan surel bayu@archive.id untuk komunikasi dokumen formal.`;
      feedbackArea.hidden = false;
      resetBtn.focus();
    }
  });

  resetBtn.addEventListener('click', () => {
    form.reset();
    clearErrors();
    feedbackArea.hidden = true;
    nameInput.focus();
  });

  function showError(input, errorElement, message) {
    input.classList.add('is-invalid');
    errorElement.textContent = message;
  }

  function clearErrors() {
    nameInput.classList.remove('is-invalid');
    emailInput.classList.remove('is-invalid');
    messageInput.classList.remove('is-invalid');
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
  }
}
