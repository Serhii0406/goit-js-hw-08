import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const STORAGE_KEY = videoplayer-current-time;

const el = document.querySelector('iframe');
const player = new Player(el);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
    localStorage.setItem(STORAGE_KEY, seconds);
}

setCurrentTime();
function setCurrentTime() {
    if (!localStorage.getItem(STORAGE_KEY)) {
        return;
    }
    player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
}




