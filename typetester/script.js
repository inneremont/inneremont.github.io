function updateSize(newVal) {
  var newFontSize = newVal + 'px';
  document.querySelectorAll('.sample').forEach(el => {
    el.style.fontSize = newFontSize;
  });
}

function updateLineHeight(newVal) {
  var newFontSize = newVal + '%';
  document.querySelectorAll('.sample').forEach(el => {
    el.style.lineHeight = newFontSize;
  });
}

function updateFont(newVal) {
  document.querySelectorAll('.sample').forEach(el => {
    el.style.fontFamily = newVal;
  });
}
