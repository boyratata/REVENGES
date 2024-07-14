document.addEventListener('DOMContentLoaded', function () {
    var video = document.createElement('video');
    video.loop = true;
    video.className = 'video-background';

    var source = document.createElement('source');
    source.src = 'https://github.com/boyratata/REVENGES/raw/main/background.mp4'; // Replace with your video URL
    source.type = 'video/mp4';

    video.appendChild(source);
    document.body.appendChild(video);

    // Event listener for when enough of the video has loaded to play through
    video.addEventListener('canplaythrough', function() {
        video.muted = false; // Unmute the video
        video.play().then(function() {
            console.log('Video autoplay started with sound.');
        }).catch(function(error) {
            console.error('Video autoplay failed:', error);
        });
    });

    // Attempt to play the video immediately
    video.load(); // This may help trigger canplaythrough earlier

    // Fallback: If canplaythrough doesn't trigger (very rare), try to play after a short delay
    setTimeout(function() {
        if (video.paused) {
            video.muted = false; // Unmute the video
            video.play().then(function() {
                console.log('Video autoplay started with sound.');
            }).catch(function(error) {
                console.error('Video autoplay failed even after delay:', error);
            });
        }
    }, 200); // Delay in milliseconds (adjust as needed)
});
