import throttle from 'lodash.throttle';

class VideoPlayer {
  iframe = document.querySelector('iframe');
  player = new Player(this.iframe);
  updateTime() {
    console.log(player);
    this.currentTime = this.player.getCurrentTime().then(function (seconds) {
      console.log('time updated! ' + seconds + "  !!! ");
      localStorage.setItem("videoplayer-current-time", seconds);
    }).catch(function (error) {
      // an error occurred
    });
    this.player.on('timeupdate', throttle(this.updateTime, 1000));
  };
  // const iplayer = new VideoPlayer();
  // iplayer.updateTime();
}