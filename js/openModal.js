(() => {
  const popups = [
    {
      button: "js-header-cart-button",
      modal: "header-cart",
    },
    {
      button: "js-header-localization-btn",
      modal: "header__localization-popup",
    },
    {
      button: "btn3",
      modal: "modal3",
    },
  ];

  const normalizedString = (str) => {
    return `.${str}`;
  };

  const closeModal = () => {
    for (let popup of popups) {
      const ref = document.querySelector(normalizedString(popup.modal));
      ref.classList.remove("is-active");
    }
  };

  const closeModalByEsc = (e) => {
    if (e.code === "Escape") {
      closeModal();
      currentButton = null;
    }
  };

  let currentButton = null;

  const openModal = (e) => {
    e.preventDefault();
    closeModal();
    if (currentButton === e.target) {
      currentButton = null;
      return;
    }
    currentButton = e.target;
    for (let popup of popups) {
      if (currentButton.classList.contains(popup.button)) {
        document
          .querySelector(normalizedString(popup.modal))
          .classList.add("is-active");
      }
    }
  };

  for (let popup of popups) {
    let ref = document.querySelector(normalizedString(popup.button));
    ref.addEventListener("click", openModal);
  }
  const closeModalBtn = document.querySelectorAll(".modal-close-button");
  closeModalBtn.forEach((item) =>
    item.addEventListener("click", () => {
      currentButton = null;
      closeModal();
    })
  );
  window.addEventListener("keydown", closeModalByEsc);
})();
