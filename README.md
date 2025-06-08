System Documentation: Time-Based Image Display

# How the System Works
This webpage dynamically displays different images based on the current time of day.
Using JavaScript's built-in Date object, the system detects the user's local time and categorizes it into one of three periods:
- Morning (6:00 AM - 11:59 AM): Shows a sunrise image
- Afternoon (12:00 PM - 5:59 PM): Shows a daylight scene
- Evening/Night (6:00 PM - 5:59 AM): Shows a night scene

The image updates automatically every minute to ensure accuracy as time progresses. The system uses royalty-free images from Unsplash.

# Implementation Logic
1. The JavaScript code first gets the current hour using new Date().getHours()
2. It compares the hour against predefined time ranges
3. Based on the time period, it sets the image source to the corresponding URL
4. The page also displays the current time period above the image
5. The system rechecks and updates the image every 1 seconds

# Deployment
The page is hosted on GitHub Pages, ensuring public accessibility from any device with internet access.
The responsive design works on both mobile and desktop browsers.

Deployment URL:
https://sueann-185.github.io/Time-BasedImageDisplayWebpage
