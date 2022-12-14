var x = document.getElementById("result");

//Requesting & Checking for device location option 
function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition, showError);
	} else {
		x.innerHTML = "<br> Geo Location is not supported by the browser."

	}
}

// successfully get longitude and latitude 
function showPosition(position) {
	x.innerHTML = "Latitude: " + position.coords.latitude + "<br> Longitude: " + position.coords.longitude;
	x.style.color = "yellow";
	document.body.style.backgroundColor = "green";

	
}

// Errors
function showError(error) {
	switch (error.code) {
		case error.PERMISSION_DENIED:
			x.innerHTML = "User has denied request for geolocation";
			x.style.color = "aliceblue";
			document.body.style.backgroundColor = "red";
			break;
		case error.POSITION_UNAVAILABLE:
			x.innerHTML = "Location information is unavailable";
			document.body.style.backgroundColor = "rgb(184, 184, 46)";
			x.style.color = "red";
			break;
		case error.TIMEOUT:
			x.innerHTML = "Request Timeout";
			document.body.style.backgroundColor = "rgb(236, 156, 156)";
			x.style.color = "white";
			break;
		case error.UNKNOWN_ERROR:
			x.innerHTML = "An Unknown Error Occurred";
			document.body.style.backgroundColor = "yellow";
			x.style.color = "black";
			break;
	}
}