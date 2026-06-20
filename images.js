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
      about: p(8460851, 1600),      /* 음악학원 레슨실 */
      teachers: p(7688336, 1600),   /* 강사·레슨 */
      vocal: p(7607290, 1600),      /* 보컬 수업 */
      programs: p(2109969, 1600),   /* 기타 레슨 */
      facility: p(7986578, 1600),   /* 녹음실 */
      direction: p(7679656, 1600),  /* 학원 건물 */
      contact: p(335968, 1600),     /* 마이크·상담 */
    },
    about: {
      intro: p(6139045, 900),       /* 1:1 음악 레슨 */
      goals: [
        p(7688369, 700),            /* 음악 기초·연습 */
        p(7861497, 700),            /* 녹음·실전 */
        p(6956442, 700),            /* 보컬·무대 */
      ],
    },
    facility: {
      blocks: [
        p(7986578, 900),            /* 녹음 스튜디오 */
        p(8460851, 900),            /* 레슨실 */
        p(7861500, 900),            /* 합주·연습 공간 */
      ],
      gallery: [
        p(7607288, 600),             /* 보컬실 */
        p(3778619, 600),             /* 드럼실 */
        p(6977352, 600),             /* 피아노실 */
        p(2109969, 600),             /* 기타실 */
        p(7861497, 600),             /* 녹음부스 */
        p(1540406, 600),             /* 합주실 */
      ],
    },
    programs: {
      guitar: p(2109969, 700),
      drums: p(3778619, 700),
      piano: p(7688360, 700),
      compose: p(9964648, 700),
      kids: p(1648216, 700),
      practice: p(7861500, 700),
    },
    vocal: {
      vocal: p(7607288, 700),
      teacher: p(7688336, 700),
      concert: p(3756944, 700),
      eval: p(7861497, 700),
      breath: p(6956442, 700),
      record: p(7986578, 700),
      mock: p(7861500, 700),
      stage: p(1105666, 700),
      genre: p(7607290, 700),
      live: p(1540406, 700),
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
