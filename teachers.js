(function () {
  const teachers = [
    {
      id: 'v1',
      name: '손승연',
      field: '보컬',
      initial: '손',
      photo: 'images/teachers/son-seungyeon.png',
      photoPosition: 'center 32%',
      bioHtml: `
        <div class="instructor-profile">
          <p><strong>학력</strong> 백석예술대학교 음악학부 실용음악 보컬전공</p>
          <p><strong>경력</strong> 디알컴퍼니 보컬 강사 · 라이크 뮤직 보컬 강사</p>
          <p><strong>자격증</strong> 문화예술교육사자격증 2급</p>
          <p><strong>공연</strong> 남양주청소년 수련관 정기공연 · 서울 지역 합동 오디션정기 캐스팅공연 · 메인보컬학원 정기공연 다수 · 와인바 초청 공연 · 동탄 프리마켓 초청 공연</p>
        </div>
      `.trim(),
    },
    { id: 'v2', name: '보컬 강사 2', field: '보컬', initial: 'V', bio: '' },
    { id: 'v3', name: '보컬 강사 3', field: '보컬', initial: 'V', bio: '' },
    { id: 'g1', name: '기타 강사 1', field: '기타', initial: 'G', bio: '' },
    { id: 'g2', name: '기타 강사 2', field: '기타', initial: 'G', bio: '' },
    { id: 'd1', name: '드럼 강사 1', field: '드럼', initial: 'D', bio: '' },
    { id: 'd2', name: '드럼 강사 2', field: '드럼', initial: 'D', bio: '' },
    { id: 'd3', name: '드럼 강사 3', field: '드럼', initial: 'D', bio: '' },
    { id: 'j1', name: '재즈/실용피아노 강사 1', field: '재즈/실용피아노', initial: 'J', bio: '' },
    { id: 'j2', name: '재즈/실용피아노 강사 2', field: '재즈/실용피아노', initial: 'J', bio: '' },
    { id: 'c1', name: '작곡 강사', field: '작곡', initial: 'C', bio: '' },
  ];

  const thumbsEl = document.getElementById('instructor-thumbs');
  const detailPhoto = document.getElementById('detail-photo');
  const detailField = document.getElementById('detail-field');
  const detailName = document.getElementById('detail-name');
  const detailBio = document.getElementById('detail-bio');

  const PLACEHOLDER_PHOTO = 'images/teachers/placeholder-silhouette.svg?v=2';

  function hasPhoto(teacher) {
    return Boolean(teacher.photo);
  }

  function teacherPhotoStyle(teacher) {
    if (!hasPhoto(teacher)) {
      return `background-image:url('${PLACEHOLDER_PHOTO}');background-size:cover;background-position:center;background-repeat:no-repeat;background-color:#e8e8e8;`;
    }
    const pos = teacher.photoPosition || 'center';
    return `background-image:url('${teacher.photo}');background-size:cover;background-position:${pos};background-repeat:no-repeat;`;
  }

  function showDetail(teacher) {
    detailPhoto.textContent = '';
    detailPhoto.classList.toggle('is-empty', !hasPhoto(teacher));
    detailPhoto.style.cssText = teacherPhotoStyle(teacher);
    detailField.textContent = teacher.field;
    detailName.textContent = teacher.name;
    if (teacher.bioHtml) {
      detailBio.innerHTML = teacher.bioHtml;
    } else {
      detailBio.textContent = teacher.bio || '';
    }
  }

  function selectTeacher(id) {
    const teacher = teachers.find(t => t.id === id);
    if (!teacher) return;

    thumbsEl.querySelectorAll('.thumb-card').forEach(card => {
      card.classList.toggle('is-active', card.dataset.id === id);
    });

    showDetail(teacher);
  }

  thumbsEl.innerHTML = teachers.map((t, i) => {
    const emptyClass = hasPhoto(t) ? '' : ' thumb-img--empty';
    return `<button type="button" class="thumb-card ${i === 0 ? 'is-active' : ''}" data-id="${t.id}">
      <div class="thumb-img${emptyClass}" style="${teacherPhotoStyle(t)}" aria-hidden="true"></div>
      <span class="thumb-name">${t.name}</span>
      <span class="thumb-field">${t.field}</span>
    </button>`;
  }).join('');

  thumbsEl.querySelectorAll('.thumb-card').forEach(card => {
    card.addEventListener('click', () => {
      selectTeacher(card.dataset.id);
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    });
  });

  selectTeacher(teachers[0].id);
})();
