import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
// Variables
const galleryRef = document.querySelector('div.gallery');

//Calls
renderGallery(galleryItems);

//Grand magic
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

//Functions
function renderGallery(galleryItems) {
  galleryRef.insertAdjacentHTML(
    'beforeend',
    galleryItems
      .map(
        ({ preview, original, description }) => /*html*/ `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
      )
      .join('')
  );
}
