
if (window.location.hash) {
  window.scrollTo(0, 0);
}

// Smooth scroll to anchor on load
window.addEventListener("load", () => {
  const hash = window.location.hash;
  if (hash) {
    const el = document.querySelector(hash);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, 100); // May increase if you have heavy layout
    }
  }
});

window.addEventListener("load", () => {
  const ticker = document.getElementById("ticker");
  const clone = ticker.cloneNode(true);
  clone.setAttribute("aria-hidden", "true");

  clone.style.position = "absolute";
  clone.style.top = "0";
  ticker.parentElement.appendChild(clone);

  const tickerWidth = ticker.offsetWidth;
  clone.style.left = `${tickerWidth}px`;

  let pos = 0;

  function animate() {
    pos -= 1;

    // Seamless loop using modulo logic
    const totalWidth = tickerWidth * 2;
    const offset = pos % totalWidth;

    ticker.style.transform = `translateX(${offset}px)`;
    clone.style.transform = `translateX(${offset + tickerWidth}px)`;

    requestAnimationFrame(animate);
  }

  animate();
});


function toggleTheme(id) {
  document.getElementById(id).classList.toggle("dark");
}

function updateFont(slider, className) {
  const fontSize = slider.value + "px";
  const samples = document.querySelectorAll("." + className);
  samples.forEach(el => {
    el.style.fontSize = fontSize;
  });
}

function updateLineHeight(slider, className) {
  const lineHeight = parseFloat(slider.value);
  const samples = document.querySelectorAll("." + className);
  samples.forEach(el => {
    el.style.lineHeight = lineHeight;
  });
  console.log("Updated line height to", lineHeight); // debugging
}


function toggleCaps(checkbox, className) {
  const transform = checkbox.checked ? "uppercase" : "none";
  const samples = document.querySelectorAll("." + className);
  samples.forEach(el => {
    el.style.textTransform = transform;
  });
}
