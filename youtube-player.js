(function (global) {
  let apiReady = false;
  const queue = [];
  let apiRequested = false;

  function requestApi() {
    if (apiRequested) return;
    apiRequested = true;
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    tag.async = true;
    document.head.appendChild(tag);
  }

  global.onYouTubeIframeAPIReady = function () {
    apiReady = true;
    queue.splice(0).forEach(function (fn) {
      fn();
    });
  };

  function runWhenReady(fn) {
    if (apiReady && global.YT && global.YT.Player) {
      fn();
      return;
    }
    queue.push(fn);
    requestApi();
  }

  global.JNA_YT = {
    mount: function (container, videoId) {
      runWhenReady(function () {
        container.innerHTML = '';
        container.classList.add('course-feature-video--active');

        const holder = document.createElement('div');
        holder.className = 'course-feature-video-player';
        container.appendChild(holder);

        new global.YT.Player(holder, {
          videoId: videoId,
          width: '100%',
          height: '100%',
          playerVars: {
            autoplay: 1,
            rel: 0,
            modestbranding: 1,
            playsinline: 1,
          },
        });
      });
    },
  };

  if (global.document && global.location.protocol !== 'file:') {
    requestApi();
  }
})(window);
