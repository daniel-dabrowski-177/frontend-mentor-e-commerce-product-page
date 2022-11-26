const arrowNext = document.querySelector(".arrow-next");
const arrowPrev = document.querySelector(".arrow-prev");
const containerImage = document.querySelector(".container-image");
let photos = [
  "/images/image-product-1.jpg",
  "/images/image-product-2.jpg",
  "/images/image-product-3.jpg",
  "/images/image-product-4.jpg",
];
let photoIndex = 1;
let gallery = document.querySelector(".gallery");

for (let i = 0; i <= 3; i++) {
  gallery.children[i].addEventListener("click", () => {
    for (let j = 0; j <= 3; j++) {
      gallery.children[j].classList.remove("active");
    }

    gallery.children[i].classList.add("active");

    let activePicture = gallery.children[i].attributes[0].value;

    containerImage.childNodes[1].attributes[0].value = activePicture;
  });
}

arrowNext.addEventListener("click", () => {
  containerImage.firstElementChild.attributes[0].textContent =
    photos[photoIndex];
  photoIndex++;
  if (photoIndex > 3) {
    photoIndex = 0;
  }
});

arrowPrev.addEventListener("click", () => {
  containerImage.firstElementChild.attributes[0].textContent =
    photos[photoIndex];
  photoIndex--;
  if (photoIndex < 0) {
    photoIndex = 3;
  }
});
