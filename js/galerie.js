	let bilder = [
  "galerie/bild01.jpg",
  "galerie/bild02.jpg",
  "galerie/bild03.jpg",
  "galerie/bild04.jpg",
  "galerie/bild05.jpg",
  "galerie/bild06.jpg",
  "galerie/bild07.jpg"
];

let bildzahler = 0;

document.addEventListener("DOMContentLoaded", () => {
  let btnFWD = document.querySelector("#btnForward");
  let btnBCK = document.querySelector("#btnBack");
  let pic = document.querySelector("#pic0");

  let touchStartX = 0;
  let touchEndX = 0;

  function nextImage() {
    bildzahler++;
    if (bildzahler === bilder.length) {
      bildzahler = 0;
    }
    pic.src = bilder[bildzahler];
  }

  function prevImage() {
    bildzahler--;
    if (bildzahler === -1) {
      bildzahler = bilder.length - 1;
    }
    pic.src = bilder[bildzahler];
  }

  btnFWD.addEventListener("click", nextImage);
  btnBCK.addEventListener("click", prevImage);

  pic.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  pic.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) < 50) return;

    if (diff > 0) {
      nextImage();
    } else {
      prevImage();
    }
  }
});