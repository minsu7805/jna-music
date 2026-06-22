(function () {
  const course = {
    id: 'hobby',
    label: '실용악기과정',
    tag: 'HOBBY COURSE',
    subtitle: '기타·드럼·피아노·작곡, 부담 없이 시작하는 취미 레슨',
    lead: '입시·오디션 과정 없이 즐겁게 배우는 1:1 맞춤 취미 과정입니다. 성인·키즈 모두 환영합니다.',
    programNote: '개설과목 : 보컬, 기타, 드럼, 재즈/실용피아노, 작곡, 키즈/성인피아노',
    subjectTit: '개설과목',
    points: [
      { tit: '초보\n환영', desc: '처음 시작하는 분도 부담 없이 입문 가능' },
      { tit: '1:1\n맞춤', desc: '수준·목표·일정에 맞춘 개인 레슨' },
      { tit: '원하는\n곡 연주', desc: '좋아하는 곡 중심의 실용적인 수업' },
      { tit: '악기별\n전문 지도', desc: '기타·드럼·피아노·작곡 분야별 전문 레슨' },
      { tit: '키즈·성인\n분리', desc: '연령에 맞는 커리큘럼과 학습 속도' },
    ],
    subjects: [
      { name: '보컬' },
      { name: '기타' },
      { name: '드럼' },
      { name: '재즈/실용피아노' },
      { name: '작곡' },
      { name: '키즈/성인피아노', link: 'piano.html' },
    ],
    features: [
      { img: '보컬', tit: '보컬', desc: '발성·호흡 기초부터 원하는 곡 중심의 보컬 레슨', youtube: '0kMkKIbzzcI' },
      { img: '기타', tit: '기타', desc: '통기타·일렉기타 취미 연주, 코드·반주 기초', youtube: 'lZwL74n-0-I' },
      { img: '드럼', tit: '드럼', desc: '리듬·필인 기초부터 밴드·취미 연주까지', youtube: 'BQWa9NKfw4g' },
      { img: '피아노', tit: '재즈/실용피아노', desc: '코드·스케일·반주 중심의 실용 피아노 레슨', youtube: 'RpHVJcsdJ5A' },
      { img: '작곡', tit: '작곡', desc: '화성·멜로디 기초, DAW 입문·편곡 체험' },
      { img: '키즈', tit: '키즈/성인 피아노', desc: '연령별 맞춤 피아노, 클래식·반주 기초', link: 'piano.html' },
      { img: '연습', tit: '연습 환경', desc: '레슨 외 연습을 위한 쾌적한 공간' },
    ],
    cta: '취미반 상담문의',
  };

  const contentEl = document.getElementById('programs-content');

  function subjectItem(subject) {
    const name = subject.name;
    const icon = name.replace(/[/·]/g, '').slice(0, 2);
    if (subject.link) {
      return `
        <li>
          <a href="${subject.link}" class="course-subject-item course-subject-item--link">
            <div class="course-subject-icon">${icon}</div>
            <span>${name}</span>
          </a>
        </li>
      `;
    }
    return `
      <li>
        <div class="course-subject-item">
          <div class="course-subject-icon">${icon}</div>
          <span>${name}</span>
        </div>
      </li>
    `;
  }

  function youtubeMediaHtml(videoId, title) {
    return `
      <div
        class="course-feature-video course-feature-video--pending"
        data-youtube-id="${videoId}"
        data-youtube-title="${title}"
      >
        <button type="button" class="course-feature-video-play" aria-label="${title} 수업 영상 재생">
          <img
            class="course-feature-video-thumb"
            src="https://i.ytimg.com/vi/${videoId}/hqdefault.jpg"
            alt=""
            loading="lazy"
          >
          <span class="course-feature-video-play-icon" aria-hidden="true"></span>
        </button>
      </div>
    `;
  }

  function initYoutubePlayers() {
    contentEl.querySelectorAll('.course-feature-video--pending').forEach((el) => {
      const btn = el.querySelector('.course-feature-video-play');
      if (!btn) return;

      btn.addEventListener('click', () => {
        const videoId = el.dataset.youtubeId;
        if (!videoId) return;

        el.classList.remove('course-feature-video--pending');

        if (window.JNA_YT && window.JNA_YT.mount) {
          window.JNA_YT.mount(el, videoId);
          return;
        }

        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${encodeURIComponent(videoId)}?feature=oembed&autoplay=1&rel=0&playsinline=1`;
        iframe.title = `${el.dataset.youtubeTitle || '수업 영상'} 수업 영상`;
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
        iframe.allowFullscreen = true;
        el.replaceChildren(iframe);
      });
    });
  }

  function render() {
    const pointsHtml = course.points.map((p, i) => `
      <div class="course-point">
        <span class="course-point-num">${String(i + 1).padStart(2, '0')}</span>
        <p class="course-point-tit">${p.tit.replace(/\n/g, '<br>')}</p>
        <p class="course-point-desc">${p.desc}</p>
      </div>
    `).join('');

    const subjectsHtml = course.subjects.map(subjectItem).join('');

    const featureImgMap = {
      '보컬': JNA_IMG.vocal.vocal,
      '기타': JNA_IMG.programs.guitar,
      '드럼': JNA_IMG.programs.drums,
      '피아노': JNA_IMG.programs.piano,
      '작곡': JNA_IMG.programs.compose,
      '키즈': JNA_IMG.programs.kids,
      '연습': JNA_IMG.programs.practice,
    };

    const featuresHtml = course.features.map(f => {
      const imgUrl = featureImgMap[f.img] || JNA_IMG.programs.practice;
      const mediaHtml = f.youtube
        ? youtubeMediaHtml(f.youtube, f.tit)
        : `<div class="course-feature-img" style="${JNA_IMG.bgStyle(imgUrl)}"><span>${f.img}</span></div>`;
      const inner = `
        <article class="course-feature">
          ${mediaHtml}
          <div class="course-feature-text">
            <p class="course-feature-tit">${f.tit}</p>
            <p class="course-feature-desc">${f.desc}</p>
          </div>
        </article>
      `;
      return f.link ? `<a href="${f.link}" class="course-feature-link">${inner}</a>` : inner;
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
          <ul class="course-subject-list">${subjectsHtml}</ul>
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

    initYoutubePlayers();
  }

  render();
})();
