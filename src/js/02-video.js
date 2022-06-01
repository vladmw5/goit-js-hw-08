import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const grandPlayerInstance = new Player(document.querySelector('#vimeo-player'));

grandPlayerInstance.on(
  'timeupdate',
  throttle(onTimeUpdateSaveCurrentTime, 1000)
);

grandPlayerInstance.setCurrentTime(
  localStorage.getItem('videoplayer-current-time')
);

function onTimeUpdateSaveCurrentTime(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}
