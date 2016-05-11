
// change picture on click
// var red = document.getElementById("red-rose");
// var pink = document.getElementById("pink-rose");
// var white = document.getElementById("white-rose");

// red.addEventListener("click", pickLink);
// white.addEventListener("click", pickLink);
// pink.addEventListener("click", pickLink);

// function pickLink() {
// 	var allImages = document.querySelectorAll("img");

// 	for (var i = 0; i < allImages.length; i++) {
// 		allImages[i].className = "hide";
// 	}

// 	var picId = this.attributes["data-img"].value;
// 	// console.log(picId);
// 	var pic = document.getElementById(picId);
// 	if (pic.className === "hide") {
// 		pic.className = "";
// 	} else {
// 		pic.className = "hide";
// 	}	
// }

var checklist = document.getElementById("checklist");

var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");

for (var i = 0; i < items.length; i++) {
	items[i].addEventListener("click", editItem);
	inputs[i].addEventListener("blur", updateItem);
	inputs[i].addEventListener("keypress", itemKeypress);
}

function editItem() {
	this.className = "edit";
	var input = this.querySelector("input");
	input.focus();
	input.setSelectionRange(0, input.value.length);
}

function updateItem() {
	this.previousElementSibling.innerHTML = this.value;
	this.parentNode.className = "";
}

function itemKeypress(event) {
	if (event.which === 13) {
		updateItem.call(this);
	}
}