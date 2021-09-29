class MainFrame {
  constructor(type, title, text) {
    this.type = type;
    this.title = title;
    this.text = text;
  }

  static id = 0;

  getId() {
    return MainFrame.id;
  }

  incrementId() {
    MainFrame.id++;
  }

  getTemplate() {
    return ``;
  }

  renderPopup() {
    const popupContainer = document.querySelector(`.popup_container`);
    if (popupContainer) {
      popupContainer.innerHTML += this.getTemplate();
    }
  }

  removePopup(id) {
    const popupContainer = document.getElementById(`${id}`);
    if (popupContainer) {
      if (popupContainer.classList.contains("visible")) {
        popupContainer.classList.add("animated");
        setTimeout(() => popupContainer.remove(), 1000);
      } else popupContainer.remove();
    }
  }
}
