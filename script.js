// JavaScript Code
function openModal(imageSrc) {
  const modal = document.getElementById("image-modal");
  const modalImage = document.getElementById("modal-image");
  modalImage.src = imageSrc;
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("image-modal");
  modal.style.display = "none";
}
