const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
// const brushWidth = document.querySelector("#brush-width");
// const brushColor = document.querySelector("#color-picker");
// const brush = document.querySelector(".brush");
// const eraser = document.querySelector(".eraser");
// const clearBtn = document.querySelector(".clear");
// const saveBtn = document.querySelector(".save");

let isDrawing = false;

window.addEventListener("load", () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
});

function starDraw() {
    isDrawing = true;
    ctx.beginPath();
}

function drawing(e) {
    if (!isDrawing) return;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
}

function endDraw() {
    isDrawing = false;
}
canvas.addEventListener("mousedown", starDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", endDraw);

