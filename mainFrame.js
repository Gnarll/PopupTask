class MainFrame {
  constructor(type, title, text) {
    this.type = type
    this.title = title
    this.text = text
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

  removePopup() {
    const popupContainer = document.querySelector(`.popup_${this.type}`);
    if (popupContainer) {
      if(popupContainer.classList.contains('visible')) {
        popupContainer.classList.add('animated')
        setTimeout(() => popupContainer.remove(), 1000)
      }
      else popupContainer.remove()
    }
  }
}