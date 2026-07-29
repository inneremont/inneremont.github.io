const items = [
  { type: "image", src: "https://res.cloudinary.com/dlhshzs37/image/upload/v1750868276/34butka01_zvvbxk.png" },
  { type: "image", src: "https://res.cloudinary.com/dlhshzs37/image/upload/v1750868271/34poster02_ql25eh.png" },
  { type: "image", src: "https://res.cloudinary.com/dlhshzs37/image/upload/v1750868270/34poster04_sauong.png" },
  { type: "image", src: "https://res.cloudinary.com/dlhshzs37/image/upload/v1750868270/34poster05_dusjxf.png" },
  { type: "image", src: "https://res.cloudinary.com/dlhshzs37/image/upload/v1750868269/34poster01_t7upqs.png" },
  { type: "image", src: "https://res.cloudinary.com/dlhshzs37/image/upload/v1750868269/34poster03_ufjzkz.png" },
  { type: "image", src: "https://res.cloudinary.com/dlhshzs37/image/upload/v1750869138/34wo01_zfnoir.png" },
  { type: "image", src: "https://res.cloudinary.com/dlhshzs37/image/upload/v1750868595/34bu02_e0ctgx.png" },
  { type: "image", src: "https://res.cloudinary.com/dlhshzs37/image/upload/v1750868596/34bu01_tm8r7d.png" },

  // New project entry — fill in your real URLs and text
  {
    type: "project",
    image: "https://res.cloudinary.com/dlhshzs37/image/upload/v1785358232/operahus01_Large_vqj9t6.png",
    video: "https://res.cloudinary.com/dlhshzs37/video/upload/v1785357447/opera_video_j8yejz.mp4",
    description: {
      fi: "Ensimmäinen kappale suomeksi.",
      sv: "Första stycket på svenska.",
      en: "First paragraph in English."
    }
  }
  // Add more as needed
];

let currentIndex = 0;
let currentLang = "fi";

const imgElement = document.getElementById("portfolio-image");
const videoElement = document.getElementById("portfolio-video");
const captionEl = document.getElementById("caption");
const captionText = document.getElementById("caption-text");
const langBtns = document.querySelectorAll(".lang-btn");

function showItem(index) {
  const item = items[index];

  if (item.type === "image") {
    imgElement.src = item.src;
    imgElement.style.display = "block";
    videoElement.style.display = "none";
    videoElement.pause();
    captionEl.style.display = "none";
  }

  if (item.type === "project") {
    imgElement.src = item.image;
    imgElement.style.display = "block";
    videoElement.src = item.video;
    videoElement.style.display = "block";
    videoElement.play();
    captionEl.style.display = "block";
    renderCaption(item);
  }
}

function renderCaption(item) {
  captionText.textContent = item.description[currentLang];
}

function nextItem() {
  currentIndex = (currentIndex + 1) % items.length;
  showItem(currentIndex);
}

function prevItem() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showItem(currentIndex);
}

document.getElementById("right-arrow").addEventListener("click", nextItem);
document.getElementById("left-arrow").addEventListener("click", prevItem);

langBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;
    langBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    if (items[currentIndex].type === "project") {
      renderCaption(items[currentIndex]);
    }
  });
});

// Init first item
showItem(currentIndex);