// requestAnimationFrame

// 1 requestAnimationFrame 나중에 실행됨

var ilbuni = document.querySelector(".ilbuni");
var value = document.querySelector(".value");

requestAnimationFrame(() => {
  console.log(0);
});

console.log(1);

// 2

var ilbuni = document.querySelector(".ilbuni");
var value = document.querySelector(".value");
var yPos = 0;

requestAnimationFrame(() => {
  value.innerHTML = yPos;
  yPos++;
});

console.log(1);

// 3 render함수를 빠른속도로 반복시키기

// var ilbuni = document.querySelector(".ilbuni");
// var value = document.querySelector(".value");
// var yPos = 0;

// function render() {
//   value.innerHTML = yPos;
//   yPos++;

//   requestAnimationFrame(render);
// }

// render();

// 4 빠르게 올라가는 숫자변수값을 이미지의 y값으로 넣기

var ilbuni = document.querySelector(".ilbuni");
var value = document.querySelector(".value");
var yPos = 0;

function render() {
  value.innerHTML = yPos;

  ilbuni.style.transform = `translateY(${-yPos}px)`;
  yPos += 10;

  requestAnimationFrame(render);
}

render();

// final

var ilbuni = document.querySelector(".ilbuni");
var value = document.querySelector(".value");
var yPos = 0;
var rafId;

function render() {
  value.innerHTML = yPos;
  ilbuni.style.transform = `translateY(${-yPos}px)`;
  yPos += 10;

  rafId = requestAnimationFrame(render);

  // 1000보다 커지면 자동으로 멈추게 설정
  if (yPos > 1000) {
    cancelAnimationFrame(rafId);
  }
}

render();

// 클릭하면 이미지 멈추게함
window.addEventListener("click", () => {
  cancelAnimationFrame(rafId);
});
