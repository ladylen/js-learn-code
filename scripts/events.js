var red = document.getElementById("red-rose");
var pink = document.getElementById("pink-rose");
var white = document.getElementById("white-rose");

red.addEventListener("click", pickLink);
white.addEventListener("click", pickLink);
pink.addEventListener("click", pickLink);

function pickLink() {
	var allImages = document.querySelectorAll("img");

	for (var i = 0; i < allImages.length; i++) {
		allImages[i].className = "hide";
	}

	var picId = this.attributes["data-img"].value;
	// console.log(picId);
	var pic = document.getElementById(picId);
	if (pic.className === "hide") {
		pic.className = "";
	} else {
		pic.className = "hide";
	}	
}