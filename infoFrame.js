class InfoFrame extends ToastFrame {
  constructor(type, title, text) {
    super(type, title, text);
  }

  getTemplate() {
    this.incrementId();
    return `
    <div class="popup popup_info visible" id="${this.getId()}">
      <div class="popup_wrapper">
        <div class="popup_image_container">
          <img class="popup_image" src="./icons/info.png" alt="logo">
        </div>
        <div class="popup_text" >
          <h3>${this.title}</h3>
          <p>${this.text}</p>
        </div>
        <div class="popup_button">
          <button onclick="info.removePopup()">
            <img class="button_image" src="./icons/close.png" alt="logo">
          </button>
        </div>
      </div>
    </div>`;
  }
}

const info = new InfoFrame(
  "info",
  "Information:",
  "There is some information for you."
);
