const slides = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prev = document.getElementById("slide-arrow-prev");
const next = document.getElementById("slide-arrow-next");

next.addEventListener("click", () => {
  const width = slide.clientWidth;
  slides.scrollLeft += width;
});
prev.addEventListener("click", () => {
  const width = slide.clientWidth;
  slides.scrollLeft -= width;
});
