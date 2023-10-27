var prevX;
window.onload = function() {
	var mouseEvent = document.getElementById("grandfatherClock");
	mouseEvent.addEventListener('mousedown', mouseDown);
	mouseEvent.addEventListener('mousemove', mouseMove);
}

function mouseDown(e) {
	prevX = e.pageX;
}

function mouseMove(e) {
	if (prevX + 50 <= e.clientX)
		nextPage();
}