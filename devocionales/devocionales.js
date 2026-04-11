document.querySelectorAll('.slider-container').forEach(container => {
  const track = container.querySelector('.slider-track');
  const prev = container.querySelector('.prev');
  const next = container.querySelector('.next');

  let position = 0;

  const cardWidth = track.querySelector('.dev-card').offsetWidth + 24;
  const visibleWidth = container.offsetWidth;
  const totalWidth = track.scrollWidth;
  const maxScroll = totalWidth - visibleWidth;

  next.addEventListener('click', () => {
    position -= cardWidth;
    if (Math.abs(position) > maxScroll) {
      position = -maxScroll;
    }
    track.style.transform = `translateX(${position}px)`;
  });

  prev.addEventListener('click', () => {
    position += cardWidth;
    if (position > 0) position = 0;
    track.style.transform = `translateX(${position}px)`;
  });
});