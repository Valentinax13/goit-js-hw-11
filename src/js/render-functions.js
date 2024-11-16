
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


// Ініціалізація SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom'
});

// Функція для відображення галереї
export function renderGallery(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images.map(image => `
    <div class="gallery-item">
      <a href="${image.largeImageURL}" data-caption="${image.tags}">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" class="gallery-image" />
      </a>
      <div class="image-info">
        <p><strong>Likes:</strong> ${image.likes}</p>
        <p><strong>Views:</strong> ${image.views}</p>
        <p><strong>Comments:</strong> ${image.comments}</p>
        <p><strong>Downloads:</strong> ${image.downloads}</p>
      </div>
    </div>
  `).join('');
  gallery.innerHTML = markup;

  // Оновлення SimpleLightbox після додавання нових елементів
  lightbox.refresh();
}

// Функція для очищення галереї
export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}
