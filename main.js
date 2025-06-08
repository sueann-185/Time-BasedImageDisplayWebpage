function updateImage() {
    const now = new Date();
    const hours = now.getHours();
    const imageElement = document.getElementById('timeImage');
    const descriptionElement = document.getElementById('time-description');
    
    let imageUrl, timePeriod;
    
    // Morning (6am-12pm)
    if (hours >= 6 && hours < 12) {
        imageUrl = 'morning.jpg';
        timePeriod = 'Morning (6am-12pm)';
    }
    // Afternoon (12pm-6pm)
    else if (hours >= 12 && hours < 18) {
        imageUrl = 'afternoon.jpg';
        timePeriod = 'Afternoon (12pm-6pm)';
    }
    // Evening/Night (6pm-6am)
    else {
        imageUrl = 'night.jpg';
        timePeriod = 'Evening/Night (6pm-6am)';
    }
    
    imageElement.src = imageUrl;
    imageElement.alt = `${timePeriod} image`;
    descriptionElement.textContent = `Current Time Period: ${timePeriod}`;
}

// Initialize and update every second
updateImage();
setInterval(updateImage, 1000);