# URL-Shortener API

This API service converts a URL to a shortened URL. The API takes the URL in the body of the requests, creates a random id and adds it to the local host to create the shortened URL which redirects to the orginal URL when clicked. The original URL and shortened URL are stored in a mongodb database When the original URL that is stored in the database is passed again, it returns the older shortened URL.
