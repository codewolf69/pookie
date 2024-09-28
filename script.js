// Sliding Box Logic
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

document.getElementById("left-arrow").addEventListener("click", () => {
  currentSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
  updateSlidePosition();
});

document.getElementById("right-arrow").addEventListener("click", () => {
  currentSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
  updateSlidePosition();
});

function updateSlidePosition() {
  const slider = document.getElementById("slider");
  slider.style.transform = `translateX(${-100 * currentSlide}%)`;
}
