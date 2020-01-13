console.log("hello world");

const photos = [
  "images/IMG_2489.jpg",
  "images/IMG_3450.jpg",
  "images/IMG_3493.jpg",
  "images/IMG_3832.jpg",
  "images/IMG_4193.jpg",
  "images/IMG_4949.jpg",
  "images/IMG_5102.jpg",
  "images/IMG_5296.jpg"
];

const photosWrapperEl = document.querySelector(".rtw-photos-wrapper");
let currentPhotoIdx = 0;

function getRotationAmount() {
  const posOrNeg = Math.random() < 0.5 ? -1 : 1;
  const value = Math.random() * 2 + 0.5;
  return value * posOrNeg;
}

// start doing stuff on load

function ticToc() {
  setTimeout(() => {
    const photoEls = document.querySelectorAll(".rtw-photo");
    const oldestPhotoEl = photoEls[0];
    const newPhoto = document.createElement("img");
    newPhoto.classList.add("rtw-photo");
    newPhoto.src = photos[currentPhotoIdx];
    newPhoto.style.opacity = 0;
    newPhoto.style.transform = `scale(1.2) rotate(${getRotationAmount()}deg)`;

    photosWrapperEl.append(newPhoto);
    if (photoEls.length === photos.length) {
      oldestPhotoEl.style.opacity = 0;
    }
    // 1. add html with zoom, rotate and opacity 0
    //  also add remove css to the last photo

    setTimeout(() => {
      // 2. soon after update rotation and opacity and have them animate with css
      //  actually remove the last css
      newPhoto.style.opacity = 1;
      newPhoto.style.transform = `scale(1) rotate(${getRotationAmount()}deg)`;
      if (photoEls.length === photos.length) {
        photosWrapperEl.removeChild(oldestPhotoEl);
      }
    }, 500);

    currentPhotoIdx =
      currentPhotoIdx === photos.length - 1 ? 0 : currentPhotoIdx + 1;
    ticToc();
  }, 3000);
}

function animateTitleText() {
  const heroEl = document.querySelector("#hero");
  heroEl.style.opacity = "";
}

function animateAppIcons() {
  const iconEls = document.querySelectorAll(".app-box");
  iconEls.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("float");
    }, 500 * i);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    ticToc();
    animateTitleText();
    animateAppIcons();
  }, 0); // for some reason without this, the JS pulls the styles from the DOM too fast in Safari so there is no transition (like it was never opacity 0)
});
