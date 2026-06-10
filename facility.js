(function () {
  const branches = {
    juni: {
      id: 'juni',
      label: '주니아티스트 (풍덕천점)',
      short: '주니아티스트',
      address: '경기도 용인시 수지구 정평로 36 우성프라자 3층',
      phone: '031-898-2256',
      blocks: [
        {
          tit: 'INTERIOR',
          text: '풍덕천점의 쾌적한 레슨 환경.\n열정적인 연습 분위기 속에서\n음악에 집중할 수 있는 공간입니다.',
          imgLabel: '주니아티스트 인테리어',
        },
        {
          tit: 'FACILITIES',
          text: '보컬·악기 전용 레슨실 운영.\n전공별 특성에 맞춘 연습 환경을\n각 실마다 제공합니다.',
          imgLabel: '레슨실 · 연습실',
        },
        {
          tit: 'BENEFIT',
          text: '수강생을 위한 합주·연습 공간.\n레슨 외 연습과 합주를 위한\n시설을 지원합니다.',
          imgLabel: '합주실 · 연습 공간',
        },
      ],
      gallery: ['레슨실', '연습실', '로비', '합주실', '보컬실', '기타실'],
    },
    md: {
      id: 'md',
      label: 'M&D (신봉점)',
      short: 'M&D',
      address: '경기도 용인시 수지구 신봉1로 157 파크프라자 3층',
      phone: '010-0000-0000',
      blocks: [
        {
          tit: 'INTERIOR',
          text: '신봉점의 효율적인 레슨 공간.\n1:1 맞춤 수업에 최적화된\n쾌적한 환경을 제공합니다.',
          imgLabel: 'M&D 인테리어',
        },
        {
          tit: 'FACILITIES',
          text: '다양한 악기·보컬 레슨실 구비.\n입시·취미 수강생 모두를 위한\n전문 시설을 운영합니다.',
          imgLabel: '레슨실 · 시설',
        },
        {
          tit: 'BENEFIT',
          text: '수강생 전용 연습 환경.\n레슨 후에도 충분히 연습할 수 있는\n공간을 마련했습니다.',
          imgLabel: '연습 공간',
        },
      ],
      gallery: ['레슨실', '드럼실', '피아노실', '로비', '연습실', '합주실'],
    },
  };

  const contentEl = document.getElementById('facility-content');
  const visualTitle = document.getElementById('branch-visual-title');
  const breadcrumbBranch = document.getElementById('breadcrumb-branch');
  const pageName = document.getElementById('branch-page-name');
  const lnbLinks = document.querySelectorAll('.facility-lnb a[data-branch]');

  function renderBranch(branch) {
    const blocksHtml = branch.blocks.map((b, i) => `
      <article class="facility-block ${i % 2 === 1 ? 'facility-block--reverse' : ''}">
        <div class="facility-block-img" aria-hidden="true">
          <span>${b.imgLabel}</span>
        </div>
        <div class="facility-block-text">
          <p class="facility-block-tit">${b.tit}</p>
          <p class="facility-block-desc">${b.text.replace(/\n/g, '<br>')}</p>
        </div>
      </article>
    `).join('');

    const galleryHtml = branch.gallery.map(label =>
      `<div class="gallery-item"><span>${label}</span></div>`
    ).join('');

    contentEl.innerHTML = `
      <div class="facility-contact">
        <p><strong>주소</strong> ${branch.address}</p>
        <p><strong>전화</strong> <a href="tel:${branch.phone.replace(/[^0-9]/g, '')}">${branch.phone}</a></p>
      </div>
      <div class="facility-info">${blocksHtml}</div>
      <div class="facility-gallery">
        <h2 class="facility-gallery-tit">GALLERY</h2>
        <div class="facility-gallery-grid">${galleryHtml}</div>
        <p class="facility-gallery-note">※ 시설 사진은 준비 중입니다. 실제 사진으로 교체해 주세요.</p>
      </div>
    `;
  }

  function switchBranch(branchId) {
    const branch = branches[branchId];
    if (!branch) return;

    visualTitle.textContent = branch.short;
    breadcrumbBranch.textContent = branch.label;
    pageName.textContent = branch.label;
    document.title = `${branch.label} — 시설안내 — JNA 실용음악학원`;

    lnbLinks.forEach(link => {
      link.classList.toggle('is-active', link.dataset.branch === branchId);
    });

    renderBranch(branch);
  }

  lnbLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      switchBranch(link.dataset.branch);
    });
  });

  const hash = location.hash.replace('#', '');
  switchBranch(branches[hash] ? hash : 'juni');
})();
