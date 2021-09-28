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
  return ``;
};

MainFrame.prototype.renderPopup = function () {
  var popupContainer = document.querySelector(`.popup_container`);
  if (popupContainer) {
    popupContainer.innerHTML += this.getTemplate();
  }
};

MainFrame.prototype.removePopup = function () {
  var popupContainer = document.querySelector(`.popup_${this.type}`);
  if (popupContainer) {
    if(popupContainer.classList.contains('visible')) {
      popupContainer.classList.add('animated')
      setTimeout(function(){popupContainer.remove()}, 1000)
    }
    else popupContainer.remove()
  }
};
