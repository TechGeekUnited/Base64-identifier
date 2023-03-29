window.onload = function() {
	// Get the value after "?" in the URL
	var queryString = window.location.search.substring(1);

	// Append ".html" to the query string to form the new URL
	var newUrl = queryString + ".html";

	// Use location.replace() to navigate to the new URL
	window.location.replace(newUrl);
};
