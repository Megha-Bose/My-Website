var clicks = 0;

function initiateClicks() {
	var clickStr = localStorage.getItem("clicks");
	if(clickStr == undefined){
		localStorage.setItem("clicks", 0);
		clicks = 0;
	}else{
		clicks = parseInt(clickStr);
	}
	document.getElementById("clicks").innerHTML = clicks;
}

function doClick() {
	clicks += 1;
	localStorage.setItem("clicks", clicks);
	document.getElementById("clicks").innerHTML = clicks;
}

document.getElementById("clickButton").onclick = doClick;
initiateClicks();
