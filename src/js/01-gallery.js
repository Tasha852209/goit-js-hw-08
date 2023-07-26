// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryUl = document.querySelector('.gallery');
createGallery();

galleryUl.style.listStyle = 'none';

function createGallery() {
  const galleryList = galleryItems.reduce((acc, image) => {
    return (
      acc +
      `<li class="gallery__item">
   <a class="gallery__link" href="${image.original}">
      <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
   </a>
</li>`
    );
  }, '');
  galleryUl.innerHTML = galleryList;
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

console.log(galleryItems);
