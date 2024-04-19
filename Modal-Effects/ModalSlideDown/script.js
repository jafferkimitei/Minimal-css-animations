const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalContainer = document.getElementById("modalContainer");

openModalBtn.addEventListener("click", () => {
  modalContainer.style.display = "block";
  setTimeout(() => {
    document.getElementById("modal").style.top = "0";
  }, 50);
});

closeModalBtn.addEventListener("click", () => {
  document.getElementById("modal").style.top = "-100%";
  setTimeout(() => {
    modalContainer.style.display = "none";
  }, 500);
});
