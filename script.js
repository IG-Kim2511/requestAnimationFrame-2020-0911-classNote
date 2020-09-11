const ilbuni = document.querySelector(".ilbuni");
const value = document.querySelector(".value");
let yPos = 0;
let rafId;

function render() {
  value.innerHTML = yPos;
  ilbuni.style.transform = `translateY(${-yPos}px)`;
  yPos += 10;

  rafId = requestAnimationFrame(render);

  if (yPos > 500) {
    cancelAnimationFrame(rafId);
  }
}

render();

window.addEventListener("click", () => {
  cancelAnimationFrame(rafId);
});
