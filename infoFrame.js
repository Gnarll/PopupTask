function InfoFrame(type, title, text) {
  InfoFrame.superclass.constructor.call(this, type, title, text);
}

extend(InfoFrame, MainFrame);

InfoFrame.prototype.renderPopup = function() {
  InfoFrame.superclass.renderPopup.call(this)
  var bindedRemovePopup = InfoFrame.superclass.removePopup.bind(this)
  setTimeout(bindedRemovePopup, 5000)
}

InfoFrame.prototype.getTemplate = function() {
  return `
    <div class="popup popup_info">
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
