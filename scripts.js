console.log("hello world");

const photos = [
  "https://images.pexels.com/photos/2147486/pexels-photo-2147486.jpeg",
  "https://www.nationalgeographic.com/content/dam/ngdotcom/rights-exempt/homepage/expeditions/travel-promo-expedition-cruises.adapt.470.1.jpg",
  "https://media.gadventures.com/media-server/cache/6f/83/6f830b61d0e25181103d8fdcb41f33d5.jpg",
  "https://images.unsplash.com/photo-1465070845512-2b2dbdc6df66"
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
  const heroEl = document.querySelector('#hero')
  heroEl.style.opacity = ""
}

document.addEventListener("DOMContentLoaded", () => {
  ticToc();
  animateTitleText();
});
