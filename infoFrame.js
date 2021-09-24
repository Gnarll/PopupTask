function InfoFrame(type, title, text) {
  InfoFrame.superclass.constructor.call(this, type, title, text);
}

extend(InfoFrame, MainFrame);

const info = new InfoFrame(
  "info",
  "Information:",
  "There is some information for you."
);
