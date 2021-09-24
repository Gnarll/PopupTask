function SuccessFrame(type, title, text) {
  SuccessFrame.superclass.constructor.call(this, type, title, text);
}

extend(SuccessFrame, MainFrame);

const success = new SuccessFrame("success", "Success!", "Everything is fine.");
