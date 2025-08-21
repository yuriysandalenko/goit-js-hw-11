import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = form.elements["search-text"].value.trim();

  if (!query) {
    iziToast.warning({
      title: "Warning",
      message: "Please enter a search term",
      position: "topRight",
    });
    return;
  }

  clearGallery();
    showLoader();
    e.target.reset();

  getImagesByQuery(query)
    .then((data) => {
      hideLoader();

      if (!data.hits.length) {
        iziToast.info({
          title: "No results",
          message: "Sorry, no images match your search. Please try again!",
          position: "topRight",
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch((error) => {
      hideLoader();
      iziToast.error({
        title: "Error",
        message: "Something went wrong. Try again later.",
        position: "topRight",
      });
    });
});