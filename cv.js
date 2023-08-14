if (window.location.pathname === pathName) {
  $(document).ready(function () {
    const videoElement = $(videoId, document)[0];
    if (videoElement && videoElement.duration !== undefined) {
      const durata = videoElement.duration;
      console.log(prefix_log_1 + durata);

      const durataInMSecs = moment.duration(`00:00:${durata}`).asMilliseconds();
      const timeoutDuration = Math.min(durataInMSecs, durataMaxInMSecs);

      if (timeoutDuration > 0) {
        console.log(prefix_log_2 + timeoutDuration);
        setTimeout(function () {
          $(linkButtonID)[0].click();
        }, timeoutDuration);
      } else {
        console.log(prefix_log_3 + durataMaxInMSecs);
        setTimeout(function () {
          $(linkButtonID)[0].click();
        }, durataMaxInMSecs);
      }
    }
  });
}
