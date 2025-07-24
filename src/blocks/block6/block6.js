import {
  block6Form,
  block6NameInput,
  block6PhoneInput,
  block6Submit
} from "../../variables.js";

block6Submit.addEventListener("click", function () {
  const isNameEmpty = block6NameInput.value.trim() === "";
  const isContactEmpty = block6PhoneInput.value.trim() === "";

  if (isNameEmpty || isContactEmpty) {
    block6Submit.classList.add("block6__form-button_error");
    block6Submit.textContent = "Заполните все обязательные поля";

    setTimeout(() => {
      block6Submit.textContent = "ОТПРАВИТЬ ЗАЯВКУ";
      block6Submit.classList.remove("block6__form-button_error");
    }, 2000); // 2 секунды — чтобы пользователь успел прочитать
    return;
  }

  emailjs.send("service_aega3rj", "template_02fg33w", {
    name: block6NameInput.value,
    contact: block6PhoneInput.value,
  }).then(() => {
    block6Submit.textContent = "Заявка отправлена!";
    block6Submit.classList.remove("block6__form-button_error");
  }).catch(() => {
    block6Submit.textContent = "Ошибка отправки";
    block6Submit.classList.add("block6__form-button_error");
  });

  block6NameInput.value = "";
  block6PhoneInput.value = "";
});

block6Form.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault(); // предотвращаем отправку по умолчанию

    const isNameEmpty = block6NameInput.value.trim() === "";
    const isContactEmpty = block6PhoneInput.value.trim() === "";

    if (isNameEmpty || isContactEmpty) {
      block6Submit.classList.add("block6__form-button_error");
      block6Submit.textContent = "Заполните все обязательные поля";

      setTimeout(() => {
        block6Submit.textContent = "ОТПРАВИТЬ ЗАЯВКУ";
        block6Submit.classList.remove("block6__form-button_error");
      }, 2000);
    } else {
      emailjs.send("service_aega3rj", "template_02fg33w", {
        name: block6NameInput.value,
        contact: block6PhoneInput.value,
      }).then(() => {
        block6Submit.textContent = "Заявка отправлена!";
        block6Submit.classList.remove("block6__form-button_error");
      }).catch(() => {
        block6Submit.textContent = "Ошибка отправки";
        block6Submit.classList.add("block6__form-button_error");
      });
    }

    block6NameInput.value = "";
    block6PhoneInput.value = "";
  }
});