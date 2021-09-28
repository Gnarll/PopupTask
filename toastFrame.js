function ToastFrame(type, title, text) {
    ToastFrame.superclass.constructor.call(this, type, title, text)
}

extend(ToastFrame, MainFrame)

ToastFrame.prototype.renderPopup = function() {
    ToastFrame.superclass.renderPopup.call(this)
    var bindedRemovePopup = WarningFrame.superclass.removePopup.bind(this)
    setTimeout(bindedRemovePopup, 5000)
}