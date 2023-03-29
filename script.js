window.onload = function() {
	// Get the value after "?" in the URL
	var queryString = window.location.search.substring(1);

	// Decode the Base64-encoded query string to UTF-8
	var decodedQueryString = decodeURIComponent(atob(queryString));

	// Append ".html" to the decoded query string to form the new URL
	var newUrl = decodedQueryString + ".html";

	// Use document.location.replace() to navigate to the new URL
	document.location.replace(newUrl);
};
