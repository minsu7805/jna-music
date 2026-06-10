(function () {
  const page = document.body.dataset.page || 'home';

  const navItems = [
    { id: 'home', label: '홈', href: 'index.html' },
    { id: 'about', label: '학원소개', href: 'about.html' },
    { id: 'teachers', label: '강사소개', href: 'teachers.html' },
    { id: 'vocal', label: '보컬레슨', href: 'vocal.html' },
    { id: 'programs', label: '실용악기과정', href: 'programs.html' },
    { id: 'facility', label: '시설안내', href: 'facility.html' },
    { id: 'direction', label: '오시는 길', href: 'direction.html' },
    { id: 'contact', label: '상담문의', href: 'contact.html' },
  ];

  const navHtml = navItems.map(item =>
    `<a href="${item.href}" class="${page === item.id ? 'is-active' : ''}">${item.label}</a>`
  ).join('');

  const quickMenu = `
    <aside class="quick-menu">
      <a href="contact.html" class="quick-item">문의하기</a>
      <a href="tel:0318982256" class="quick-item">전화하기</a>
      <a href="#" class="quick-item quick-item--yt" aria-label="Youtube">Youtube</a>
      <a href="#" class="quick-item quick-item--ig" aria-label="Instagram">Instagram</a>
    </aside>`;

  const header = `
    <header class="header">
      <div class="header-inner">
        <a href="index.html" class="logo">JNA <span>Music Academy</span></a>
        <nav class="nav">${navHtml}</nav>
        <button class="menu-toggle" aria-label="메뉴">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>`;

  const footer = `
    <footer class="footer">
      <div class="footer-inner">
        <p class="footer-logo">JNA Music Academy</p>
        <p>© JNA 실용음악학원. All rights reserved.</p>
      </div>
    </footer>`;

  const headerEl = document.getElementById('site-header');
  const quickEl = document.getElementById('site-quick');
  const footerEl = document.getElementById('site-footer');

  if (headerEl) headerEl.innerHTML = header;
  if (quickEl) quickEl.innerHTML = quickMenu;
  if (footerEl) footerEl.innerHTML = footer;
})();
