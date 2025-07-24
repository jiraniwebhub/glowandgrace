

    document.getElementById("whatsappForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const service = document.getElementById("service").value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;
      const notes = document.getElementById("message").value.trim();
      const whatsappNumber = "254799757915";

      const message = `Hello, my name is ${name} (${phone}). I'd like to book *${service}* on *${date}* at *${time}*. ${notes ? "Notes: " + notes : ""}`;
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    });

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });


  // carousel.js
document.addEventListener("DOMContentLoaded", function () {
  const carouselTrack = document.querySelector('.carousel-track');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  const dots = document.querySelectorAll('.carousel-dot');

  let currentIndex = 0;

  function updateCarousel() {
    const slideWidth = carouselTrack.clientWidth;
    carouselTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % dots.length;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + dots.length) % dots.length;
    updateCarousel();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
    });
  });

  // Make it responsive
  window.addEventListener('resize', updateCarousel);
});
