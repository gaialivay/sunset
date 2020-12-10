var date = new Date();
let hours = date.getHours(); // this will give you the time in 24h format— if it's 7pm, it'll return '19' for example

function loaded() {
	if (hours >= 5 && hours < 6) {
		document.getElementById('video').src = "archive/sunrise.mp4";
	}

	else if (hours >= 6 && hours < 12) {
		 document.getElementById('video').src = "archive/morning.mp4";
	}

	else if (hours >= 12 && hours <15) {
		document.getElementById('video').src = "archive/noon.mp4";
	}

	else if (hours >= 15 && hours <19) {
		document.getElementById('video').src = "archive/after.mp4";
	}

	else if (hours >= 19 && hours < 20) { // if time is greater than 12 AND less than 19 
		document.getElementById('video').src = "archive/sunset.mp4";
	}

	else if (hours >= 20 && hours <5) {
		document.getElementById('video').src = "archive/night.mp4";
	}
}
