document.getElementById('caps-toggle').addEventListener('change', function () {
  const isChecked = this.checked;
  document.querySelectorAll('.sample').forEach(el => {
    el.style.textTransform = isChecked ? 'uppercase' : 'none';
  });
});


document.getElementById('dark-toggle').addEventListener('change', function () {
  document.body.classList.toggle('dark-mode', this.checked);
});



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
