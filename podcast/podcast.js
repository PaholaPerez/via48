// ANIMACIÓN SCROLL

const cards = document.querySelectorAll(".podcast-card");

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0px)";

    }

  });

},{
  threshold:0.2
});

cards.forEach(card => {

  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "all .8s ease";

  observer.observe(card);

});
