function SuccessFrame(type, title, text) {
  SuccessFrame.superclass.constructor.call(this, type, title, text);
}

extend(SuccessFrame, MainFrame);

SuccessFrame.prototype.renderPopup = function() {
  SuccessFrame.superclass.renderPopup.call(this)
  var bindedRemovePopup = SuccessFrame.superclass.removePopup.bind(this)
  setTimeout(bindedRemovePopup, 5000)
}

SuccessFrame.prototype.getTemplate = function() {
  return `
    <div class="popup popup_success">
      <div class="popup_wrapper">
        <div class="popup_image_container">
          <img class="popup_image" src="./icons/success.png" alt="logo">
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

var success = new SuccessFrame("success", "Success!", "Everything is fine.");
