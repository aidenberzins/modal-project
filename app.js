const modal = document.querySelector(".modal");
const image = document.querySelector(".card");

function openModal() {
  modal.classList.remove("d-none");
}
function closeModal() {
  modal.classList.add("d-none");
}

let slideIndex = 1;
let slides = document.getElementsByClassName("card-image");

const currentSlide = num => {
  let url = slides[num].src;
  modal.querySelector("img").src = url;
  slideIndex = num;
  return slideIndex;
};

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  currentSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  currentSlide(slideIndex);
}
