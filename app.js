const modal = document.querySelector(".modal");
const image = document.querySelector(".card");

modal.addEventListener("click", function() {
  modal.classList.add("d-none");
});

function openModal() {
  modal.classList.remove("d-none");
}

var slideIndex = 1;

const currentSlide = num => {
  let dots = document.getElementsByClassName("card-image");
  let url = dots[num].src;
  modal.querySelector("img").src = url;
};
