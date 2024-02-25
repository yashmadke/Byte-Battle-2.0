let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

document.addEventListener("keydown", function (e) {
  if (e.keyCode === 37) {
    // Left arrow key
    changeSlide(-1);
  } else if (e.keyCode === 39) {
    // Right arrow key
    changeSlide(1);
  }
});
