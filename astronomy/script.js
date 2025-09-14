// Fade-in effect
window.addEventListener("load", () => {
  const text = document.querySelector(".text");
  text.style.opacity = "1";
  text.style.transform = "translateY(0)";
});

document.addEventListener("DOMContentLoaded", () => {
  const exploreBtn = document.getElementById("exploreBtn");
  const blackhole = document.getElementById("blackhole");

  exploreBtn.addEventListener("click", (e) => {
    e.preventDefault(); // cegah default lompat dengan #id
    blackhole.scrollIntoView({ behavior: "smooth" });

    // bersihin hash di URL
    history.replaceState(null, null, " ");
  });
});
  const faders = document.querySelectorAll('.text');

  const options = {
    threshold: 0.2
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('show');
        // kalau mau hanya sekali animasi:
        observer.unobserve(entry.target);
      }
    });
  }, options);

  faders.forEach(fader => {
    observer.observe(fader);
  });
