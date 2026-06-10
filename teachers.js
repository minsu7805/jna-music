(function () {
  const teachers = [
    // 보컬 3명
    { id: 'v1', name: '보컬 강사 1', field: '보컬', initial: 'V', bio: '발성·호흡·음정 교정, 장르별 창법 지도.\n취미 보컬부터 입시 보컬까지 맞춤 레슨.' },
    { id: 'v2', name: '보컬 강사 2', field: '보컬', initial: 'V', bio: '녹음·라이브 퍼포먼스 실전 훈련.\n오디션·입시 보컬 지도 경험.' },
    { id: 'v3', name: '보컬 강사 3', field: '보컬', initial: 'V', bio: '무대 표현력과 곡 해석 지도.\n성인 취미반·입시반 모두 담당.' },
    // 기타 2명
    { id: 'g1', name: '기타 강사 1', field: '기타', initial: 'G', bio: '어쿠스틱·일렉 기타 전문.\n코드 반주, 리드 기타, 세션 연주 지도.' },
    { id: 'g2', name: '기타 강사 2', field: '기타', initial: 'G', bio: '팝·재즈·CCM 반주 및 합주 지도.\n입시·취미 기타 레슨.' },
    // 드럼 3명
    { id: 'd1', name: '드럼 강사 1', field: '드럼', initial: 'D', bio: '드럼·퍼커션 전문.\n리듬 훈련, 합주, 입시 드럼 실기 지도.' },
    { id: 'd2', name: '드럼 강사 2', field: '드럼', initial: 'D', bio: '록·팝·재즈 드럼 스타일 지도.\n밴드 합주 및 세션 연주 훈련.' },
    { id: 'd3', name: '드럼 강사 3', field: '드럼', initial: 'D', bio: '기초부터 입시까지 단계별 지도.\n그루브·필인·무대 실전 훈련.' },
    // 재즈/실용피아노 2명
    { id: 'j1', name: '재즈/실용피아노 강사 1', field: '재즈/실용피아노', initial: 'J', bio: '재즈·실용 피아노·코드 보이싱 전문.\n재즈 스탠다드, 실용음악 화성 지도.' },
    { id: 'j2', name: '재즈/실용피아노 강사 2', field: '재즈/실용피아노', initial: 'J', bio: '재즈·실용 피아노 임프로비제이션 지도.\n합주·세션 연주 실전 훈련.' },
    // 작곡 1명
    { id: 'c1', name: '작곡 강사', field: '작곡', initial: 'C', bio: '대중음악 작편곡 전문.\nDAW 실습과 화성 이론을 병행한 체계적 수업.\n자작곡 포트폴리오 지도.' },
  ];

  const thumbsEl = document.getElementById('instructor-thumbs');
  const detailPhoto = document.getElementById('detail-photo');
  const detailField = document.getElementById('detail-field');
  const detailName = document.getElementById('detail-name');
  const detailBio = document.getElementById('detail-bio');

  function showDetail(teacher) {
    detailPhoto.textContent = teacher.initial;
    detailField.textContent = teacher.field;
    detailName.textContent = teacher.name;
    detailBio.textContent = teacher.bio;
  }

  function selectTeacher(id) {
    const teacher = teachers.find(t => t.id === id);
    if (!teacher) return;

    thumbsEl.querySelectorAll('.thumb-card').forEach(card => {
      card.classList.toggle('is-active', card.dataset.id === id);
    });

    showDetail(teacher);
  }

  thumbsEl.innerHTML = teachers.map((t, i) =>
    `<button type="button" class="thumb-card ${i === 0 ? 'is-active' : ''}" data-id="${t.id}">
      <div class="thumb-img">${t.initial}</div>
      <span class="thumb-name">${t.name}</span>
      <span class="thumb-field">${t.field}</span>
    </button>`
  ).join('');

  thumbsEl.querySelectorAll('.thumb-card').forEach(card => {
    card.addEventListener('click', () => {
      selectTeacher(card.dataset.id);
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    });
  });

  selectTeacher(teachers[0].id);
})();
