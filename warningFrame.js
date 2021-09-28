function WarningFrame(type, title, text) {
  WarningFrame.superclass.constructor.call(this, type, title, text);
}

extend(WarningFrame, ToastFrame);

WarningFrame.prototype.getTemplate = function() {
  return `
    <div class="popup popup_warning visible">
      <div class="popup_wrapper">
        <div class="popup_image_container">
          <img class="popup_image" src="./icons/warning.png" alt="logo">
        </div>
        <div class="popup_text" >
          <h3>${this.title}</h3>
          <p>${this.text}</p>
        </div>
        <div class="popup_button">
          <button onclick="warning.removePopup()">
            <img class="button_image" src="./icons/close.png" alt="logo">
          </button>
        </div>
      </div>
    </div>`
}

var warning = new WarningFrame(
  "warning",
  "Warning!",
  "Beware, there are some problems."
);
