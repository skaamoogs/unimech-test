// DOM elements

const modalWindow = document.getElementById("modal");
const logoError = document.getElementById("logo-error");
const logoLabel = document.querySelector(".form-logo__label");
const logoInput = document.querySelector(".form-logo__input");
const showButton = document.getElementById("show-button");
const cancelButton = document.getElementById("cancel-button");
const form = document.getElementById("partner-form");

// Event listeners

showButton.addEventListener("click", () => showElement(modalWindow));
cancelButton.addEventListener("click", () => hideElement(modalWindow));
form.addEventListener("submit", handleSubmitForm);
logoInput.addEventListener("change", clearLogoError);

// Functions

function showElement(element) {
  element.style.display = "block";
}

function hideElement(element) {
  element.style.display = "none";
}

/**
 * Обработчик отправки формы
 * @param {SubmitEvent} e - событие submit формы
 */

function handleSubmitForm(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formJson = Object.fromEntries(formData.entries());
  if (!formJson.logo.name) {
    showLogoError();
    return;
  }
  console.log(formJson);
}

function showLogoError() {
  showElement(logoError);
  logoLabel.classList.add("block-error");
  modalWindow.scrollTop = 0;
}

function clearLogoError() {
  hideElement(logoError);
  logoLabel.classList.remove("block-error");
}
