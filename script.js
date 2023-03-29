window.onload = function() {
	// Get the value after "?" in the URL
	var queryString = window.location.search.substring(1);

	// Append ".html" to the query string to form the new URL
	var newUrl = queryString + ".html";

	// Use document.location.replace() to navigate to the new URL
	document.location.replace(newUrl);
};
