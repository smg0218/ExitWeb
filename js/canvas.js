let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

context.beginPath();
context.rect(0, 0, 100, 100);
context.strokeStyle = "white";
context. lineWidth = 1;
context.stroke();

let startX = 0, startY = 0;
let dragging = false;

function init() {
	context.lineWidth = 2;
	context.strokeStyle = "white";

	canvas.addEventListener("mouseover", function(e) {move(e)}, false);
	canvas.addEventListener("mousedown", function(e) {down(e)}, false);
	canvas.addEventListener("mouseup", function(e) {up(e)}, false);
	canvas.addEventListener("mouseout", function(e) {out(e)}, false);
}

function draw(curX, curY) {
	context.beginPath();
	context.moveTo(startX, startY);
	context.lineTo(curX, curY);
	context.stroke();
}

function down(e) {
	startX = e.offsetX; startY = e.offsetY; dragging = true;
}
function up(e) { dragging = false;}
function move(e) {
	if(!dragging) return;
	let curX = e.offsetX, curY = e.offsetY;
	draw(curX, curY);
	startX = curX; startY = curY;
}
function out(e) { dragging = false;}