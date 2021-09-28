class ToastFrame extends MainFrame {
  constructor(type, title, text) {
    super(type, title, text);
  }

  renderPopup() {
    super.renderPopup();
    const currentId = this.getId();
    setTimeout(() => {
      this.removePopup(currentId);
    }, 5000);
  }
}
