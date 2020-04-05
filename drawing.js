const BACKGROUND_COLOR = "#000000";
const LINE_COLOR = "#ffffff";
const LINE_WIDTH = 15;
const PADDING_TOP = 50;
let currentX = 0;
let currentY = 0;
let previousX = 0;
let previousY = 0;

prepareCanvas = () => {
  const canvas = document.getElementById("my-canvas");
  const context = canvas.getContext("2d");

  context.fillStyle = BACKGROUND_COLOR;
  context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

  context.strokeStyle = LINE_COLOR;
  context.lineWidth = LINE_WIDTH;
  context.lineJoin = 'round'

  document.addEventListener("mousedown", (event) => {});

  document.addEventListener("mousemove", (event) => {
    previousX = currentX;
    currentX = event.clientX - canvas.offsetLeft;
    console.log(currentY);
    previousY = currentY;
    currentY = event.clientY - canvas.offsetTop + PADDING_TOP;
    context.beginPath();
    context.moveTo(previousX, previousY);
    context.lineTo(currentX, currentY);
    context.closePath();
    context.stroke();
  });
};
