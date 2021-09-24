function WarningFrame(type, title, text) {
  WarningFrame.superclass.constructor.call(this, type, title, text);
}

extend(WarningFrame, MainFrame);

const warning = new WarningFrame(
  "warning",
  "Warning!",
  "Beware, there are some problems."
);
