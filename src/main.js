
import { fetchImages } from './js/pixabay-api';
import { renderGallery, clearGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const loaderContainer = document.querySelector('.loader-container');
const loader = document.querySelector('.loader');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = form.elements.query.value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query',
    });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const images = await fetchImages(query);
    hideLoader();
    if (images.length === 0) {
      iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    renderGallery(images);
  } catch (error) {
    hideLoader();
    iziToast.error({
      title: 'Error',
      message: error.message,
    });
  }
});

function showLoader() {
  loader.style.display = 'block';
  loaderContainer.style.display = 'flex';
}

function hideLoader() {
  loader.style.display = 'none';
  loaderContainer.style.display = 'none';
}
