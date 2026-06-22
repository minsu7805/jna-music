(function () {
  const courses = {
    entrance: {
      id: 'entrance',
      label: '입시과정',
      tag: 'ENTRANCE EXAMINATION',
      subtitle: '보컬 전공 실용음악 입시, 목표 학교에 맞춘 전략적 준비',
      lead: '보컬 입시 전공 수강생을 위한 1:1 맞춤 레슨과 체계적인 관리로 실기·면접까지 함께 준비합니다.',
      programNote: '입시 프로그램 개설과목 : 보컬',
      subjectTit: '개설과목',
      points: [
        { tit: '입시 전문\n멘토링', desc: '전략 수립부터 보컬 실기 완성까지 원스톱 1:1 멘토링' },
        { tit: '맞춤형\n커리큘럼', desc: '수준과 지원 학교에 맞춘 개인별 학습 설계' },
        { tit: '학교별\n입시 전략', desc: '요강 분석 기반 보컬 실기·면접 대비' },
        { tit: '공연·무대\n경험', desc: '정기 발표와 실전 무대로 퍼포먼스 역량 강화' },
        { tit: '1:1\n담당 관리', desc: '수강생별 학습 현황 점검과 밀착 피드백' },
      ],
      subjects: [{ name: '보컬' }],
      features: [
        { img: '입시', tit: '입시 보컬', desc: '실용음악·보컬 전공 입시 대비, 학교별 요강 맞춤 실기 준비' },
        { img: '강사진', tit: '검증된 강사진', desc: '현장 경험이 풍부한 보컬 전문 강사진의 1:1 레슨' },
        { img: '연주회', tit: '정기 연주회', desc: '충분한 실전 무대 경험을 위한 정기 발표' },
        { img: '실기평가', tit: '정기 실기평가', desc: '주기적인 평가로 실력 점검과 전략 보완' },
        { img: '발성', tit: '발성·호흡 교정', desc: '음정·떨림 교정, 올바른 호흡법과 발성 기초' },
        { img: '레코딩', tit: '녹음·레코딩', desc: '입시 실기·데모 녹음 경험으로 실전 감각 향상' },
        { img: '모의고사', tit: '입시 모의 평가', desc: '실전과 유사한 환경에서의 모의 실기 대비' },
      ],
      cta: '입시반 상담문의',
    },
    audition: {
      id: 'audition',
      label: '오디션과정',
      tag: 'AUDITION COURSE',
      subtitle: '보컬 오디션, 기획사·내방 오디션 실전 대비',
      lead: '보컬 오디션 수강생을 위한 곡 선정부터 표현력, 무대 매너까지 실전 중심 트레이닝을 제공합니다.',
      programNote: '오디션 프로그램 개설과목 : 보컬',
      subjectTit: '개설과목',
      points: [
        { tit: '곡\n선정 전략', desc: '지원 목적에 맞는 보컬 곡 선정 컨설팅' },
        { tit: '무대\n표현력', desc: '라이브·녹음 실전 퍼포먼스 훈련' },
        { tit: '보컬\n트레이닝', desc: '발성·음정·장르별 창법 집중 훈련' },
        { tit: '영상·녹음\n준비', desc: '오디션 영상·데모 녹음 준비 지원' },
        { tit: '1:1\n피드백', desc: '매 레슨 실시간 피드백과 개선 포인트' },
      ],
      subjects: [{ name: '보컬' }],
      features: [
        { img: '오디션', tit: '오디션 보컬', desc: '기획사·오디션 대비 보컬 실전 훈련' },
        { img: '무대', tit: '무대 매너', desc: '무대 표현력과 자신감 있는 퍼포먼스' },
        { img: '장르', tit: '장르별 창법', desc: '발라드, 팝, R&B 등 장르에 맞는 보컬 스타일' },
        { img: '녹음', tit: '녹음 실습', desc: '데모·영상 오디션을 위한 녹음 경험' },
        { img: '라이브', tit: '녹음·라이브 실전', desc: '녹음실·라이브 퍼포먼스 훈련으로 표현력 강화' },
        { img: '레슨', tit: '1:1 집중 레슨', desc: '오디션 일정에 맞춘 집중 개인 수업' },
      ],
      cta: '오디션반 상담문의',
    },
    hobby: {
      id: 'hobby',
      label: '취미과정',
      tag: 'HOBBY VOCAL',
      subtitle: '부담 없이 시작하는 성인·취미 보컬 레슨',
      lead: '노래를 좋아하는 누구나 환영합니다. 기초 발성부터 좋아하는 곡 연습까지 1:1 맞춤으로 진행합니다.',
      programNote: '취미 프로그램 개설과목 : 보컬',
      subjectTit: '개설과목',
      points: [
        { tit: '초보\n환영', desc: '처음 배우는 분도 부담 없이 입문 가능' },
        { tit: '1:1\n맞춤', desc: '수준·목표·일정에 맞춘 개인 레슨' },
        { tit: '좋아하는\n곡 연습', desc: '커버곡·가요 중심의 즐거운 수업' },
        { tit: '발성·호흡\n기초', desc: '올바른 호흡법과 발성 기초부터 탄탄히' },
        { tit: '무대·발표\n기회', desc: '원하는 수강생을 위한 발표·연주 기회' },
      ],
      subjects: [{ name: '보컬' }],
      features: [
        { img: '보컬', tit: '취미 보컬', desc: '기초 발성·호흡부터 시작하는 성인·취미 수강 과정' },
        { img: '발성', tit: '발성·호흡 교정', desc: '음정·떨림 교정, 올바른 호흡법과 발성 기초' },
        { img: '장르', tit: '장르별 창법', desc: '발라드, 팝, R&B, 트로트 등 장르에 맞는 창법' },
        { img: '라이브', tit: '녹음·라이브 실전', desc: '녹음실 경험과 라이브 훈련으로 표현력 향상' },
        { img: '레슨', tit: '1:1 맞춤 레슨', desc: '수준·목표·일정에 맞춘 효율적인 개인 레슨' },
        { img: '연습', tit: '연습 환경', desc: '레슨 외 연습을 위한 쾌적한 공간' },
      ],
      cta: '취미보컬 상담문의',
    },
  };

  const contentEl = document.getElementById('vocal-content');
  const visualTitle = document.getElementById('vocal-visual-title');
  const breadcrumbCourse = document.getElementById('breadcrumb-vocal');
  const pageName = document.getElementById('vocal-page-name');
  const lnbLinks = document.querySelectorAll('.vocal-lnb a[data-course]');

  function subjectItem(subject) {
    const icon = subject.name.slice(0, 2);
    return `
      <li>
        <div class="course-subject-item">
          <div class="course-subject-icon">${icon}</div>
          <span>${subject.name}</span>
        </div>
      </li>
    `;
  }

  function renderCourse(course) {
    const pointsHtml = course.points.map((p, i) => `
      <div class="course-point">
        <span class="course-point-num">${String(i + 1).padStart(2, '0')}</span>
        <p class="course-point-tit">${p.tit.replace(/\n/g, '<br>')}</p>
        <p class="course-point-desc">${p.desc}</p>
      </div>
    `).join('');

    const featureImgMap = {
      '입시': JNA_IMG.vocal.entrance,
      '오디션': JNA_IMG.vocal.audition,
      '보컬': JNA_IMG.vocal.vocal,
      '강사진': JNA_IMG.vocal.teacher,
      '연주회': JNA_IMG.vocal.concert,
      '실기평가': JNA_IMG.vocal.eval,
      '발성': JNA_IMG.vocal.breath,
      '레코딩': JNA_IMG.vocal.record,
      '모의고사': JNA_IMG.vocal.mock,
      '무대': JNA_IMG.vocal.stage,
      '장르': JNA_IMG.vocal.genre,
      '녹음': JNA_IMG.vocal.record,
      '라이브': JNA_IMG.vocal.live,
      '레슨': JNA_IMG.vocal.lesson,
      '연습': JNA_IMG.vocal.practice,
    };

    const featuresHtml = course.features.map(f => {
      const imgUrl = featureImgMap[f.img] || JNA_IMG.vocal.vocal;
      return `
      <article class="course-feature">
        <div class="course-feature-img" style="${JNA_IMG.bgStyle(imgUrl)}"><span>${f.img}</span></div>
        <div class="course-feature-text">
          <p class="course-feature-tit">${f.tit}</p>
          <p class="course-feature-desc">${f.desc}</p>
        </div>
      </article>
    `;
    }).join('');

    contentEl.innerHTML = `
      <div class="course-hero">
        <p class="course-hero-tag">${course.tag}</p>
        <p class="course-hero-sub">${course.subtitle}</p>
        <p class="course-hero-lead">${course.lead}</p>
        <div class="course-points">${pointsHtml}</div>
        <p class="course-program-note">${course.programNote}</p>
      </div>
      <div class="course-subjects course-subjects--single">
        <div class="course-subject-group">
          <p class="course-subject-group-tit">${course.subjectTit}</p>
          <ul class="course-subject-list">${course.subjects.map(subjectItem).join('')}</ul>
        </div>
      </div>
      <div class="course-features-wrap">
        <p class="course-features-label">${course.tag}</p>
        <div class="course-features">${featuresHtml}</div>
      </div>
      <div class="course-cta">
        <a href="contact.html" class="btn-contact">${course.cta}</a>
      </div>
    `;
  }

  function switchCourse(courseId, updateHash) {
    const course = courses[courseId];
    if (!course) return;

    visualTitle.textContent = course.label;
    breadcrumbCourse.textContent = course.label;
    pageName.textContent = `보컬과정 · ${course.label}`;
    document.title = `보컬과정 ${course.label} — JNA 실용음악학원`;

    lnbLinks.forEach(link => {
      link.classList.toggle('is-active', link.dataset.course === courseId);
    });

    renderCourse(course);

    if (updateHash) {
      const newHash = courseId === 'entrance' ? '' : `#${courseId}`;
      if (location.hash !== newHash) {
        history.replaceState(null, '', `vocal.html${newHash}`);
      }
    }
  }

  lnbLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      switchCourse(link.dataset.course, true);
    });
  });

  window.addEventListener('hashchange', () => {
    const hash = location.hash.replace('#', '');
    switchCourse(courses[hash] ? hash : 'entrance', false);
  });

  const initialHash = location.hash.replace('#', '');
  switchCourse(courses[initialHash] ? initialHash : 'entrance', false);
})();
