const checkValidInput = () => {
  const inputs = document.querySelectorAll(".form__input");

  inputs.forEach((input) => {
    const warning = input.nextElementSibling;

    //add invalid classes
    input.addEventListener("invalid", () => {
      input.classList.add("form__input--invalid");
      warning.classList.remove("hidden");
    });
    //remove invalid classes
    input.addEventListener("input", () => {
      if (input.validity.valid) {
        input.classList.remove("form__input--invalid");
        warning.classList.add("hidden");
      }
    });
  });
};

window.onload = () => {
  checkValidInput();
};
