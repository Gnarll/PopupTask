function ErrorFrame(type, title, text) {
  ErrorFrame.superclass.constructor.call(this, type, title, text);
}

extend(ErrorFrame, MainFrame);

const error = new ErrorFrame("error", "Error!", "Oops, something is wrong.");
