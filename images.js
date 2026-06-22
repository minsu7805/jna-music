(function () {
  function p(id, w) {
    return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w || 800}`;
  }

  /* 실용음악학원 · 보컬·악기·녹음·무대 관련 Pexels 무료 사진 */
  window.JNA_IMG = {
    p,
    hero: [
      p(7607288, 1920),  /* 보컬 레슨 */
      p(7688360, 1920),  /* 피아노·키보드 레슨 */
      p(3756944, 1920),  /* 밴드·무대 공연 */
    ],
    sub: {
      about: 'images/about-banner.png',
      teachers: p(7688336, 1600),   /* 강사·레슨 */
      vocal: p(7607290, 1600),      /* 보컬 수업 */
      programs: 'images/programs-banner.png?v=2',
      facility: 'images/facility-banner.png',
      direction: p(7679656, 1600),  /* 학원 건물 */
      contact: p(335968, 1600),     /* 마이크·상담 */
    },
    about: {
      intro: 'images/about-intro.png',
      goals: [
        'images/about-goal-foundation.png',
        'images/about-goal-professional.png?v=8',
        'images/about-goal-stage.png',
      ],
    },
    facility: {
      blocks: [
        'images/facility-juni-interior.png',
        'images/facility-juni-facilities.png',
        'images/facility-juni-benefit.png',
      ],
      gallery: [
        'images/facility-gallery-1.png',
        'images/facility-gallery-2.png',
        'images/facility-gallery-3.png',
        'images/facility-gallery-4.png',
        'images/facility-gallery-5.png',
        'images/facility-gallery-6.png',
      ],
    },
    programs: {
      guitar: p(2109969, 700),
      drums: p(3778619, 700),
      piano: p(7688360, 700),
      compose: 'images/programs-compose.png?v=2',
      kids: 'images/programs-kids-piano.png',
      practice: 'images/programs-practice.png',
    },
    vocal: {
      entrance: 'images/vocal-entrance.png',
      audition: 'images/vocal-audition.png?v=2',
      vocal: p(7607288, 700),
      teacher: 'images/vocal-teacher.png',
      concert: 'images/vocal-concert.png',
      eval: 'images/vocal-eval.png?v=3',
      breath: 'images/vocal-breath.png',
      record: 'images/vocal-record.png',
      mock: 'images/vocal-mock.png',
      stage: 'images/vocal-stage.png',
      genre: 'images/vocal-genre.png',
      live: 'images/vocal-live.png',
      lesson: p(6139045, 700),
      practice: p(8460851, 700),
    },
    teachers: {
      vocal: p(7607288, 600),
      guitar: p(1751733, 600),
      drums: p(2747449, 600),
      piano: p(7688360, 600),
      compose: p(9964648, 600),
    },
    bgStyle(url) {
      return `background-image:url('${url}');background-size:cover;background-position:center;background-repeat:no-repeat;`;
    },
    fieldKey(field) {
      if (field.includes('보컬')) return 'vocal';
      if (field.includes('기타')) return 'guitar';
      if (field.includes('드럼')) return 'drums';
      if (field.includes('피아노')) return 'piano';
      return 'compose';
    },
  };
})();
