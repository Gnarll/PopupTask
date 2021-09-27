function ErrorFrame(type, title, text) {
  ErrorFrame.superclass.constructor.call(this, type, title, text);
}

extend(ErrorFrame, MainFrame);

ErrorFrame.prototype.renderPopup = function() {
  ErrorFrame.superclass.renderPopup.call(this)
  var bindedRemovePopup = ErrorFrame.superclass.removePopup.bind(this)
  setTimeout(bindedRemovePopup, 5000)
}

ErrorFrame.prototype.getTemplate = function() {
  return `
    <div class="popup popup_error">
      <div class="popup_wrapper">
        <div class="popup_image_container">
          <img class="popup_image" src="./icons/error.png" alt="logo">
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

var error = new ErrorFrame("error", "Error!", "Oops, something is wrong.");
