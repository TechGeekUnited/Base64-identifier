window.onload = function() {
	// Get the Base64 identifier from the URL
	var identifier = window.location.search.substring(1);

	// Convert the identifier from Base64 to UTF-8
	var decodedIdentifier = atob(identifier);

	// Load the HTML document using the decoded identifier
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("docViewer").innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", decodedIdentifier, true);
	xhttp.send();
};
