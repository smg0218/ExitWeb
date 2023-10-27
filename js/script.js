function nextPage() {
	var path = window.location.pathname;
	var page = path.split("/").pop();
	if(page == 'index.html')
		location.replace("level1.html");
	else if(page =='level1.html')
		location.replace("level2.html");
	else if(page =='level2.html')
		location.replace("level3.html");
	else if(page =='level3.html')
		location.replace("level4.html");
	else
		location.replace("end.html");
}

function hintOpen() {
	var hintP = document.getElementById("hint")
	hintP.style.visibility="visible";
}

setTimeout(function() {
	var Accent = document.getElementById("accent");
	Accent.style.visibility="visible";
},1050);

setTimeout(function() {
	var hintopen = document.getElementById("hintOpen");
	hintopen.style.visibility="visible";
},2050);