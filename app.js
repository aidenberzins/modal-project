const modal = document.querySelector(".modal");
const image = document.querySelector(".card");

modal.addEventListener("click", function() {
  modal.classList.add("d-none");
});

function openModal() {
  console.log("Open Modal");
  modal.classList.remove("d-none");
}
