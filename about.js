(function () {
  const track = document.getElementById('vision-track');
  const pagination = document.getElementById('vision-pagination');
  if (!track || !pagination) return;

  const slides = track.querySelectorAll('.vision-slide');
  const labels = [
    'CARVE OUT<br>FUTURE',
    'VARIETY IS THE<br>SPICE OF LIFE',
    'BE BRED TO THE<br>ARTIST',
    'PASSION<br>CONCENTRATION',
    'GROW<br>TOGETHER',
  ];

  let current = 0;

  labels.forEach((label, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.innerHTML = label;
    if (i === 0) btn.classList.add('is-active');
    btn.addEventListener('click', () => goTo(i));
    pagination.appendChild(btn);
  });

  const buttons = pagination.querySelectorAll('button');

  function goTo(index) {
    current = index;
    track.style.transform = `translateX(-${index * 100}%)`;
    buttons.forEach((btn, i) => btn.classList.toggle('is-active', i === index));
  }

  track.style.display = 'flex';
})();
