const BACKGROUND_COLOR = "#000000";
const LINE_COLOR = "#ffffff";
const LINE_WIDTH = 15;
const PADDING_TOP = 50;
let currentX = 0;
let currentY = 0;
let previousX = 0;
let previousY = 0;
let isPainting = false;
window.canvas = null;
window.context = null;
window.hi = "hi";
prepareCanvas = () => {
  canvas = document.getElementById("my-canvas");
  context = canvas.getContext("2d");

  context.fillStyle = BACKGROUND_COLOR;
  context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

  context.strokeStyle = LINE_COLOR;
  context.lineWidth = LINE_WIDTH;
  context.lineJoin = "round";

  document.addEventListener("mousedown", (event) => {
    isPainting = true;
    currentX = event.clientX - canvas.offsetLeft + window.scrollX;
    currentY = event.clientY - canvas.offsetTop + window.scrollY;
  });

  document.addEventListener("mousemove", (event) => {
    if (isPainting) {
      previousX = currentX;
      currentX = event.clientX - canvas.offsetLeft + window.scrollX;
      previousY = currentY;
      currentY = event.clientY - canvas.offsetTop + window.scrollY;
      console.log(currentY);
      console.log(scrollY);
      draw();
    }
  });

  document.addEventListener("mouseup", (event) => {
    isPainting = false;
  });
  canvas.addEventListener("mouseleave", (event) => {
    isPainting = false;
  });

  //touch events
  canvas.addEventListener("touchstart", (event) => {
    isPainting = true;
    currentX = event.touches[0].clientX - canvas.offsetLeft + window.scrollX;
    currentY = event.touches[0].clientY - canvas.offsetTop + window.scrollY;
  });
  canvas.addEventListener("touchend", (event) => {
    isPainting = false;
  });
  canvas.addEventListener("touchcancel", (event) => {
    isPainting = false;
  });
  document.addEventListener("touchmove", (event) => {
    if (isPainting) {
      previousX = currentX;
      currentX = event.touches[0].clientX - canvas.offsetLeft + window.scrollX;
      console.log(currentY);
      previousY = currentY;
      currentY = event.touches[0].clientY - canvas.offsetTop + window.scrollY;
      draw();
    }
  });
};

const clearCanvas = () => {
  currentX = 0;
  currentY = 0;
  previousX = 0;
  previousY = 0;
  context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
};

function draw() {
  context.beginPath();
  context.moveTo(previousX, previousY);
  context.lineTo(currentX, currentY);
  context.closePath();
  context.stroke();
}
