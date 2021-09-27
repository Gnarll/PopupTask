function WarningFrame(type, title, text) {
  WarningFrame.superclass.constructor.call(this, type, title, text);
}

extend(WarningFrame, MainFrame);

WarningFrame.prototype.renderPopup = function() {
  WarningFrame.superclass.renderPopup.call(this)
  var bindedRemovePopup = WarningFrame.superclass.removePopup.bind(this)
  setTimeout(bindedRemovePopup, 5000)
}

WarningFrame.prototype.getTemplate = function() {
  return `
    <div class="popup popup_warning">
      <div class="popup_wrapper">
        <div class="popup_image_container">
          <img class="popup_image" src="./icons/warning.png" alt="logo">
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

var warning = new WarningFrame(
  "warning",
  "Warning!",
  "Beware, there are some problems."
);
