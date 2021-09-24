function MainFrame(type, title, text) {
  "use strict";
  this.type = type;
  this.title = title;
  this.text = text;
}

MainFrame.prototype = {
  constructor: MainFrame,
};

MainFrame.prototype.getTemplate = function () {
  return `
  <div class="popup popup_${this.type}">
    <div class="popup_wrapper">
      <div class="popup_image_container">
        <img class="popup_image" src="./icons/${this.type}.png">
      </div>
      <div class="popup_text" >
        <h3>${this.title}</h3>
        <p>${this.text}</p>
      </div>
      <div class="popup_button">
        <button onclick="this.removePopup()">
          <img class="button_image" src="./icons/close.png">
        </button>
      </div>
    </div>
  </div>`;
};

MainFrame.prototype.renderPopup = function () {
  const popupContainer = document.querySelector(`.popup_container`);
  if (popupContainer) {
    popupContainer.innerHTML += this.getTemplate();
    setTimeout(() => this.removePopup(), 5000);
  }
};

MainFrame.prototype.removePopup = function () {
  const popupContainer = document.querySelector(`.popup_${this.type}`);
  if (popupContainer) popupContainer.remove();
};
