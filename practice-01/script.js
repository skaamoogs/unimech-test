const showButton = document.getElementById("show-button");
showButton.addEventListener("click", showModal);

function showModal() {
  const modalWindow = document.getElementById("modal");
  modalWindow.classList.add("modal_show");
}
