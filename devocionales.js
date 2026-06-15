const sliders = document.querySelectorAll(".slider-wrapper");

sliders.forEach(slider => {

  const track = slider.querySelector(".slider-track");

  const next = slider.querySelector(".next");
  const prev = slider.querySelector(".prev");

  next.addEventListener("click", () => {
    track.scrollBy({
      left: 320,
      behavior: "smooth"
    });
  });

  prev.addEventListener("click", () => {
    track.scrollBy({
      left: -320,
      behavior: "smooth"
    });
  });

});
