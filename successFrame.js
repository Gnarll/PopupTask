class SuccessFrame extends ToastFrame {
  constructor(type, title, text) {
    super(type, title, text)
  }

  getTemplate() {
    return `
    <div class="popup popup_success visible">
      <div class="popup_wrapper">
        <div class="popup_image_container">
          <img class="popup_image" src="./icons/success.png" alt="logo">
        </div>
        <div class="popup_text" >
          <h3>${this.title}</h3>
          <p>${this.text}</p>
        </div>
        <div class="popup_button">
          <button onclick="success.removePopup()">
            <img class="button_image" src="./icons/close.png" alt="logo">
          </button>
        </div>
      </div>
    </div>`
  }
}

const success = new SuccessFrame("success", "Success!", "Everything is fine.");
