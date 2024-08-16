# URL-Shortener API

This API service converts a URL to a shortened URL. The API takes the URL in the body of the requests, creates a random id and adds it to the local host to create the shortened URL which redirects to the orginal URL when clicked. The original URL and shortened URL are stored in a mongodb database. When the original URL that is stored in the database is passed again, it returns the older shortened URL.
## Screenshots
![urlshorts](https://github.com/user-attachments/assets/425a345f-6cc6-490c-a0a5-1c6f375b9dd2)
![urlOutput](https://github.com/user-attachments/assets/22f6bbb4-b0ad-4106-9d6b-1ce2eb61b907)
![urlshortened](https://github.com/user-attachments/assets/935f9970-2e33-46a9-8ffe-f899378b674c)
