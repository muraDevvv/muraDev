import {
  openButton,
  popup,
  closeButton,
  form,
  nameInput,
  phoneInput,
  submitButton,
  block1Button,
  block2Button,
  block3Button,
  block4Button
} from "../../variables.js";

function openPopup() {
  popup.classList.remove("popup-form_hide");
  setTimeout(() => {
    popup.classList.add("popup-form_show");
  }, 10);
};

function closePopup() {
  popup.classList.remove("popup-form_show");
  setTimeout(() => {
    popup.classList.add("popup-form_hide");
  }, 400);
};

block1Button.addEventListener('click', openPopup);
block2Button.addEventListener('click', openPopup);
block3Button.addEventListener('click', openPopup);
block4Button.addEventListener('click', openPopup);
openButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

popup.addEventListener("click", (e) => {
  if (e.target === popup) closePopup();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && popup.classList.contains('popup-form_show')) {
    closePopup();
  }
});

submitButton.addEventListener("click", function () {
  const isNameEmpty = nameInput.value.trim() === "";
  const isContactEmpty = phoneInput.value.trim() === "";

  if (isNameEmpty || isContactEmpty) {
    submitButton.classList.add("popup-form__button_error");
    submitButton.textContent = "Заполните все обязательные поля";

    setTimeout(() => {
      submitButton.textContent = "ОТПРАВИТЬ ЗАЯВКУ";
      submitButton.classList.remove("popup-form__button_error");
    }, 2000); // 2 секунды — чтобы пользователь успел прочитать

    return;
  }

  emailjs.send("service_aega3rj", "template_2zomo1v", {
    name: nameInput.value,
    contact: phoneInput.value,
    message: popup.querySelector("#message").value,
  }).then(() => {
    submitButton.textContent = "Заявка отправлена!";
    submitButton.classList.remove("popup-form__button_error");
  }).catch(() => {
    submitButton.textContent = "Ошибка отправки";
    submitButton.classList.add("popup-form__button_error");
  });

  
  nameInput.value = "";
  phoneInput.value = "";
});

form.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault(); // предотвращаем отправку по умолчанию

    const isNameEmpty = nameInput.value.trim() === "";
    const isContactEmpty = phoneInput.value.trim() === "";

    if (isNameEmpty || isContactEmpty) {
      submitButton.classList.add("popup-form__button_error");
      submitButton.textContent = "Заполните все обязательные поля";

      setTimeout(() => {
        submitButton.textContent = "ОТПРАВИТЬ ЗАЯВКУ";
        submitButton.classList.remove("popup-form__button_error");
      }, 2000);

    } else {
      emailjs.send("service_aega3rj", "template_2zomo1v", {
        name: nameInput.value,
        contact: phoneInput.value,
        message: popup.querySelector("#message").value,
      }).then(() => {
        submitButton.textContent = "Заявка отправлена!";
        submitButton.classList.remove("popup-form__button_error");
      }).catch(() => {
        submitButton.textContent = "Ошибка отправки";
        submitButton.classList.add("popup-form__button_error");
      });
    }

    
    nameInput.value = "";
    phoneInput.value = "";
  }
});