(function () {
  const branches = {
    juni: {
      id: 'juni',
      label: '주니아티스트 (풍덕천점)',
      short: '주니아티스트',
      roadAddress: '경기도 용인시 수지구 정평로 36 우성프라자 3층',
      phone: '031-898-2256',
      hours: [
        { day: '평일', time: '13:00 ~ 21:00' },
        { day: '토요일', time: '부분운영' },
        { day: '일요일', time: '휴무' },
      ],
      note: '평일·토요일(부분운영) 운영시간 내 상담 가능 (일요일 휴무)',
    },
    md: {
      id: 'md',
      label: 'M&D (신봉점)',
      short: 'M&D',
      roadAddress: '경기도 용인시 수지구 신봉1로 157 파크프라자 3층',
      phone: '010-2806-5631',
      hours: [
        { day: '평일', time: '13:00 ~ 21:00' },
        { day: '토요일', time: '부분운영' },
        { day: '일요일', time: '휴무' },
      ],
      note: '평일·토요일(부분운영) 운영시간 내 상담 가능 (일요일 휴무)',
    },
  };

  const contentEl = document.getElementById('contact-content');
  const visualTitle = document.getElementById('branch-visual-title');
  const breadcrumbBranch = document.getElementById('breadcrumb-branch');
  const pageName = document.getElementById('branch-page-name');
  const lnbLinks = document.querySelectorAll('.contact-lnb a[data-branch]');

  function phoneDigits(phone) {
    return phone.replace(/[^0-9]/g, '');
  }

  function phoneDisplay(phone) {
    const digits = phoneDigits(phone);
    if (digits.length === 10) {
      return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
    }
    if (digits.length === 11) {
      return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
    }
    return phone;
  }

  function renderBranch(branch) {
    const tel = phoneDigits(branch.phone);
    const displayPhone = phoneDisplay(branch.phone);
    const hoursRows = branch.hours.map(row =>
      `<tr><th>${row.day}</th><td>${row.time}</td></tr>`
    ).join('');

    contentEl.innerHTML = `
      <div class="contact-box">
        <div class="contact-phone">
          <a href="tel:${tel}" class="phone-num">${displayPhone}</a>
          <p class="contact-branch">${branch.label}</p>
          <p>${branch.note}</p>
        </div>
        <table class="hours-table">
          ${hoursRows}
        </table>
        <div class="contact-extra">
          <p><strong>위치</strong> ${branch.roadAddress}</p>
        </div>
        <a href="tel:${tel}" class="btn-contact">상담 문의하기</a>
      </div>
    `;
  }

  function switchBranch(branchId, updateHash) {
    const branch = branches[branchId];
    if (!branch) return;

    visualTitle.textContent = branch.short;
    breadcrumbBranch.textContent = branch.label;
    pageName.textContent = branch.label;
    document.title = `${branch.label} — 상담문의 — JNA 실용음악학원`;

    lnbLinks.forEach(link => {
      link.classList.toggle('is-active', link.dataset.branch === branchId);
    });

    renderBranch(branch);

    if (updateHash) {
      const newHash = branchId === 'juni' ? '' : `#${branchId}`;
      if (location.hash !== newHash) {
        history.replaceState(null, '', `contact.html${newHash}`);
      }
    }
  }

  lnbLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      switchBranch(link.dataset.branch, true);
    });
  });

  window.addEventListener('hashchange', () => {
    const hash = location.hash.replace('#', '');
    switchBranch(branches[hash] ? hash : 'juni', false);
  });

  const initialHash = location.hash.replace('#', '');
  switchBranch(branches[initialHash] ? initialHash : 'juni', false);
})();
