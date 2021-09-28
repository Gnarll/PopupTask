function InfoFrame(type, title, text) {
  InfoFrame.superclass.constructor.call(this, type, title, text);
}

extend(InfoFrame, ToastFrame);

InfoFrame.prototype.getTemplate = function() {
  return `
    <div class="popup popup_info visible">
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
    </div>`
}

var info = new InfoFrame(
  "info",
  "Information:",
  "There is some information for you."
);
