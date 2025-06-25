const imageUrls = [
  "https://res.cloudinary.com/dlhshzs37/image/upload/v1750868276/34butka01_zvvbxk.png",
  "https://res.cloudinary.com/dlhshzs37/image/upload/v1750868271/34poster02_ql25eh.png",

  "https://res.cloudinary.com/dlhshzs37/image/upload/v1750868270/34poster04_sauong.png",
  "https://res.cloudinary.com/dlhshzs37/image/upload/v1750868270/34poster05_dusjxf.png",
  "https://res.cloudinary.com/dlhshzs37/image/upload/v1750868269/34poster01_t7upqs.png",
  "https://res.cloudinary.com/dlhshzs37/image/upload/v1750868269/34poster03_ufjzkz.png",
  "https://res.cloudinary.com/dlhshzs37/image/upload/v1750869138/34wo01_zfnoir.png",

  "https://res.cloudinary.com/dlhshzs37/image/upload/v1750868595/34bu02_e0ctgx.png",
  "https://res.cloudinary.com/dlhshzs37/image/upload/v1750868596/34bu01_tm8r7d.png"
  // Add more as needed
];

let currentIndex = 0;
const imgElement = document.getElementById("portfolio-image");

function showImage(index) {
  imgElement.src = imageUrls[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % imageUrls.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
  showImage(currentIndex);
}

document.getElementById("right-arrow").addEventListener("click", nextImage);
document.getElementById("left-arrow").addEventListener("click", prevImage);

// Init first image
showImage(currentIndex);
