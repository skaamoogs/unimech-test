// Variables
const validator = {
  phone: (str) => {
    const pattern = /^\+?\d{10,15}$/g;
    return pattern.test(str);
  },
};

// DOM elements

const modalWindow = document.getElementById("modal");
const logoError = document.querySelector(".form-logo__error");
const logoLabel = document.querySelector(".form-logo__label");
const logoInput = document.querySelector(".form-logo__input");
const phoneInput = document.querySelector("input[type='tel']");
const phoneLabel = document.getElementById("phone-label");
const phoneError = document.getElementById("phone-error");
const showButton = document.getElementById("show-button");
const cancelButton = document.getElementById("cancel-button");
const form = document.getElementById("partner-form");

// Event listeners

showButton.addEventListener("click", () => showElement(modalWindow));
cancelButton.addEventListener("click", () => hideElement(modalWindow));
form.addEventListener("submit", handleSubmitForm);
logoInput.addEventListener("change", clearLogoError);
phoneInput.addEventListener("focus", clearPhoneError);

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
  if (!validator.phone(formJson.phone)) {
    showPhoneError();
    return;
  }
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

function showPhoneError() {
  console.log("phone error");
  showElement(phoneError);
  phoneLabel.classList.add("block-error");
  modalWindow.scrollTop = 0;
}

function clearPhoneError() {
  console.log("clear phone error");

  hideElement(phoneError);
  phoneLabel.classList.remove("block-error");
}
