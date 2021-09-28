class ToastFrame extends MainFrame {
  constructor(type, title, text) {
    super(type, title, text)
  }

  renderPopup() {
    super.renderPopup()  
    setTimeout(() => {
        this.removePopup()
    }, 5000)
  }
}