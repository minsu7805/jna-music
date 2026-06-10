(function () {
  const branches = {
    juni: {
      id: 'juni',
      label: '주니아티스트 (풍덕천점)',
      short: '주니아티스트',
      roadAddress: '경기도 용인시 수지구 정평로 36 우성프라자 3층',
      lotAddress: '경기도 용인시 수지구 풍덕천동 1049-2 (우성프라자)',
      phone: '031-898-2256',
      map: {
        lat: 37.3194915,
        lng: 127.0878578,
        label: '주니아티스트',
        urlX: 519469,
        urlY: 1061185,
      },
      subway: [
        '수인분당선 풍덕천역 하차 : 3번 출구 방향 도보 약 7분',
      ],
      bus: [
        '풍덕천역·정평로 일대 버스 정류장 이용',
      ],
    },
    md: {
      id: 'md',
      label: 'M&D (신봉점)',
      short: 'M&D',
      roadAddress: '경기도 용인시 수지구 신봉1로 157 파크프라자 3층',
      lotAddress: '경기도 용인시 수지구 신봉동 973 (파크프라자)',
      phone: '010-0000-0000',
      map: {
        lat: 37.327075,
        lng: 127.069087,
        label: 'M&D',
        urlX: 515307,
        urlY: 1063286,
      },
      subway: [
        '수인분당선 신봉역 하차 : 도보 약 10분',
      ],
      bus: [
        '신봉1로·파크프라자 일대 버스 정류장 이용',
      ],
    },
  };

  const contentEl = document.getElementById('direction-content');
  const visualTitle = document.getElementById('branch-visual-title');
  const breadcrumbBranch = document.getElementById('breadcrumb-branch');
  const pageName = document.getElementById('branch-page-name');
  const lnbLinks = document.querySelectorAll('.direction-lnb a[data-branch]');

  function listItems(items) {
    return items.map(item => `<li>${item}</li>`).join('');
  }

  const KAKAO_MARKER_IMG = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png';

  function kakaoMapLink(map) {
    const name = encodeURIComponent(map.label);
    return `https://map.kakao.com/link/map/${name},${map.lat},${map.lng}`;
  }

  function kakaoStaticMapUrl(map) {
    return `https://map2.daum.net/map/mapservice?FORMAT=PNG&SCALE=2.5&MX=${map.urlX}&MY=${map.urlY}&IW=800&IH=400&LANG=0&COORDSTM=WCONGNAMUL&logo=kakao_logo`;
  }

  function renderMap(branch) {
    if (!branch.map) {
      return `
        <div class="direction-map-area">
          <div class="direction-map-placeholder" role="img" aria-label="지도 준비 중">
            <span>MAP</span>
            <p>카카오맵 연동은 주소 확정 후 적용됩니다.<br>현재 위치: ${branch.short}</p>
          </div>
        </div>
      `;
    }

    const map = branch.map;
    const mapLink = kakaoMapLink(map);

    return `
      <div class="direction-map-area direction-map-area--kakao">
        <a href="${mapLink}" class="direction-map-static" target="_blank" rel="noopener noreferrer">
          <div class="direction-map-visual">
            <img
              class="direction-map-img"
              src="${kakaoStaticMapUrl(map)}"
              alt="카카오맵 - ${branch.label}"
              width="800"
              height="400"
              loading="lazy"
            >
            <img
              class="direction-map-marker"
              src="${KAKAO_MARKER_IMG}"
              alt=""
              width="36"
              height="40"
              aria-hidden="true"
            >
          </div>
        </a>
        <div class="direction-map-bar">
          <span class="direction-map-bar-logo">카카오맵</span>
          <a href="${mapLink}" class="direction-map-link" target="_blank" rel="noopener noreferrer">지도 크게 보기</a>
        </div>
      </div>
    `;
  }

  function renderBranch(branch) {
    const phoneDigits = branch.phone.replace(/[^0-9]/g, '');

    contentEl.innerHTML = `
      <div class="direction-map">
        ${renderMap(branch)}
        <aside class="direction-info">
          <p class="direction-info-brand">JNA Music Academy</p>
          <div class="direction-info-body">
            <h2 class="direction-info-tit">주소안내</h2>
            <ul class="direction-info-list">
              <li>
                <span class="subtit">도로명 주소</span>
                <span class="txt">${branch.roadAddress}</span>
              </li>
              <li>
                <span class="subtit">지번 주소</span>
                <span class="txt">${branch.lotAddress}</span>
              </li>
              <li>
                <span class="subtit">연락처</span>
                <a href="tel:${phoneDigits}" class="txt">${branch.phone}</a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
      <div class="direction-way">
        <table>
          <tbody>
            <tr>
              <th>지하철로 오시는길</th>
              <td><ul>${listItems(branch.subway)}</ul></td>
            </tr>
            <tr>
              <th>버스로 오시는길</th>
              <td><ul>${listItems(branch.bus)}</ul></td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }

  function switchBranch(branchId, updateHash) {
    const branch = branches[branchId];
    if (!branch) return;

    visualTitle.textContent = branch.short;
    breadcrumbBranch.textContent = branch.label;
    pageName.textContent = branch.label;
    document.title = `${branch.label} — 오시는 길 — JNA 실용음악학원`;

    lnbLinks.forEach(link => {
      link.classList.toggle('is-active', link.dataset.branch === branchId);
    });

    renderBranch(branch);

    if (updateHash) {
      const newHash = branchId === 'juni' ? '' : `#${branchId}`;
      if (location.hash !== newHash) {
        history.replaceState(null, '', `direction.html${newHash}`);
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
