import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const grandPlayerInstance = new Player(document.querySelector('#vimeo-player'));
const LOCAL_STORAGE_SAVE_KEY = 'videoplayer-current-time';

grandPlayerInstance.on(
  'timeupdate',
  throttle(onTimeUpdateSaveCurrentTime, 1000)
);

grandPlayerInstance.setCurrentTime(
  localStorage.getItem(LOCAL_STORAGE_SAVE_KEY) || 0
);

function onTimeUpdateSaveCurrentTime(event) {
  localStorage.setItem(LOCAL_STORAGE_SAVE_KEY, event.seconds);
}
