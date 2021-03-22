let scrollableSection = document.querySelector(".scrollable");
let images = [...document.querySelectorAll(".img")];

// Current position of the scroll
let current = 0;
let target = 0;
let ease = 0.75;

// Set the height of the body to the same height as the scrollable section
document.body.style.height = `${
  scrollableSection.getBoundingClientRect().height
}px`;

images.forEach((image, idx) => {
  image.style.backgroundImage = `url(./images/${idx + 1}.jpg)`;
});

// Our lerp function
function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

function animate() {
  target = window.scrollY;
  current = lerp(current, target, ease);

  scrollableSection.style.transform = `translate3d(0, ${-current}px, 0)`;
  requestAnimationFrame(animate);

  images.forEach((image) => {
    let top = image.parentElement.getBoundingClientRect().top;
    image.style.transform = `rotatex(${top * 0.075}deg) rotatey(${
      top * 0.075
    }deg)`;
    image.style.filter = `grayscale(100%)`;
  });
}

animate();
