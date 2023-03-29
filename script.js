window.onload = function() {
	// Get the Base64 identifiers from the URL
	var identifiers = window.location.search.substring(1).split("&");

	// Convert the identifiers from Base64 to UTF-8 and add ".html" to the end
	var decodedIdentifier1 = atob(identifiers[0]) + ".html";
	var decodedIdentifier2 = atob(identifiers[1]) + ".html";

	// Load the HTML document using the decoded identifiers
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("docViewer").innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", decodedIdentifier1 + "?" + decodedIdentifier2, true);
	xhttp.send();
};
